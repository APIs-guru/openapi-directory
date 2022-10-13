package operations

import (
	"openapi/pkg/models/shared"
)

type AlltrRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	RegNum   string `json:"RegNum"`
	UID      string `json:"UID"`
}

type AlltrRequestBodyFormatEnum string

const (
	AlltrRequestBodyFormatEnumPdf AlltrRequestBodyFormatEnum = "pdf"
)

type AlltrRequestBody struct {
	CertificateParameters *AlltrRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                AlltrRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type AlltrSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type AlltrRequest struct {
	Request  *AlltrRequestBody `request:"mediaType=application/json"`
	Security AlltrSecurity
}

type Alltr400ApplicationJSONErrorEnum string

const (
	Alltr400ApplicationJSONErrorEnumMissingParameter Alltr400ApplicationJSONErrorEnum = "missing_parameter"
	Alltr400ApplicationJSONErrorEnumInvalidParameter Alltr400ApplicationJSONErrorEnum = "invalid_parameter"
	Alltr400ApplicationJSONErrorEnumInvalidFormat    Alltr400ApplicationJSONErrorEnum = "invalid_format"
	Alltr400ApplicationJSONErrorEnumInvalidTxnid     Alltr400ApplicationJSONErrorEnum = "invalid_txnid"
	Alltr400ApplicationJSONErrorEnumInvalidConsentid Alltr400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Alltr400ApplicationJSONErrorDescriptionEnum string

const (
	Alltr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Alltr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Alltr400ApplicationJSONErrorDescriptionEnumBadRequest                              Alltr400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Alltr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Alltr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Alltr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Alltr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Alltr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Alltr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Alltr400ApplicationJSON struct {
	Error            *Alltr400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Alltr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Alltr401ApplicationJSONErrorEnum string

const (
	Alltr401ApplicationJSONErrorEnumInvalidAuthentication Alltr401ApplicationJSONErrorEnum = "invalid_authentication"
	Alltr401ApplicationJSONErrorEnumInvalidAuthorization  Alltr401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Alltr401ApplicationJSONErrorDescriptionEnum string

const (
	Alltr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Alltr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Alltr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Alltr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Alltr401ApplicationJSON struct {
	Error            *Alltr401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Alltr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Alltr404ApplicationJSONErrorEnum string

const (
	Alltr404ApplicationJSONErrorEnumRecordNotFound Alltr404ApplicationJSONErrorEnum = "record_not_found"
	Alltr404ApplicationJSONErrorEnumURLNotFound    Alltr404ApplicationJSONErrorEnum = "url_not_found"
)

type Alltr404ApplicationJSONErrorDescriptionEnum string

const (
	Alltr404ApplicationJSONErrorDescriptionEnumNoRecordFound               Alltr404ApplicationJSONErrorDescriptionEnum = "No record found"
	Alltr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Alltr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Alltr404ApplicationJSON struct {
	Error            *Alltr404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Alltr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Alltr500ApplicationJSONErrorEnum string

const (
	Alltr500ApplicationJSONErrorEnumInternalServerError Alltr500ApplicationJSONErrorEnum = "internal_server_error"
)

type Alltr500ApplicationJSONErrorDescriptionEnum string

const (
	Alltr500ApplicationJSONErrorDescriptionEnumInternalServerError Alltr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Alltr500ApplicationJSON struct {
	Error            *Alltr500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Alltr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Alltr502ApplicationJSONErrorEnum string

const (
	Alltr502ApplicationJSONErrorEnumBadGatewy Alltr502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Alltr502ApplicationJSONErrorDescriptionEnum string

const (
	Alltr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Alltr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Alltr502ApplicationJSON struct {
	Error            *Alltr502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Alltr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Alltr503ApplicationJSONErrorEnum string

const (
	Alltr503ApplicationJSONErrorEnumServiceUnavailable Alltr503ApplicationJSONErrorEnum = "service_unavailable"
)

type Alltr503ApplicationJSONErrorDescriptionEnum string

const (
	Alltr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Alltr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Alltr503ApplicationJSON struct {
	Error            *Alltr503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Alltr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Alltr504ApplicationJSONErrorEnum string

const (
	Alltr504ApplicationJSONErrorEnumGatewayTimeout Alltr504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Alltr504ApplicationJSONErrorDescriptionEnum string

const (
	Alltr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Alltr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Alltr504ApplicationJSON struct {
	Error            *Alltr504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Alltr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type AlltrResponse struct {
	ContentType                   string
	StatusCode                    int64
	Alltr400ApplicationJSONObject *Alltr400ApplicationJSON
	Alltr401ApplicationJSONObject *Alltr401ApplicationJSON
	Alltr404ApplicationJSONObject *Alltr404ApplicationJSON
	Alltr500ApplicationJSONObject *Alltr500ApplicationJSON
	Alltr502ApplicationJSONObject *Alltr502ApplicationJSON
	Alltr503ApplicationJSONObject *Alltr503ApplicationJSON
	Alltr504ApplicationJSONObject *Alltr504ApplicationJSON
}

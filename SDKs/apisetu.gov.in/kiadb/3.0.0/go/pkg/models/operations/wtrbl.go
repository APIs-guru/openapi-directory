package operations

import (
	"openapi/pkg/models/shared"
)

type WtrblRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	RegNum   string `json:"RegNum"`
	UID      string `json:"UID"`
}

type WtrblRequestBodyFormatEnum string

const (
	WtrblRequestBodyFormatEnumPdf WtrblRequestBodyFormatEnum = "pdf"
)

type WtrblRequestBody struct {
	CertificateParameters *WtrblRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                WtrblRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type WtrblSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type WtrblRequest struct {
	Request  *WtrblRequestBody `request:"mediaType=application/json"`
	Security WtrblSecurity
}

type Wtrbl400ApplicationJSONErrorEnum string

const (
	Wtrbl400ApplicationJSONErrorEnumMissingParameter Wtrbl400ApplicationJSONErrorEnum = "missing_parameter"
	Wtrbl400ApplicationJSONErrorEnumInvalidParameter Wtrbl400ApplicationJSONErrorEnum = "invalid_parameter"
	Wtrbl400ApplicationJSONErrorEnumInvalidFormat    Wtrbl400ApplicationJSONErrorEnum = "invalid_format"
	Wtrbl400ApplicationJSONErrorEnumInvalidTxnid     Wtrbl400ApplicationJSONErrorEnum = "invalid_txnid"
	Wtrbl400ApplicationJSONErrorEnumInvalidConsentid Wtrbl400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Wtrbl400ApplicationJSONErrorDescriptionEnum string

const (
	Wtrbl400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Wtrbl400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Wtrbl400ApplicationJSONErrorDescriptionEnumBadRequest                              Wtrbl400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Wtrbl400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Wtrbl400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Wtrbl400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Wtrbl400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Wtrbl400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Wtrbl400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Wtrbl400ApplicationJSON struct {
	Error            *Wtrbl400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Wtrbl400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Wtrbl401ApplicationJSONErrorEnum string

const (
	Wtrbl401ApplicationJSONErrorEnumInvalidAuthentication Wtrbl401ApplicationJSONErrorEnum = "invalid_authentication"
	Wtrbl401ApplicationJSONErrorEnumInvalidAuthorization  Wtrbl401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Wtrbl401ApplicationJSONErrorDescriptionEnum string

const (
	Wtrbl401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Wtrbl401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Wtrbl401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Wtrbl401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Wtrbl401ApplicationJSON struct {
	Error            *Wtrbl401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Wtrbl401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Wtrbl404ApplicationJSONErrorEnum string

const (
	Wtrbl404ApplicationJSONErrorEnumRecordNotFound Wtrbl404ApplicationJSONErrorEnum = "record_not_found"
	Wtrbl404ApplicationJSONErrorEnumURLNotFound    Wtrbl404ApplicationJSONErrorEnum = "url_not_found"
)

type Wtrbl404ApplicationJSONErrorDescriptionEnum string

const (
	Wtrbl404ApplicationJSONErrorDescriptionEnumNoRecordFound               Wtrbl404ApplicationJSONErrorDescriptionEnum = "No record found"
	Wtrbl404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Wtrbl404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Wtrbl404ApplicationJSON struct {
	Error            *Wtrbl404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Wtrbl404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Wtrbl500ApplicationJSONErrorEnum string

const (
	Wtrbl500ApplicationJSONErrorEnumInternalServerError Wtrbl500ApplicationJSONErrorEnum = "internal_server_error"
)

type Wtrbl500ApplicationJSONErrorDescriptionEnum string

const (
	Wtrbl500ApplicationJSONErrorDescriptionEnumInternalServerError Wtrbl500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Wtrbl500ApplicationJSON struct {
	Error            *Wtrbl500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Wtrbl500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Wtrbl502ApplicationJSONErrorEnum string

const (
	Wtrbl502ApplicationJSONErrorEnumBadGatewy Wtrbl502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Wtrbl502ApplicationJSONErrorDescriptionEnum string

const (
	Wtrbl502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Wtrbl502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Wtrbl502ApplicationJSON struct {
	Error            *Wtrbl502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Wtrbl502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Wtrbl503ApplicationJSONErrorEnum string

const (
	Wtrbl503ApplicationJSONErrorEnumServiceUnavailable Wtrbl503ApplicationJSONErrorEnum = "service_unavailable"
)

type Wtrbl503ApplicationJSONErrorDescriptionEnum string

const (
	Wtrbl503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Wtrbl503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Wtrbl503ApplicationJSON struct {
	Error            *Wtrbl503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Wtrbl503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Wtrbl504ApplicationJSONErrorEnum string

const (
	Wtrbl504ApplicationJSONErrorEnumGatewayTimeout Wtrbl504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Wtrbl504ApplicationJSONErrorDescriptionEnum string

const (
	Wtrbl504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Wtrbl504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Wtrbl504ApplicationJSON struct {
	Error            *Wtrbl504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Wtrbl504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type WtrblResponse struct {
	ContentType                   string
	StatusCode                    int64
	Wtrbl400ApplicationJSONObject *Wtrbl400ApplicationJSON
	Wtrbl401ApplicationJSONObject *Wtrbl401ApplicationJSON
	Wtrbl404ApplicationJSONObject *Wtrbl404ApplicationJSON
	Wtrbl500ApplicationJSONObject *Wtrbl500ApplicationJSON
	Wtrbl502ApplicationJSONObject *Wtrbl502ApplicationJSON
	Wtrbl503ApplicationJSONObject *Wtrbl503ApplicationJSON
	Wtrbl504ApplicationJSONObject *Wtrbl504ApplicationJSON
}

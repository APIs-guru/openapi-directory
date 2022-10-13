package operations

import (
	"openapi/pkg/models/shared"
)

type PsnocRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	RegNum   string `json:"RegNum"`
	UID      string `json:"UID"`
}

type PsnocRequestBodyFormatEnum string

const (
	PsnocRequestBodyFormatEnumPdf PsnocRequestBodyFormatEnum = "pdf"
)

type PsnocRequestBody struct {
	CertificateParameters *PsnocRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                PsnocRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type PsnocSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type PsnocRequest struct {
	Request  *PsnocRequestBody `request:"mediaType=application/json"`
	Security PsnocSecurity
}

type Psnoc400ApplicationJSONErrorEnum string

const (
	Psnoc400ApplicationJSONErrorEnumMissingParameter Psnoc400ApplicationJSONErrorEnum = "missing_parameter"
	Psnoc400ApplicationJSONErrorEnumInvalidParameter Psnoc400ApplicationJSONErrorEnum = "invalid_parameter"
	Psnoc400ApplicationJSONErrorEnumInvalidFormat    Psnoc400ApplicationJSONErrorEnum = "invalid_format"
	Psnoc400ApplicationJSONErrorEnumInvalidTxnid     Psnoc400ApplicationJSONErrorEnum = "invalid_txnid"
	Psnoc400ApplicationJSONErrorEnumInvalidConsentid Psnoc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Psnoc400ApplicationJSONErrorDescriptionEnum string

const (
	Psnoc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Psnoc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Psnoc400ApplicationJSONErrorDescriptionEnumBadRequest                              Psnoc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Psnoc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Psnoc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Psnoc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Psnoc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Psnoc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Psnoc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Psnoc400ApplicationJSON struct {
	Error            *Psnoc400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Psnoc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Psnoc401ApplicationJSONErrorEnum string

const (
	Psnoc401ApplicationJSONErrorEnumInvalidAuthentication Psnoc401ApplicationJSONErrorEnum = "invalid_authentication"
	Psnoc401ApplicationJSONErrorEnumInvalidAuthorization  Psnoc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Psnoc401ApplicationJSONErrorDescriptionEnum string

const (
	Psnoc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Psnoc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Psnoc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Psnoc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Psnoc401ApplicationJSON struct {
	Error            *Psnoc401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Psnoc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Psnoc404ApplicationJSONErrorEnum string

const (
	Psnoc404ApplicationJSONErrorEnumRecordNotFound Psnoc404ApplicationJSONErrorEnum = "record_not_found"
	Psnoc404ApplicationJSONErrorEnumURLNotFound    Psnoc404ApplicationJSONErrorEnum = "url_not_found"
)

type Psnoc404ApplicationJSONErrorDescriptionEnum string

const (
	Psnoc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Psnoc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Psnoc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Psnoc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Psnoc404ApplicationJSON struct {
	Error            *Psnoc404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Psnoc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Psnoc500ApplicationJSONErrorEnum string

const (
	Psnoc500ApplicationJSONErrorEnumInternalServerError Psnoc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Psnoc500ApplicationJSONErrorDescriptionEnum string

const (
	Psnoc500ApplicationJSONErrorDescriptionEnumInternalServerError Psnoc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Psnoc500ApplicationJSON struct {
	Error            *Psnoc500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Psnoc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Psnoc502ApplicationJSONErrorEnum string

const (
	Psnoc502ApplicationJSONErrorEnumBadGatewy Psnoc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Psnoc502ApplicationJSONErrorDescriptionEnum string

const (
	Psnoc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Psnoc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Psnoc502ApplicationJSON struct {
	Error            *Psnoc502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Psnoc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Psnoc503ApplicationJSONErrorEnum string

const (
	Psnoc503ApplicationJSONErrorEnumServiceUnavailable Psnoc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Psnoc503ApplicationJSONErrorDescriptionEnum string

const (
	Psnoc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Psnoc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Psnoc503ApplicationJSON struct {
	Error            *Psnoc503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Psnoc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Psnoc504ApplicationJSONErrorEnum string

const (
	Psnoc504ApplicationJSONErrorEnumGatewayTimeout Psnoc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Psnoc504ApplicationJSONErrorDescriptionEnum string

const (
	Psnoc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Psnoc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Psnoc504ApplicationJSON struct {
	Error            *Psnoc504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Psnoc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type PsnocResponse struct {
	ContentType                   string
	StatusCode                    int64
	Psnoc400ApplicationJSONObject *Psnoc400ApplicationJSON
	Psnoc401ApplicationJSONObject *Psnoc401ApplicationJSON
	Psnoc404ApplicationJSONObject *Psnoc404ApplicationJSON
	Psnoc500ApplicationJSONObject *Psnoc500ApplicationJSON
	Psnoc502ApplicationJSONObject *Psnoc502ApplicationJSON
	Psnoc503ApplicationJSONObject *Psnoc503ApplicationJSON
	Psnoc504ApplicationJSONObject *Psnoc504ApplicationJSON
}

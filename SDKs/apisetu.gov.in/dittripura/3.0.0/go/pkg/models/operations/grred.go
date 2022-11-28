package operations

import (
	"openapi/pkg/models/shared"
)

type GrredRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type GrredRequestBodyFormatEnum string

const (
	GrredRequestBodyFormatEnumPdf GrredRequestBodyFormatEnum = "pdf"
)

type GrredRequestBody struct {
	CertificateParameters *GrredRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                GrredRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type GrredSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Grred400ApplicationJSONErrorEnum string

const (
	Grred400ApplicationJSONErrorEnumMissingParameter Grred400ApplicationJSONErrorEnum = "missing_parameter"
	Grred400ApplicationJSONErrorEnumInvalidParameter Grred400ApplicationJSONErrorEnum = "invalid_parameter"
	Grred400ApplicationJSONErrorEnumInvalidFormat    Grred400ApplicationJSONErrorEnum = "invalid_format"
	Grred400ApplicationJSONErrorEnumInvalidTxnid     Grred400ApplicationJSONErrorEnum = "invalid_txnid"
	Grred400ApplicationJSONErrorEnumInvalidConsentid Grred400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Grred400ApplicationJSONErrorDescriptionEnum string

const (
	Grred400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Grred400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Grred400ApplicationJSONErrorDescriptionEnumBadRequest                              Grred400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Grred400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Grred400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Grred400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Grred400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Grred400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Grred400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Grred400ApplicationJSON struct {
	Error            *Grred400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Grred400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Grred401ApplicationJSONErrorEnum string

const (
	Grred401ApplicationJSONErrorEnumInvalidAuthentication Grred401ApplicationJSONErrorEnum = "invalid_authentication"
	Grred401ApplicationJSONErrorEnumInvalidAuthorization  Grred401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Grred401ApplicationJSONErrorDescriptionEnum string

const (
	Grred401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Grred401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Grred401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Grred401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Grred401ApplicationJSON struct {
	Error            *Grred401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Grred401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Grred404ApplicationJSONErrorEnum string

const (
	Grred404ApplicationJSONErrorEnumRecordNotFound Grred404ApplicationJSONErrorEnum = "record_not_found"
	Grred404ApplicationJSONErrorEnumURLNotFound    Grred404ApplicationJSONErrorEnum = "url_not_found"
)

type Grred404ApplicationJSONErrorDescriptionEnum string

const (
	Grred404ApplicationJSONErrorDescriptionEnumNoRecordFound               Grred404ApplicationJSONErrorDescriptionEnum = "No record found"
	Grred404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Grred404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Grred404ApplicationJSON struct {
	Error            *Grred404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Grred404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Grred500ApplicationJSONErrorEnum string

const (
	Grred500ApplicationJSONErrorEnumInternalServerError Grred500ApplicationJSONErrorEnum = "internal_server_error"
)

type Grred500ApplicationJSONErrorDescriptionEnum string

const (
	Grred500ApplicationJSONErrorDescriptionEnumInternalServerError Grred500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Grred500ApplicationJSON struct {
	Error            *Grred500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Grred500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Grred502ApplicationJSONErrorEnum string

const (
	Grred502ApplicationJSONErrorEnumBadGatewy Grred502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Grred502ApplicationJSONErrorDescriptionEnum string

const (
	Grred502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Grred502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Grred502ApplicationJSON struct {
	Error            *Grred502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Grred502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Grred503ApplicationJSONErrorEnum string

const (
	Grred503ApplicationJSONErrorEnumServiceUnavailable Grred503ApplicationJSONErrorEnum = "service_unavailable"
)

type Grred503ApplicationJSONErrorDescriptionEnum string

const (
	Grred503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Grred503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Grred503ApplicationJSON struct {
	Error            *Grred503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Grred503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Grred504ApplicationJSONErrorEnum string

const (
	Grred504ApplicationJSONErrorEnumGatewayTimeout Grred504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Grred504ApplicationJSONErrorDescriptionEnum string

const (
	Grred504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Grred504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Grred504ApplicationJSON struct {
	Error            *Grred504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Grred504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type GrredRequest struct {
	Request  *GrredRequestBody `request:"mediaType=application/json"`
	Security GrredSecurity
}

type GrredResponse struct {
	ContentType                   string
	StatusCode                    int64
	Grred400ApplicationJSONObject *Grred400ApplicationJSON
	Grred401ApplicationJSONObject *Grred401ApplicationJSON
	Grred404ApplicationJSONObject *Grred404ApplicationJSON
	Grred500ApplicationJSONObject *Grred500ApplicationJSON
	Grred502ApplicationJSONObject *Grred502ApplicationJSON
	Grred503ApplicationJSONObject *Grred503ApplicationJSON
	Grred504ApplicationJSONObject *Grred504ApplicationJSON
}

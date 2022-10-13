package operations

import (
	"openapi/pkg/models/shared"
)

type NchscRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type NchscRequestBodyFormatEnum string

const (
	NchscRequestBodyFormatEnumPdf NchscRequestBodyFormatEnum = "pdf"
)

type NchscRequestBody struct {
	CertificateParameters *NchscRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                NchscRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type NchscSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type NchscRequest struct {
	Request  *NchscRequestBody `request:"mediaType=application/json"`
	Security NchscSecurity
}

type Nchsc400ApplicationJSONErrorEnum string

const (
	Nchsc400ApplicationJSONErrorEnumMissingParameter Nchsc400ApplicationJSONErrorEnum = "missing_parameter"
	Nchsc400ApplicationJSONErrorEnumInvalidParameter Nchsc400ApplicationJSONErrorEnum = "invalid_parameter"
	Nchsc400ApplicationJSONErrorEnumInvalidFormat    Nchsc400ApplicationJSONErrorEnum = "invalid_format"
	Nchsc400ApplicationJSONErrorEnumInvalidTxnid     Nchsc400ApplicationJSONErrorEnum = "invalid_txnid"
	Nchsc400ApplicationJSONErrorEnumInvalidConsentid Nchsc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Nchsc400ApplicationJSONErrorDescriptionEnum string

const (
	Nchsc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Nchsc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Nchsc400ApplicationJSONErrorDescriptionEnumBadRequest                              Nchsc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Nchsc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Nchsc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Nchsc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Nchsc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Nchsc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Nchsc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Nchsc400ApplicationJSON struct {
	Error            *Nchsc400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nchsc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nchsc401ApplicationJSONErrorEnum string

const (
	Nchsc401ApplicationJSONErrorEnumInvalidAuthentication Nchsc401ApplicationJSONErrorEnum = "invalid_authentication"
	Nchsc401ApplicationJSONErrorEnumInvalidAuthorization  Nchsc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Nchsc401ApplicationJSONErrorDescriptionEnum string

const (
	Nchsc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Nchsc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Nchsc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Nchsc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Nchsc401ApplicationJSON struct {
	Error            *Nchsc401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nchsc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nchsc404ApplicationJSONErrorEnum string

const (
	Nchsc404ApplicationJSONErrorEnumRecordNotFound Nchsc404ApplicationJSONErrorEnum = "record_not_found"
	Nchsc404ApplicationJSONErrorEnumURLNotFound    Nchsc404ApplicationJSONErrorEnum = "url_not_found"
)

type Nchsc404ApplicationJSONErrorDescriptionEnum string

const (
	Nchsc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Nchsc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Nchsc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Nchsc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Nchsc404ApplicationJSON struct {
	Error            *Nchsc404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nchsc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nchsc500ApplicationJSONErrorEnum string

const (
	Nchsc500ApplicationJSONErrorEnumInternalServerError Nchsc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Nchsc500ApplicationJSONErrorDescriptionEnum string

const (
	Nchsc500ApplicationJSONErrorDescriptionEnumInternalServerError Nchsc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Nchsc500ApplicationJSON struct {
	Error            *Nchsc500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nchsc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nchsc502ApplicationJSONErrorEnum string

const (
	Nchsc502ApplicationJSONErrorEnumBadGatewy Nchsc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Nchsc502ApplicationJSONErrorDescriptionEnum string

const (
	Nchsc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Nchsc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Nchsc502ApplicationJSON struct {
	Error            *Nchsc502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nchsc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nchsc503ApplicationJSONErrorEnum string

const (
	Nchsc503ApplicationJSONErrorEnumServiceUnavailable Nchsc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Nchsc503ApplicationJSONErrorDescriptionEnum string

const (
	Nchsc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Nchsc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Nchsc503ApplicationJSON struct {
	Error            *Nchsc503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nchsc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Nchsc504ApplicationJSONErrorEnum string

const (
	Nchsc504ApplicationJSONErrorEnumGatewayTimeout Nchsc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Nchsc504ApplicationJSONErrorDescriptionEnum string

const (
	Nchsc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Nchsc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Nchsc504ApplicationJSON struct {
	Error            *Nchsc504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Nchsc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type NchscResponse struct {
	ContentType                   string
	StatusCode                    int64
	Nchsc400ApplicationJSONObject *Nchsc400ApplicationJSON
	Nchsc401ApplicationJSONObject *Nchsc401ApplicationJSON
	Nchsc404ApplicationJSONObject *Nchsc404ApplicationJSON
	Nchsc500ApplicationJSONObject *Nchsc500ApplicationJSON
	Nchsc502ApplicationJSONObject *Nchsc502ApplicationJSON
	Nchsc503ApplicationJSONObject *Nchsc503ApplicationJSON
	Nchsc504ApplicationJSONObject *Nchsc504ApplicationJSON
}

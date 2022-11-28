package operations

import (
	"openapi/pkg/models/shared"
)

type NctscRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type NctscRequestBodyFormatEnum string

const (
	NctscRequestBodyFormatEnumPdf NctscRequestBodyFormatEnum = "pdf"
)

type NctscRequestBody struct {
	CertificateParameters *NctscRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                NctscRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type NctscSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Nctsc400ApplicationJSONErrorEnum string

const (
	Nctsc400ApplicationJSONErrorEnumMissingParameter Nctsc400ApplicationJSONErrorEnum = "missing_parameter"
	Nctsc400ApplicationJSONErrorEnumInvalidParameter Nctsc400ApplicationJSONErrorEnum = "invalid_parameter"
	Nctsc400ApplicationJSONErrorEnumInvalidFormat    Nctsc400ApplicationJSONErrorEnum = "invalid_format"
	Nctsc400ApplicationJSONErrorEnumInvalidTxnid     Nctsc400ApplicationJSONErrorEnum = "invalid_txnid"
	Nctsc400ApplicationJSONErrorEnumInvalidConsentid Nctsc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Nctsc400ApplicationJSONErrorDescriptionEnum string

const (
	Nctsc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Nctsc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Nctsc400ApplicationJSONErrorDescriptionEnumBadRequest                              Nctsc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Nctsc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Nctsc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Nctsc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Nctsc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Nctsc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Nctsc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Nctsc400ApplicationJSON struct {
	Error            *Nctsc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nctsc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nctsc401ApplicationJSONErrorEnum string

const (
	Nctsc401ApplicationJSONErrorEnumInvalidAuthentication Nctsc401ApplicationJSONErrorEnum = "invalid_authentication"
	Nctsc401ApplicationJSONErrorEnumInvalidAuthorization  Nctsc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Nctsc401ApplicationJSONErrorDescriptionEnum string

const (
	Nctsc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Nctsc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Nctsc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Nctsc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Nctsc401ApplicationJSON struct {
	Error            *Nctsc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nctsc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nctsc404ApplicationJSONErrorEnum string

const (
	Nctsc404ApplicationJSONErrorEnumRecordNotFound Nctsc404ApplicationJSONErrorEnum = "record_not_found"
	Nctsc404ApplicationJSONErrorEnumURLNotFound    Nctsc404ApplicationJSONErrorEnum = "url_not_found"
)

type Nctsc404ApplicationJSONErrorDescriptionEnum string

const (
	Nctsc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Nctsc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Nctsc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Nctsc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Nctsc404ApplicationJSON struct {
	Error            *Nctsc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nctsc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nctsc500ApplicationJSONErrorEnum string

const (
	Nctsc500ApplicationJSONErrorEnumInternalServerError Nctsc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Nctsc500ApplicationJSONErrorDescriptionEnum string

const (
	Nctsc500ApplicationJSONErrorDescriptionEnumInternalServerError Nctsc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Nctsc500ApplicationJSON struct {
	Error            *Nctsc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nctsc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nctsc502ApplicationJSONErrorEnum string

const (
	Nctsc502ApplicationJSONErrorEnumBadGatewy Nctsc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Nctsc502ApplicationJSONErrorDescriptionEnum string

const (
	Nctsc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Nctsc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Nctsc502ApplicationJSON struct {
	Error            *Nctsc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nctsc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nctsc503ApplicationJSONErrorEnum string

const (
	Nctsc503ApplicationJSONErrorEnumServiceUnavailable Nctsc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Nctsc503ApplicationJSONErrorDescriptionEnum string

const (
	Nctsc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Nctsc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Nctsc503ApplicationJSON struct {
	Error            *Nctsc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nctsc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nctsc504ApplicationJSONErrorEnum string

const (
	Nctsc504ApplicationJSONErrorEnumGatewayTimeout Nctsc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Nctsc504ApplicationJSONErrorDescriptionEnum string

const (
	Nctsc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Nctsc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Nctsc504ApplicationJSON struct {
	Error            *Nctsc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nctsc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type NctscRequest struct {
	Request  *NctscRequestBody `request:"mediaType=application/json"`
	Security NctscSecurity
}

type NctscResponse struct {
	ContentType                   string
	StatusCode                    int64
	Nctsc400ApplicationJSONObject *Nctsc400ApplicationJSON
	Nctsc401ApplicationJSONObject *Nctsc401ApplicationJSON
	Nctsc404ApplicationJSONObject *Nctsc404ApplicationJSON
	Nctsc500ApplicationJSONObject *Nctsc500ApplicationJSON
	Nctsc502ApplicationJSONObject *Nctsc502ApplicationJSON
	Nctsc503ApplicationJSONObject *Nctsc503ApplicationJSON
	Nctsc504ApplicationJSONObject *Nctsc504ApplicationJSON
}

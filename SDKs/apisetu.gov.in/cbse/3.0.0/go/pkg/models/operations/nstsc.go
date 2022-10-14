package operations

import (
	"openapi/pkg/models/shared"
)

type NstscRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type NstscRequestBodyFormatEnum string

const (
	NstscRequestBodyFormatEnumPdf NstscRequestBodyFormatEnum = "pdf"
)

type NstscRequestBody struct {
	CertificateParameters *NstscRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                NstscRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type NstscSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type NstscRequest struct {
	Request  *NstscRequestBody `request:"mediaType=application/json"`
	Security NstscSecurity
}

type Nstsc400ApplicationJSONErrorEnum string

const (
	Nstsc400ApplicationJSONErrorEnumMissingParameter Nstsc400ApplicationJSONErrorEnum = "missing_parameter"
	Nstsc400ApplicationJSONErrorEnumInvalidParameter Nstsc400ApplicationJSONErrorEnum = "invalid_parameter"
	Nstsc400ApplicationJSONErrorEnumInvalidFormat    Nstsc400ApplicationJSONErrorEnum = "invalid_format"
	Nstsc400ApplicationJSONErrorEnumInvalidTxnid     Nstsc400ApplicationJSONErrorEnum = "invalid_txnid"
	Nstsc400ApplicationJSONErrorEnumInvalidConsentid Nstsc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Nstsc400ApplicationJSONErrorDescriptionEnum string

const (
	Nstsc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Nstsc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Nstsc400ApplicationJSONErrorDescriptionEnumBadRequest                              Nstsc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Nstsc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Nstsc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Nstsc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Nstsc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Nstsc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Nstsc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Nstsc400ApplicationJSON struct {
	Error            *Nstsc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nstsc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nstsc401ApplicationJSONErrorEnum string

const (
	Nstsc401ApplicationJSONErrorEnumInvalidAuthentication Nstsc401ApplicationJSONErrorEnum = "invalid_authentication"
	Nstsc401ApplicationJSONErrorEnumInvalidAuthorization  Nstsc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Nstsc401ApplicationJSONErrorDescriptionEnum string

const (
	Nstsc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Nstsc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Nstsc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Nstsc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Nstsc401ApplicationJSON struct {
	Error            *Nstsc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nstsc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nstsc404ApplicationJSONErrorEnum string

const (
	Nstsc404ApplicationJSONErrorEnumRecordNotFound Nstsc404ApplicationJSONErrorEnum = "record_not_found"
	Nstsc404ApplicationJSONErrorEnumURLNotFound    Nstsc404ApplicationJSONErrorEnum = "url_not_found"
)

type Nstsc404ApplicationJSONErrorDescriptionEnum string

const (
	Nstsc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Nstsc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Nstsc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Nstsc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Nstsc404ApplicationJSON struct {
	Error            *Nstsc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nstsc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nstsc500ApplicationJSONErrorEnum string

const (
	Nstsc500ApplicationJSONErrorEnumInternalServerError Nstsc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Nstsc500ApplicationJSONErrorDescriptionEnum string

const (
	Nstsc500ApplicationJSONErrorDescriptionEnumInternalServerError Nstsc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Nstsc500ApplicationJSON struct {
	Error            *Nstsc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nstsc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nstsc502ApplicationJSONErrorEnum string

const (
	Nstsc502ApplicationJSONErrorEnumBadGatewy Nstsc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Nstsc502ApplicationJSONErrorDescriptionEnum string

const (
	Nstsc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Nstsc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Nstsc502ApplicationJSON struct {
	Error            *Nstsc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nstsc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nstsc503ApplicationJSONErrorEnum string

const (
	Nstsc503ApplicationJSONErrorEnumServiceUnavailable Nstsc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Nstsc503ApplicationJSONErrorDescriptionEnum string

const (
	Nstsc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Nstsc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Nstsc503ApplicationJSON struct {
	Error            *Nstsc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nstsc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nstsc504ApplicationJSONErrorEnum string

const (
	Nstsc504ApplicationJSONErrorEnumGatewayTimeout Nstsc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Nstsc504ApplicationJSONErrorDescriptionEnum string

const (
	Nstsc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Nstsc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Nstsc504ApplicationJSON struct {
	Error            *Nstsc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nstsc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type NstscResponse struct {
	ContentType                   string
	StatusCode                    int64
	Nstsc400ApplicationJSONObject *Nstsc400ApplicationJSON
	Nstsc401ApplicationJSONObject *Nstsc401ApplicationJSON
	Nstsc404ApplicationJSONObject *Nstsc404ApplicationJSON
	Nstsc500ApplicationJSONObject *Nstsc500ApplicationJSON
	Nstsc502ApplicationJSONObject *Nstsc502ApplicationJSON
	Nstsc503ApplicationJSONObject *Nstsc503ApplicationJSON
	Nstsc504ApplicationJSONObject *Nstsc504ApplicationJSON
}

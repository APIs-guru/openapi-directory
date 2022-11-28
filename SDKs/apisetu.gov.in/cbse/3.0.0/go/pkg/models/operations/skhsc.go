package operations

import (
	"openapi/pkg/models/shared"
)

type SkhscRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type SkhscRequestBodyFormatEnum string

const (
	SkhscRequestBodyFormatEnumPdf SkhscRequestBodyFormatEnum = "pdf"
)

type SkhscRequestBody struct {
	CertificateParameters *SkhscRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                SkhscRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type SkhscSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Skhsc400ApplicationJSONErrorEnum string

const (
	Skhsc400ApplicationJSONErrorEnumMissingParameter Skhsc400ApplicationJSONErrorEnum = "missing_parameter"
	Skhsc400ApplicationJSONErrorEnumInvalidParameter Skhsc400ApplicationJSONErrorEnum = "invalid_parameter"
	Skhsc400ApplicationJSONErrorEnumInvalidFormat    Skhsc400ApplicationJSONErrorEnum = "invalid_format"
	Skhsc400ApplicationJSONErrorEnumInvalidTxnid     Skhsc400ApplicationJSONErrorEnum = "invalid_txnid"
	Skhsc400ApplicationJSONErrorEnumInvalidConsentid Skhsc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Skhsc400ApplicationJSONErrorDescriptionEnum string

const (
	Skhsc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Skhsc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Skhsc400ApplicationJSONErrorDescriptionEnumBadRequest                              Skhsc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Skhsc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Skhsc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Skhsc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Skhsc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Skhsc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Skhsc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Skhsc400ApplicationJSON struct {
	Error            *Skhsc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skhsc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skhsc401ApplicationJSONErrorEnum string

const (
	Skhsc401ApplicationJSONErrorEnumInvalidAuthentication Skhsc401ApplicationJSONErrorEnum = "invalid_authentication"
	Skhsc401ApplicationJSONErrorEnumInvalidAuthorization  Skhsc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Skhsc401ApplicationJSONErrorDescriptionEnum string

const (
	Skhsc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Skhsc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Skhsc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Skhsc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Skhsc401ApplicationJSON struct {
	Error            *Skhsc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skhsc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skhsc404ApplicationJSONErrorEnum string

const (
	Skhsc404ApplicationJSONErrorEnumRecordNotFound Skhsc404ApplicationJSONErrorEnum = "record_not_found"
	Skhsc404ApplicationJSONErrorEnumURLNotFound    Skhsc404ApplicationJSONErrorEnum = "url_not_found"
)

type Skhsc404ApplicationJSONErrorDescriptionEnum string

const (
	Skhsc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Skhsc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Skhsc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Skhsc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Skhsc404ApplicationJSON struct {
	Error            *Skhsc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skhsc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skhsc500ApplicationJSONErrorEnum string

const (
	Skhsc500ApplicationJSONErrorEnumInternalServerError Skhsc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Skhsc500ApplicationJSONErrorDescriptionEnum string

const (
	Skhsc500ApplicationJSONErrorDescriptionEnumInternalServerError Skhsc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Skhsc500ApplicationJSON struct {
	Error            *Skhsc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skhsc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skhsc502ApplicationJSONErrorEnum string

const (
	Skhsc502ApplicationJSONErrorEnumBadGatewy Skhsc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Skhsc502ApplicationJSONErrorDescriptionEnum string

const (
	Skhsc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Skhsc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Skhsc502ApplicationJSON struct {
	Error            *Skhsc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skhsc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skhsc503ApplicationJSONErrorEnum string

const (
	Skhsc503ApplicationJSONErrorEnumServiceUnavailable Skhsc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Skhsc503ApplicationJSONErrorDescriptionEnum string

const (
	Skhsc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Skhsc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Skhsc503ApplicationJSON struct {
	Error            *Skhsc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skhsc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Skhsc504ApplicationJSONErrorEnum string

const (
	Skhsc504ApplicationJSONErrorEnumGatewayTimeout Skhsc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Skhsc504ApplicationJSONErrorDescriptionEnum string

const (
	Skhsc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Skhsc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Skhsc504ApplicationJSON struct {
	Error            *Skhsc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Skhsc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type SkhscRequest struct {
	Request  *SkhscRequestBody `request:"mediaType=application/json"`
	Security SkhscSecurity
}

type SkhscResponse struct {
	ContentType                   string
	StatusCode                    int64
	Skhsc400ApplicationJSONObject *Skhsc400ApplicationJSON
	Skhsc401ApplicationJSONObject *Skhsc401ApplicationJSON
	Skhsc404ApplicationJSONObject *Skhsc404ApplicationJSON
	Skhsc500ApplicationJSONObject *Skhsc500ApplicationJSON
	Skhsc502ApplicationJSONObject *Skhsc502ApplicationJSON
	Skhsc503ApplicationJSONObject *Skhsc503ApplicationJSON
	Skhsc504ApplicationJSONObject *Skhsc504ApplicationJSON
}

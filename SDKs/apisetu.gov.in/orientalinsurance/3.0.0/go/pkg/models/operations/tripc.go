package operations

import (
	"openapi/pkg/models/shared"
)

type TripcRequestBodyCertificateParameters struct {
	Inscode string `json:"INSCODE"`
	Polno   string `json:"POLNO"`
	Startdt string `json:"STARTDT"`
}

type TripcRequestBodyFormatEnum string

const (
	TripcRequestBodyFormatEnumPdf TripcRequestBodyFormatEnum = "pdf"
)

type TripcRequestBody struct {
	CertificateParameters *TripcRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                TripcRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type TripcSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type TripcRequest struct {
	Request  *TripcRequestBody `request:"mediaType=application/json"`
	Security TripcSecurity
}

type Tripc400ApplicationJSONErrorEnum string

const (
	Tripc400ApplicationJSONErrorEnumMissingParameter Tripc400ApplicationJSONErrorEnum = "missing_parameter"
	Tripc400ApplicationJSONErrorEnumInvalidParameter Tripc400ApplicationJSONErrorEnum = "invalid_parameter"
	Tripc400ApplicationJSONErrorEnumInvalidFormat    Tripc400ApplicationJSONErrorEnum = "invalid_format"
	Tripc400ApplicationJSONErrorEnumInvalidTxnid     Tripc400ApplicationJSONErrorEnum = "invalid_txnid"
	Tripc400ApplicationJSONErrorEnumInvalidConsentid Tripc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Tripc400ApplicationJSONErrorDescriptionEnum string

const (
	Tripc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Tripc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Tripc400ApplicationJSONErrorDescriptionEnumBadRequest                              Tripc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Tripc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Tripc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Tripc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Tripc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Tripc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Tripc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Tripc400ApplicationJSON struct {
	Error            *Tripc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tripc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tripc401ApplicationJSONErrorEnum string

const (
	Tripc401ApplicationJSONErrorEnumInvalidAuthentication Tripc401ApplicationJSONErrorEnum = "invalid_authentication"
	Tripc401ApplicationJSONErrorEnumInvalidAuthorization  Tripc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Tripc401ApplicationJSONErrorDescriptionEnum string

const (
	Tripc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Tripc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Tripc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Tripc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Tripc401ApplicationJSON struct {
	Error            *Tripc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tripc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tripc404ApplicationJSONErrorEnum string

const (
	Tripc404ApplicationJSONErrorEnumRecordNotFound Tripc404ApplicationJSONErrorEnum = "record_not_found"
	Tripc404ApplicationJSONErrorEnumURLNotFound    Tripc404ApplicationJSONErrorEnum = "url_not_found"
)

type Tripc404ApplicationJSONErrorDescriptionEnum string

const (
	Tripc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Tripc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Tripc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Tripc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Tripc404ApplicationJSON struct {
	Error            *Tripc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tripc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tripc500ApplicationJSONErrorEnum string

const (
	Tripc500ApplicationJSONErrorEnumInternalServerError Tripc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Tripc500ApplicationJSONErrorDescriptionEnum string

const (
	Tripc500ApplicationJSONErrorDescriptionEnumInternalServerError Tripc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Tripc500ApplicationJSON struct {
	Error            *Tripc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tripc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tripc502ApplicationJSONErrorEnum string

const (
	Tripc502ApplicationJSONErrorEnumBadGatewy Tripc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Tripc502ApplicationJSONErrorDescriptionEnum string

const (
	Tripc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Tripc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Tripc502ApplicationJSON struct {
	Error            *Tripc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tripc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tripc503ApplicationJSONErrorEnum string

const (
	Tripc503ApplicationJSONErrorEnumServiceUnavailable Tripc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Tripc503ApplicationJSONErrorDescriptionEnum string

const (
	Tripc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Tripc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Tripc503ApplicationJSON struct {
	Error            *Tripc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tripc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tripc504ApplicationJSONErrorEnum string

const (
	Tripc504ApplicationJSONErrorEnumGatewayTimeout Tripc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Tripc504ApplicationJSONErrorDescriptionEnum string

const (
	Tripc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Tripc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Tripc504ApplicationJSON struct {
	Error            *Tripc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tripc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type TripcResponse struct {
	ContentType                   string
	StatusCode                    int64
	Tripc400ApplicationJSONObject *Tripc400ApplicationJSON
	Tripc401ApplicationJSONObject *Tripc401ApplicationJSON
	Tripc404ApplicationJSONObject *Tripc404ApplicationJSON
	Tripc500ApplicationJSONObject *Tripc500ApplicationJSON
	Tripc502ApplicationJSONObject *Tripc502ApplicationJSON
	Tripc503ApplicationJSONObject *Tripc503ApplicationJSON
	Tripc504ApplicationJSONObject *Tripc504ApplicationJSON
}

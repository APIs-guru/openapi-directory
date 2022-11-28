package operations

import (
	"openapi/pkg/models/shared"
)

type TwipcRequestBodyCertificateParameters struct {
	FullName     string `json:"FullName"`
	PolicyNumber string `json:"policy_number"`
}

type TwipcRequestBodyFormatEnum string

const (
	TwipcRequestBodyFormatEnumPdf TwipcRequestBodyFormatEnum = "pdf"
)

type TwipcRequestBody struct {
	CertificateParameters *TwipcRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                TwipcRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type TwipcSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Twipc400ApplicationJSONErrorEnum string

const (
	Twipc400ApplicationJSONErrorEnumMissingParameter Twipc400ApplicationJSONErrorEnum = "missing_parameter"
	Twipc400ApplicationJSONErrorEnumInvalidParameter Twipc400ApplicationJSONErrorEnum = "invalid_parameter"
	Twipc400ApplicationJSONErrorEnumInvalidFormat    Twipc400ApplicationJSONErrorEnum = "invalid_format"
	Twipc400ApplicationJSONErrorEnumInvalidTxnid     Twipc400ApplicationJSONErrorEnum = "invalid_txnid"
	Twipc400ApplicationJSONErrorEnumInvalidConsentid Twipc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Twipc400ApplicationJSONErrorDescriptionEnum string

const (
	Twipc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Twipc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Twipc400ApplicationJSONErrorDescriptionEnumBadRequest                              Twipc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Twipc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Twipc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Twipc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Twipc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Twipc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Twipc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Twipc400ApplicationJSON struct {
	Error            *Twipc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Twipc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Twipc401ApplicationJSONErrorEnum string

const (
	Twipc401ApplicationJSONErrorEnumInvalidAuthentication Twipc401ApplicationJSONErrorEnum = "invalid_authentication"
	Twipc401ApplicationJSONErrorEnumInvalidAuthorization  Twipc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Twipc401ApplicationJSONErrorDescriptionEnum string

const (
	Twipc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Twipc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Twipc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Twipc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Twipc401ApplicationJSON struct {
	Error            *Twipc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Twipc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Twipc404ApplicationJSONErrorEnum string

const (
	Twipc404ApplicationJSONErrorEnumRecordNotFound Twipc404ApplicationJSONErrorEnum = "record_not_found"
	Twipc404ApplicationJSONErrorEnumURLNotFound    Twipc404ApplicationJSONErrorEnum = "url_not_found"
)

type Twipc404ApplicationJSONErrorDescriptionEnum string

const (
	Twipc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Twipc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Twipc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Twipc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Twipc404ApplicationJSON struct {
	Error            *Twipc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Twipc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Twipc500ApplicationJSONErrorEnum string

const (
	Twipc500ApplicationJSONErrorEnumInternalServerError Twipc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Twipc500ApplicationJSONErrorDescriptionEnum string

const (
	Twipc500ApplicationJSONErrorDescriptionEnumInternalServerError Twipc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Twipc500ApplicationJSON struct {
	Error            *Twipc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Twipc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Twipc502ApplicationJSONErrorEnum string

const (
	Twipc502ApplicationJSONErrorEnumBadGatewy Twipc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Twipc502ApplicationJSONErrorDescriptionEnum string

const (
	Twipc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Twipc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Twipc502ApplicationJSON struct {
	Error            *Twipc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Twipc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Twipc503ApplicationJSONErrorEnum string

const (
	Twipc503ApplicationJSONErrorEnumServiceUnavailable Twipc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Twipc503ApplicationJSONErrorDescriptionEnum string

const (
	Twipc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Twipc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Twipc503ApplicationJSON struct {
	Error            *Twipc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Twipc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Twipc504ApplicationJSONErrorEnum string

const (
	Twipc504ApplicationJSONErrorEnumGatewayTimeout Twipc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Twipc504ApplicationJSONErrorDescriptionEnum string

const (
	Twipc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Twipc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Twipc504ApplicationJSON struct {
	Error            *Twipc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Twipc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type TwipcRequest struct {
	Request  *TwipcRequestBody `request:"mediaType=application/json"`
	Security TwipcSecurity
}

type TwipcResponse struct {
	ContentType                   string
	StatusCode                    int64
	Twipc400ApplicationJSONObject *Twipc400ApplicationJSON
	Twipc401ApplicationJSONObject *Twipc401ApplicationJSON
	Twipc404ApplicationJSONObject *Twipc404ApplicationJSON
	Twipc500ApplicationJSONObject *Twipc500ApplicationJSON
	Twipc502ApplicationJSONObject *Twipc502ApplicationJSON
	Twipc503ApplicationJSONObject *Twipc503ApplicationJSON
	Twipc504ApplicationJSONObject *Twipc504ApplicationJSON
}

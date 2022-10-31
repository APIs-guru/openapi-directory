package operations

import (
	"openapi/pkg/models/shared"
)

type HmipcRequestBodyCertificateParameters struct {
	Inscode string `json:"INSCODE"`
	Polno   string `json:"POLNO"`
	Startdt string `json:"STARTDT"`
}

type HmipcRequestBodyFormatEnum string

const (
	HmipcRequestBodyFormatEnumPdf HmipcRequestBodyFormatEnum = "pdf"
)

type HmipcRequestBody struct {
	CertificateParameters *HmipcRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                HmipcRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type HmipcSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type HmipcRequest struct {
	Request  *HmipcRequestBody `request:"mediaType=application/json"`
	Security HmipcSecurity
}

type Hmipc400ApplicationJSONErrorEnum string

const (
	Hmipc400ApplicationJSONErrorEnumMissingParameter Hmipc400ApplicationJSONErrorEnum = "missing_parameter"
	Hmipc400ApplicationJSONErrorEnumInvalidParameter Hmipc400ApplicationJSONErrorEnum = "invalid_parameter"
	Hmipc400ApplicationJSONErrorEnumInvalidFormat    Hmipc400ApplicationJSONErrorEnum = "invalid_format"
	Hmipc400ApplicationJSONErrorEnumInvalidTxnid     Hmipc400ApplicationJSONErrorEnum = "invalid_txnid"
	Hmipc400ApplicationJSONErrorEnumInvalidConsentid Hmipc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Hmipc400ApplicationJSONErrorDescriptionEnum string

const (
	Hmipc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Hmipc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Hmipc400ApplicationJSONErrorDescriptionEnumBadRequest                              Hmipc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Hmipc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Hmipc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Hmipc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Hmipc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Hmipc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Hmipc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Hmipc400ApplicationJSON struct {
	Error            *Hmipc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hmipc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hmipc401ApplicationJSONErrorEnum string

const (
	Hmipc401ApplicationJSONErrorEnumInvalidAuthentication Hmipc401ApplicationJSONErrorEnum = "invalid_authentication"
	Hmipc401ApplicationJSONErrorEnumInvalidAuthorization  Hmipc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Hmipc401ApplicationJSONErrorDescriptionEnum string

const (
	Hmipc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Hmipc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Hmipc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Hmipc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Hmipc401ApplicationJSON struct {
	Error            *Hmipc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hmipc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hmipc404ApplicationJSONErrorEnum string

const (
	Hmipc404ApplicationJSONErrorEnumRecordNotFound Hmipc404ApplicationJSONErrorEnum = "record_not_found"
	Hmipc404ApplicationJSONErrorEnumURLNotFound    Hmipc404ApplicationJSONErrorEnum = "url_not_found"
)

type Hmipc404ApplicationJSONErrorDescriptionEnum string

const (
	Hmipc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Hmipc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Hmipc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Hmipc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Hmipc404ApplicationJSON struct {
	Error            *Hmipc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hmipc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hmipc500ApplicationJSONErrorEnum string

const (
	Hmipc500ApplicationJSONErrorEnumInternalServerError Hmipc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Hmipc500ApplicationJSONErrorDescriptionEnum string

const (
	Hmipc500ApplicationJSONErrorDescriptionEnumInternalServerError Hmipc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Hmipc500ApplicationJSON struct {
	Error            *Hmipc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hmipc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hmipc502ApplicationJSONErrorEnum string

const (
	Hmipc502ApplicationJSONErrorEnumBadGatewy Hmipc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Hmipc502ApplicationJSONErrorDescriptionEnum string

const (
	Hmipc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Hmipc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Hmipc502ApplicationJSON struct {
	Error            *Hmipc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hmipc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hmipc503ApplicationJSONErrorEnum string

const (
	Hmipc503ApplicationJSONErrorEnumServiceUnavailable Hmipc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Hmipc503ApplicationJSONErrorDescriptionEnum string

const (
	Hmipc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Hmipc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Hmipc503ApplicationJSON struct {
	Error            *Hmipc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hmipc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hmipc504ApplicationJSONErrorEnum string

const (
	Hmipc504ApplicationJSONErrorEnumGatewayTimeout Hmipc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Hmipc504ApplicationJSONErrorDescriptionEnum string

const (
	Hmipc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Hmipc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Hmipc504ApplicationJSON struct {
	Error            *Hmipc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hmipc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type HmipcResponse struct {
	ContentType                   string
	StatusCode                    int64
	Hmipc400ApplicationJSONObject *Hmipc400ApplicationJSON
	Hmipc401ApplicationJSONObject *Hmipc401ApplicationJSON
	Hmipc404ApplicationJSONObject *Hmipc404ApplicationJSON
	Hmipc500ApplicationJSONObject *Hmipc500ApplicationJSON
	Hmipc502ApplicationJSONObject *Hmipc502ApplicationJSON
	Hmipc503ApplicationJSONObject *Hmipc503ApplicationJSON
	Hmipc504ApplicationJSONObject *Hmipc504ApplicationJSON
}

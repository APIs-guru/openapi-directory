package operations

import (
	"openapi/pkg/models/shared"
)

type HlipcRequestBodyCertificateParameters struct {
	FullName     string `json:"FullName"`
	PolicyNumber string `json:"PolicyNumber"`
}

type HlipcRequestBodyFormatEnum string

const (
	HlipcRequestBodyFormatEnumPdf HlipcRequestBodyFormatEnum = "pdf"
)

type HlipcRequestBody struct {
	CertificateParameters *HlipcRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                HlipcRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type HlipcSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type HlipcRequest struct {
	Request  *HlipcRequestBody `request:"mediaType=application/json"`
	Security HlipcSecurity
}

type Hlipc400ApplicationJSONErrorEnum string

const (
	Hlipc400ApplicationJSONErrorEnumMissingParameter Hlipc400ApplicationJSONErrorEnum = "missing_parameter"
	Hlipc400ApplicationJSONErrorEnumInvalidParameter Hlipc400ApplicationJSONErrorEnum = "invalid_parameter"
	Hlipc400ApplicationJSONErrorEnumInvalidFormat    Hlipc400ApplicationJSONErrorEnum = "invalid_format"
	Hlipc400ApplicationJSONErrorEnumInvalidTxnid     Hlipc400ApplicationJSONErrorEnum = "invalid_txnid"
	Hlipc400ApplicationJSONErrorEnumInvalidConsentid Hlipc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Hlipc400ApplicationJSONErrorDescriptionEnum string

const (
	Hlipc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Hlipc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Hlipc400ApplicationJSONErrorDescriptionEnumBadRequest                              Hlipc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Hlipc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Hlipc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Hlipc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Hlipc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Hlipc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Hlipc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Hlipc400ApplicationJSON struct {
	Error            *Hlipc400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hlipc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hlipc401ApplicationJSONErrorEnum string

const (
	Hlipc401ApplicationJSONErrorEnumInvalidAuthentication Hlipc401ApplicationJSONErrorEnum = "invalid_authentication"
	Hlipc401ApplicationJSONErrorEnumInvalidAuthorization  Hlipc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Hlipc401ApplicationJSONErrorDescriptionEnum string

const (
	Hlipc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Hlipc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Hlipc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Hlipc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Hlipc401ApplicationJSON struct {
	Error            *Hlipc401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hlipc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hlipc404ApplicationJSONErrorEnum string

const (
	Hlipc404ApplicationJSONErrorEnumRecordNotFound Hlipc404ApplicationJSONErrorEnum = "record_not_found"
	Hlipc404ApplicationJSONErrorEnumURLNotFound    Hlipc404ApplicationJSONErrorEnum = "url_not_found"
)

type Hlipc404ApplicationJSONErrorDescriptionEnum string

const (
	Hlipc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Hlipc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Hlipc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Hlipc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Hlipc404ApplicationJSON struct {
	Error            *Hlipc404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hlipc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hlipc500ApplicationJSONErrorEnum string

const (
	Hlipc500ApplicationJSONErrorEnumInternalServerError Hlipc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Hlipc500ApplicationJSONErrorDescriptionEnum string

const (
	Hlipc500ApplicationJSONErrorDescriptionEnumInternalServerError Hlipc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Hlipc500ApplicationJSON struct {
	Error            *Hlipc500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hlipc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hlipc502ApplicationJSONErrorEnum string

const (
	Hlipc502ApplicationJSONErrorEnumBadGatewy Hlipc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Hlipc502ApplicationJSONErrorDescriptionEnum string

const (
	Hlipc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Hlipc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Hlipc502ApplicationJSON struct {
	Error            *Hlipc502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hlipc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hlipc503ApplicationJSONErrorEnum string

const (
	Hlipc503ApplicationJSONErrorEnumServiceUnavailable Hlipc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Hlipc503ApplicationJSONErrorDescriptionEnum string

const (
	Hlipc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Hlipc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Hlipc503ApplicationJSON struct {
	Error            *Hlipc503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hlipc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hlipc504ApplicationJSONErrorEnum string

const (
	Hlipc504ApplicationJSONErrorEnumGatewayTimeout Hlipc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Hlipc504ApplicationJSONErrorDescriptionEnum string

const (
	Hlipc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Hlipc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Hlipc504ApplicationJSON struct {
	Error            *Hlipc504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hlipc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type HlipcResponse struct {
	ContentType                   string
	StatusCode                    int64
	Hlipc400ApplicationJSONObject *Hlipc400ApplicationJSON
	Hlipc401ApplicationJSONObject *Hlipc401ApplicationJSON
	Hlipc404ApplicationJSONObject *Hlipc404ApplicationJSON
	Hlipc500ApplicationJSONObject *Hlipc500ApplicationJSON
	Hlipc502ApplicationJSONObject *Hlipc502ApplicationJSON
	Hlipc503ApplicationJSONObject *Hlipc503ApplicationJSON
	Hlipc504ApplicationJSONObject *Hlipc504ApplicationJSON
}

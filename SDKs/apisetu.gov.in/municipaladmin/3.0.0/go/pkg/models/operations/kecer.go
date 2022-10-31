package operations

import (
	"openapi/pkg/models/shared"
)

type KecerRequestBodyCertificateParameters struct {
	DocumentNumber string `json:"DocumentNumber"`
}

type KecerRequestBodyFormatEnum string

const (
	KecerRequestBodyFormatEnumPdf KecerRequestBodyFormatEnum = "pdf"
)

type KecerRequestBody struct {
	CertificateParameters *KecerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                KecerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type KecerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type KecerRequest struct {
	Request  *KecerRequestBody `request:"mediaType=application/json"`
	Security KecerSecurity
}

type Kecer400ApplicationJSONErrorEnum string

const (
	Kecer400ApplicationJSONErrorEnumMissingParameter Kecer400ApplicationJSONErrorEnum = "missing_parameter"
	Kecer400ApplicationJSONErrorEnumInvalidParameter Kecer400ApplicationJSONErrorEnum = "invalid_parameter"
	Kecer400ApplicationJSONErrorEnumInvalidFormat    Kecer400ApplicationJSONErrorEnum = "invalid_format"
	Kecer400ApplicationJSONErrorEnumInvalidTxnid     Kecer400ApplicationJSONErrorEnum = "invalid_txnid"
	Kecer400ApplicationJSONErrorEnumInvalidConsentid Kecer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Kecer400ApplicationJSONErrorDescriptionEnum string

const (
	Kecer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Kecer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Kecer400ApplicationJSONErrorDescriptionEnumBadRequest                              Kecer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Kecer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Kecer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Kecer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Kecer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Kecer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Kecer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Kecer400ApplicationJSON struct {
	Error            *Kecer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Kecer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Kecer401ApplicationJSONErrorEnum string

const (
	Kecer401ApplicationJSONErrorEnumInvalidAuthentication Kecer401ApplicationJSONErrorEnum = "invalid_authentication"
	Kecer401ApplicationJSONErrorEnumInvalidAuthorization  Kecer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Kecer401ApplicationJSONErrorDescriptionEnum string

const (
	Kecer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Kecer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Kecer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Kecer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Kecer401ApplicationJSON struct {
	Error            *Kecer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Kecer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Kecer404ApplicationJSONErrorEnum string

const (
	Kecer404ApplicationJSONErrorEnumRecordNotFound Kecer404ApplicationJSONErrorEnum = "record_not_found"
	Kecer404ApplicationJSONErrorEnumURLNotFound    Kecer404ApplicationJSONErrorEnum = "url_not_found"
)

type Kecer404ApplicationJSONErrorDescriptionEnum string

const (
	Kecer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Kecer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Kecer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Kecer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Kecer404ApplicationJSON struct {
	Error            *Kecer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Kecer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Kecer500ApplicationJSONErrorEnum string

const (
	Kecer500ApplicationJSONErrorEnumInternalServerError Kecer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Kecer500ApplicationJSONErrorDescriptionEnum string

const (
	Kecer500ApplicationJSONErrorDescriptionEnumInternalServerError Kecer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Kecer500ApplicationJSON struct {
	Error            *Kecer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Kecer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Kecer502ApplicationJSONErrorEnum string

const (
	Kecer502ApplicationJSONErrorEnumBadGatewy Kecer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Kecer502ApplicationJSONErrorDescriptionEnum string

const (
	Kecer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Kecer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Kecer502ApplicationJSON struct {
	Error            *Kecer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Kecer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Kecer503ApplicationJSONErrorEnum string

const (
	Kecer503ApplicationJSONErrorEnumServiceUnavailable Kecer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Kecer503ApplicationJSONErrorDescriptionEnum string

const (
	Kecer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Kecer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Kecer503ApplicationJSON struct {
	Error            *Kecer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Kecer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Kecer504ApplicationJSONErrorEnum string

const (
	Kecer504ApplicationJSONErrorEnumGatewayTimeout Kecer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Kecer504ApplicationJSONErrorDescriptionEnum string

const (
	Kecer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Kecer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Kecer504ApplicationJSON struct {
	Error            *Kecer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Kecer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type KecerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Kecer400ApplicationJSONObject *Kecer400ApplicationJSON
	Kecer401ApplicationJSONObject *Kecer401ApplicationJSON
	Kecer404ApplicationJSONObject *Kecer404ApplicationJSON
	Kecer500ApplicationJSONObject *Kecer500ApplicationJSON
	Kecer502ApplicationJSONObject *Kecer502ApplicationJSON
	Kecer503ApplicationJSONObject *Kecer503ApplicationJSON
	Kecer504ApplicationJSONObject *Kecer504ApplicationJSON
}

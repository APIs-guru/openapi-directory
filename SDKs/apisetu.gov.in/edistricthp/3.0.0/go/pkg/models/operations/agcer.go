package operations

import (
	"openapi/pkg/models/shared"
)

type AgcerRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type AgcerRequestBodyFormatEnum string

const (
	AgcerRequestBodyFormatEnumPdf AgcerRequestBodyFormatEnum = "pdf"
)

type AgcerRequestBody struct {
	CertificateParameters *AgcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                AgcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type AgcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type AgcerRequest struct {
	Request  *AgcerRequestBody `request:"mediaType=application/json"`
	Security AgcerSecurity
}

type Agcer400ApplicationJSONErrorEnum string

const (
	Agcer400ApplicationJSONErrorEnumMissingParameter Agcer400ApplicationJSONErrorEnum = "missing_parameter"
	Agcer400ApplicationJSONErrorEnumInvalidParameter Agcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Agcer400ApplicationJSONErrorEnumInvalidFormat    Agcer400ApplicationJSONErrorEnum = "invalid_format"
	Agcer400ApplicationJSONErrorEnumInvalidTxnid     Agcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Agcer400ApplicationJSONErrorEnumInvalidConsentid Agcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Agcer400ApplicationJSONErrorDescriptionEnum string

const (
	Agcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Agcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Agcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Agcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Agcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Agcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Agcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Agcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Agcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Agcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Agcer400ApplicationJSON struct {
	Error            *Agcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Agcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Agcer401ApplicationJSONErrorEnum string

const (
	Agcer401ApplicationJSONErrorEnumInvalidAuthentication Agcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Agcer401ApplicationJSONErrorEnumInvalidAuthorization  Agcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Agcer401ApplicationJSONErrorDescriptionEnum string

const (
	Agcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Agcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Agcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Agcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Agcer401ApplicationJSON struct {
	Error            *Agcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Agcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Agcer404ApplicationJSONErrorEnum string

const (
	Agcer404ApplicationJSONErrorEnumRecordNotFound Agcer404ApplicationJSONErrorEnum = "record_not_found"
	Agcer404ApplicationJSONErrorEnumURLNotFound    Agcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Agcer404ApplicationJSONErrorDescriptionEnum string

const (
	Agcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Agcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Agcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Agcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Agcer404ApplicationJSON struct {
	Error            *Agcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Agcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Agcer500ApplicationJSONErrorEnum string

const (
	Agcer500ApplicationJSONErrorEnumInternalServerError Agcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Agcer500ApplicationJSONErrorDescriptionEnum string

const (
	Agcer500ApplicationJSONErrorDescriptionEnumInternalServerError Agcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Agcer500ApplicationJSON struct {
	Error            *Agcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Agcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Agcer502ApplicationJSONErrorEnum string

const (
	Agcer502ApplicationJSONErrorEnumBadGatewy Agcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Agcer502ApplicationJSONErrorDescriptionEnum string

const (
	Agcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Agcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Agcer502ApplicationJSON struct {
	Error            *Agcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Agcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Agcer503ApplicationJSONErrorEnum string

const (
	Agcer503ApplicationJSONErrorEnumServiceUnavailable Agcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Agcer503ApplicationJSONErrorDescriptionEnum string

const (
	Agcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Agcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Agcer503ApplicationJSON struct {
	Error            *Agcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Agcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Agcer504ApplicationJSONErrorEnum string

const (
	Agcer504ApplicationJSONErrorEnumGatewayTimeout Agcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Agcer504ApplicationJSONErrorDescriptionEnum string

const (
	Agcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Agcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Agcer504ApplicationJSON struct {
	Error            *Agcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Agcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type AgcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Agcer400ApplicationJSONObject *Agcer400ApplicationJSON
	Agcer401ApplicationJSONObject *Agcer401ApplicationJSON
	Agcer404ApplicationJSONObject *Agcer404ApplicationJSON
	Agcer500ApplicationJSONObject *Agcer500ApplicationJSON
	Agcer502ApplicationJSONObject *Agcer502ApplicationJSON
	Agcer503ApplicationJSONObject *Agcer503ApplicationJSON
	Agcer504ApplicationJSONObject *Agcer504ApplicationJSON
}

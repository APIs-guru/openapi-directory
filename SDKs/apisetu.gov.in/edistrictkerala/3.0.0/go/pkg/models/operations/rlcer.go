package operations

import (
	"openapi/pkg/models/shared"
)

type RlcerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type RlcerRequestBodyFormatEnum string

const (
	RlcerRequestBodyFormatEnumPdf RlcerRequestBodyFormatEnum = "pdf"
)

type RlcerRequestBody struct {
	CertificateParameters *RlcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                RlcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type RlcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Rlcer400ApplicationJSONErrorEnum string

const (
	Rlcer400ApplicationJSONErrorEnumMissingParameter Rlcer400ApplicationJSONErrorEnum = "missing_parameter"
	Rlcer400ApplicationJSONErrorEnumInvalidParameter Rlcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Rlcer400ApplicationJSONErrorEnumInvalidFormat    Rlcer400ApplicationJSONErrorEnum = "invalid_format"
	Rlcer400ApplicationJSONErrorEnumInvalidTxnid     Rlcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Rlcer400ApplicationJSONErrorEnumInvalidConsentid Rlcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Rlcer400ApplicationJSONErrorDescriptionEnum string

const (
	Rlcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Rlcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Rlcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Rlcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Rlcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Rlcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Rlcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Rlcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Rlcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Rlcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Rlcer400ApplicationJSON struct {
	Error            *Rlcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rlcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rlcer401ApplicationJSONErrorEnum string

const (
	Rlcer401ApplicationJSONErrorEnumInvalidAuthentication Rlcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Rlcer401ApplicationJSONErrorEnumInvalidAuthorization  Rlcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Rlcer401ApplicationJSONErrorDescriptionEnum string

const (
	Rlcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Rlcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Rlcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Rlcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Rlcer401ApplicationJSON struct {
	Error            *Rlcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rlcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rlcer404ApplicationJSONErrorEnum string

const (
	Rlcer404ApplicationJSONErrorEnumRecordNotFound Rlcer404ApplicationJSONErrorEnum = "record_not_found"
	Rlcer404ApplicationJSONErrorEnumURLNotFound    Rlcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Rlcer404ApplicationJSONErrorDescriptionEnum string

const (
	Rlcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Rlcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Rlcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Rlcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Rlcer404ApplicationJSON struct {
	Error            *Rlcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rlcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rlcer500ApplicationJSONErrorEnum string

const (
	Rlcer500ApplicationJSONErrorEnumInternalServerError Rlcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Rlcer500ApplicationJSONErrorDescriptionEnum string

const (
	Rlcer500ApplicationJSONErrorDescriptionEnumInternalServerError Rlcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Rlcer500ApplicationJSON struct {
	Error            *Rlcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rlcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rlcer502ApplicationJSONErrorEnum string

const (
	Rlcer502ApplicationJSONErrorEnumBadGatewy Rlcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Rlcer502ApplicationJSONErrorDescriptionEnum string

const (
	Rlcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Rlcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Rlcer502ApplicationJSON struct {
	Error            *Rlcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rlcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rlcer503ApplicationJSONErrorEnum string

const (
	Rlcer503ApplicationJSONErrorEnumServiceUnavailable Rlcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Rlcer503ApplicationJSONErrorDescriptionEnum string

const (
	Rlcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Rlcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Rlcer503ApplicationJSON struct {
	Error            *Rlcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rlcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rlcer504ApplicationJSONErrorEnum string

const (
	Rlcer504ApplicationJSONErrorEnumGatewayTimeout Rlcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Rlcer504ApplicationJSONErrorDescriptionEnum string

const (
	Rlcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Rlcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Rlcer504ApplicationJSON struct {
	Error            *Rlcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rlcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type RlcerRequest struct {
	Request  *RlcerRequestBody `request:"mediaType=application/json"`
	Security RlcerSecurity
}

type RlcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Rlcer400ApplicationJSONObject *Rlcer400ApplicationJSON
	Rlcer401ApplicationJSONObject *Rlcer401ApplicationJSON
	Rlcer404ApplicationJSONObject *Rlcer404ApplicationJSON
	Rlcer500ApplicationJSONObject *Rlcer500ApplicationJSON
	Rlcer502ApplicationJSONObject *Rlcer502ApplicationJSON
	Rlcer503ApplicationJSONObject *Rlcer503ApplicationJSON
	Rlcer504ApplicationJSONObject *Rlcer504ApplicationJSON
}

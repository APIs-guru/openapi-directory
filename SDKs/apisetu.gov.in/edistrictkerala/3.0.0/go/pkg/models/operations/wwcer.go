package operations

import (
	"openapi/pkg/models/shared"
)

type WwcerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type WwcerRequestBodyFormatEnum string

const (
	WwcerRequestBodyFormatEnumPdf WwcerRequestBodyFormatEnum = "pdf"
)

type WwcerRequestBody struct {
	CertificateParameters *WwcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                WwcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type WwcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type WwcerRequest struct {
	Request  *WwcerRequestBody `request:"mediaType=application/json"`
	Security WwcerSecurity
}

type Wwcer400ApplicationJSONErrorEnum string

const (
	Wwcer400ApplicationJSONErrorEnumMissingParameter Wwcer400ApplicationJSONErrorEnum = "missing_parameter"
	Wwcer400ApplicationJSONErrorEnumInvalidParameter Wwcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Wwcer400ApplicationJSONErrorEnumInvalidFormat    Wwcer400ApplicationJSONErrorEnum = "invalid_format"
	Wwcer400ApplicationJSONErrorEnumInvalidTxnid     Wwcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Wwcer400ApplicationJSONErrorEnumInvalidConsentid Wwcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Wwcer400ApplicationJSONErrorDescriptionEnum string

const (
	Wwcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Wwcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Wwcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Wwcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Wwcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Wwcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Wwcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Wwcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Wwcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Wwcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Wwcer400ApplicationJSON struct {
	Error            *Wwcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Wwcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Wwcer401ApplicationJSONErrorEnum string

const (
	Wwcer401ApplicationJSONErrorEnumInvalidAuthentication Wwcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Wwcer401ApplicationJSONErrorEnumInvalidAuthorization  Wwcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Wwcer401ApplicationJSONErrorDescriptionEnum string

const (
	Wwcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Wwcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Wwcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Wwcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Wwcer401ApplicationJSON struct {
	Error            *Wwcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Wwcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Wwcer404ApplicationJSONErrorEnum string

const (
	Wwcer404ApplicationJSONErrorEnumRecordNotFound Wwcer404ApplicationJSONErrorEnum = "record_not_found"
	Wwcer404ApplicationJSONErrorEnumURLNotFound    Wwcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Wwcer404ApplicationJSONErrorDescriptionEnum string

const (
	Wwcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Wwcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Wwcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Wwcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Wwcer404ApplicationJSON struct {
	Error            *Wwcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Wwcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Wwcer500ApplicationJSONErrorEnum string

const (
	Wwcer500ApplicationJSONErrorEnumInternalServerError Wwcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Wwcer500ApplicationJSONErrorDescriptionEnum string

const (
	Wwcer500ApplicationJSONErrorDescriptionEnumInternalServerError Wwcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Wwcer500ApplicationJSON struct {
	Error            *Wwcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Wwcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Wwcer502ApplicationJSONErrorEnum string

const (
	Wwcer502ApplicationJSONErrorEnumBadGatewy Wwcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Wwcer502ApplicationJSONErrorDescriptionEnum string

const (
	Wwcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Wwcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Wwcer502ApplicationJSON struct {
	Error            *Wwcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Wwcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Wwcer503ApplicationJSONErrorEnum string

const (
	Wwcer503ApplicationJSONErrorEnumServiceUnavailable Wwcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Wwcer503ApplicationJSONErrorDescriptionEnum string

const (
	Wwcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Wwcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Wwcer503ApplicationJSON struct {
	Error            *Wwcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Wwcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Wwcer504ApplicationJSONErrorEnum string

const (
	Wwcer504ApplicationJSONErrorEnumGatewayTimeout Wwcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Wwcer504ApplicationJSONErrorDescriptionEnum string

const (
	Wwcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Wwcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Wwcer504ApplicationJSON struct {
	Error            *Wwcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Wwcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type WwcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Wwcer400ApplicationJSONObject *Wwcer400ApplicationJSON
	Wwcer401ApplicationJSONObject *Wwcer401ApplicationJSON
	Wwcer404ApplicationJSONObject *Wwcer404ApplicationJSON
	Wwcer500ApplicationJSONObject *Wwcer500ApplicationJSON
	Wwcer502ApplicationJSONObject *Wwcer502ApplicationJSON
	Wwcer503ApplicationJSONObject *Wwcer503ApplicationJSON
	Wwcer504ApplicationJSONObject *Wwcer504ApplicationJSON
}

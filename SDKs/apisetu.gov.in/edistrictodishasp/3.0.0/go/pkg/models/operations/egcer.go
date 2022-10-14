package operations

import (
	"openapi/pkg/models/shared"
)

type EgcerRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	RefNo    string `json:"RefNo"`
	TokenNo  string `json:"TokenNo"`
	UID      string `json:"UID"`
}

type EgcerRequestBodyFormatEnum string

const (
	EgcerRequestBodyFormatEnumPdf EgcerRequestBodyFormatEnum = "pdf"
)

type EgcerRequestBody struct {
	CertificateParameters *EgcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                EgcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type EgcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type EgcerRequest struct {
	Request  *EgcerRequestBody `request:"mediaType=application/json"`
	Security EgcerSecurity
}

type Egcer400ApplicationJSONErrorEnum string

const (
	Egcer400ApplicationJSONErrorEnumMissingParameter Egcer400ApplicationJSONErrorEnum = "missing_parameter"
	Egcer400ApplicationJSONErrorEnumInvalidParameter Egcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Egcer400ApplicationJSONErrorEnumInvalidFormat    Egcer400ApplicationJSONErrorEnum = "invalid_format"
	Egcer400ApplicationJSONErrorEnumInvalidTxnid     Egcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Egcer400ApplicationJSONErrorEnumInvalidConsentid Egcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Egcer400ApplicationJSONErrorDescriptionEnum string

const (
	Egcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Egcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Egcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Egcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Egcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Egcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Egcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Egcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Egcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Egcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Egcer400ApplicationJSON struct {
	Error            *Egcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Egcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Egcer401ApplicationJSONErrorEnum string

const (
	Egcer401ApplicationJSONErrorEnumInvalidAuthentication Egcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Egcer401ApplicationJSONErrorEnumInvalidAuthorization  Egcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Egcer401ApplicationJSONErrorDescriptionEnum string

const (
	Egcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Egcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Egcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Egcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Egcer401ApplicationJSON struct {
	Error            *Egcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Egcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Egcer404ApplicationJSONErrorEnum string

const (
	Egcer404ApplicationJSONErrorEnumRecordNotFound Egcer404ApplicationJSONErrorEnum = "record_not_found"
	Egcer404ApplicationJSONErrorEnumURLNotFound    Egcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Egcer404ApplicationJSONErrorDescriptionEnum string

const (
	Egcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Egcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Egcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Egcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Egcer404ApplicationJSON struct {
	Error            *Egcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Egcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Egcer500ApplicationJSONErrorEnum string

const (
	Egcer500ApplicationJSONErrorEnumInternalServerError Egcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Egcer500ApplicationJSONErrorDescriptionEnum string

const (
	Egcer500ApplicationJSONErrorDescriptionEnumInternalServerError Egcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Egcer500ApplicationJSON struct {
	Error            *Egcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Egcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Egcer502ApplicationJSONErrorEnum string

const (
	Egcer502ApplicationJSONErrorEnumBadGatewy Egcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Egcer502ApplicationJSONErrorDescriptionEnum string

const (
	Egcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Egcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Egcer502ApplicationJSON struct {
	Error            *Egcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Egcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Egcer503ApplicationJSONErrorEnum string

const (
	Egcer503ApplicationJSONErrorEnumServiceUnavailable Egcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Egcer503ApplicationJSONErrorDescriptionEnum string

const (
	Egcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Egcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Egcer503ApplicationJSON struct {
	Error            *Egcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Egcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Egcer504ApplicationJSONErrorEnum string

const (
	Egcer504ApplicationJSONErrorEnumGatewayTimeout Egcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Egcer504ApplicationJSONErrorDescriptionEnum string

const (
	Egcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Egcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Egcer504ApplicationJSON struct {
	Error            *Egcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Egcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type EgcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Egcer400ApplicationJSONObject *Egcer400ApplicationJSON
	Egcer401ApplicationJSONObject *Egcer401ApplicationJSON
	Egcer404ApplicationJSONObject *Egcer404ApplicationJSON
	Egcer500ApplicationJSONObject *Egcer500ApplicationJSON
	Egcer502ApplicationJSONObject *Egcer502ApplicationJSON
	Egcer503ApplicationJSONObject *Egcer503ApplicationJSON
	Egcer504ApplicationJSONObject *Egcer504ApplicationJSON
}

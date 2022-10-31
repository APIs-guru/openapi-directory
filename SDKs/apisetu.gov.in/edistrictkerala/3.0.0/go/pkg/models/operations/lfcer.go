package operations

import (
	"openapi/pkg/models/shared"
)

type LfcerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type LfcerRequestBodyFormatEnum string

const (
	LfcerRequestBodyFormatEnumPdf LfcerRequestBodyFormatEnum = "pdf"
)

type LfcerRequestBody struct {
	CertificateParameters *LfcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                LfcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type LfcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type LfcerRequest struct {
	Request  *LfcerRequestBody `request:"mediaType=application/json"`
	Security LfcerSecurity
}

type Lfcer400ApplicationJSONErrorEnum string

const (
	Lfcer400ApplicationJSONErrorEnumMissingParameter Lfcer400ApplicationJSONErrorEnum = "missing_parameter"
	Lfcer400ApplicationJSONErrorEnumInvalidParameter Lfcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Lfcer400ApplicationJSONErrorEnumInvalidFormat    Lfcer400ApplicationJSONErrorEnum = "invalid_format"
	Lfcer400ApplicationJSONErrorEnumInvalidTxnid     Lfcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Lfcer400ApplicationJSONErrorEnumInvalidConsentid Lfcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Lfcer400ApplicationJSONErrorDescriptionEnum string

const (
	Lfcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Lfcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Lfcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Lfcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Lfcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Lfcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Lfcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Lfcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Lfcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Lfcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Lfcer400ApplicationJSON struct {
	Error            *Lfcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lfcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lfcer401ApplicationJSONErrorEnum string

const (
	Lfcer401ApplicationJSONErrorEnumInvalidAuthentication Lfcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Lfcer401ApplicationJSONErrorEnumInvalidAuthorization  Lfcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Lfcer401ApplicationJSONErrorDescriptionEnum string

const (
	Lfcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Lfcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Lfcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Lfcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Lfcer401ApplicationJSON struct {
	Error            *Lfcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lfcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lfcer404ApplicationJSONErrorEnum string

const (
	Lfcer404ApplicationJSONErrorEnumRecordNotFound Lfcer404ApplicationJSONErrorEnum = "record_not_found"
	Lfcer404ApplicationJSONErrorEnumURLNotFound    Lfcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Lfcer404ApplicationJSONErrorDescriptionEnum string

const (
	Lfcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Lfcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Lfcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Lfcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Lfcer404ApplicationJSON struct {
	Error            *Lfcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lfcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lfcer500ApplicationJSONErrorEnum string

const (
	Lfcer500ApplicationJSONErrorEnumInternalServerError Lfcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Lfcer500ApplicationJSONErrorDescriptionEnum string

const (
	Lfcer500ApplicationJSONErrorDescriptionEnumInternalServerError Lfcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Lfcer500ApplicationJSON struct {
	Error            *Lfcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lfcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lfcer502ApplicationJSONErrorEnum string

const (
	Lfcer502ApplicationJSONErrorEnumBadGatewy Lfcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Lfcer502ApplicationJSONErrorDescriptionEnum string

const (
	Lfcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Lfcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Lfcer502ApplicationJSON struct {
	Error            *Lfcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lfcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lfcer503ApplicationJSONErrorEnum string

const (
	Lfcer503ApplicationJSONErrorEnumServiceUnavailable Lfcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Lfcer503ApplicationJSONErrorDescriptionEnum string

const (
	Lfcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Lfcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Lfcer503ApplicationJSON struct {
	Error            *Lfcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lfcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lfcer504ApplicationJSONErrorEnum string

const (
	Lfcer504ApplicationJSONErrorEnumGatewayTimeout Lfcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Lfcer504ApplicationJSONErrorDescriptionEnum string

const (
	Lfcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Lfcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Lfcer504ApplicationJSON struct {
	Error            *Lfcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lfcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type LfcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Lfcer400ApplicationJSONObject *Lfcer400ApplicationJSON
	Lfcer401ApplicationJSONObject *Lfcer401ApplicationJSON
	Lfcer404ApplicationJSONObject *Lfcer404ApplicationJSON
	Lfcer500ApplicationJSONObject *Lfcer500ApplicationJSON
	Lfcer502ApplicationJSONObject *Lfcer502ApplicationJSON
	Lfcer503ApplicationJSONObject *Lfcer503ApplicationJSON
	Lfcer504ApplicationJSONObject *Lfcer504ApplicationJSON
}

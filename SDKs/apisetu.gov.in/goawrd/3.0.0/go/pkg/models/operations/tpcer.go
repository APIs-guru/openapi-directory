package operations

import (
	"openapi/pkg/models/shared"
)

type TpcerRequestBodyCertificateParameters struct {
	FullName     string `json:"FullName"`
	Registration string `json:"Registration"`
}

type TpcerRequestBodyFormatEnum string

const (
	TpcerRequestBodyFormatEnumPdf TpcerRequestBodyFormatEnum = "pdf"
)

type TpcerRequestBody struct {
	CertificateParameters *TpcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                TpcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type TpcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type TpcerRequest struct {
	Request  *TpcerRequestBody `request:"mediaType=application/json"`
	Security TpcerSecurity
}

type Tpcer400ApplicationJSONErrorEnum string

const (
	Tpcer400ApplicationJSONErrorEnumMissingParameter Tpcer400ApplicationJSONErrorEnum = "missing_parameter"
	Tpcer400ApplicationJSONErrorEnumInvalidParameter Tpcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Tpcer400ApplicationJSONErrorEnumInvalidFormat    Tpcer400ApplicationJSONErrorEnum = "invalid_format"
	Tpcer400ApplicationJSONErrorEnumInvalidTxnid     Tpcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Tpcer400ApplicationJSONErrorEnumInvalidConsentid Tpcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Tpcer400ApplicationJSONErrorDescriptionEnum string

const (
	Tpcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Tpcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Tpcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Tpcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Tpcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Tpcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Tpcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Tpcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Tpcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Tpcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Tpcer400ApplicationJSON struct {
	Error            *Tpcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tpcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tpcer401ApplicationJSONErrorEnum string

const (
	Tpcer401ApplicationJSONErrorEnumInvalidAuthentication Tpcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Tpcer401ApplicationJSONErrorEnumInvalidAuthorization  Tpcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Tpcer401ApplicationJSONErrorDescriptionEnum string

const (
	Tpcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Tpcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Tpcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Tpcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Tpcer401ApplicationJSON struct {
	Error            *Tpcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tpcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tpcer404ApplicationJSONErrorEnum string

const (
	Tpcer404ApplicationJSONErrorEnumRecordNotFound Tpcer404ApplicationJSONErrorEnum = "record_not_found"
	Tpcer404ApplicationJSONErrorEnumURLNotFound    Tpcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Tpcer404ApplicationJSONErrorDescriptionEnum string

const (
	Tpcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Tpcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Tpcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Tpcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Tpcer404ApplicationJSON struct {
	Error            *Tpcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tpcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tpcer500ApplicationJSONErrorEnum string

const (
	Tpcer500ApplicationJSONErrorEnumInternalServerError Tpcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Tpcer500ApplicationJSONErrorDescriptionEnum string

const (
	Tpcer500ApplicationJSONErrorDescriptionEnumInternalServerError Tpcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Tpcer500ApplicationJSON struct {
	Error            *Tpcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tpcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tpcer502ApplicationJSONErrorEnum string

const (
	Tpcer502ApplicationJSONErrorEnumBadGatewy Tpcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Tpcer502ApplicationJSONErrorDescriptionEnum string

const (
	Tpcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Tpcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Tpcer502ApplicationJSON struct {
	Error            *Tpcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tpcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tpcer503ApplicationJSONErrorEnum string

const (
	Tpcer503ApplicationJSONErrorEnumServiceUnavailable Tpcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Tpcer503ApplicationJSONErrorDescriptionEnum string

const (
	Tpcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Tpcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Tpcer503ApplicationJSON struct {
	Error            *Tpcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tpcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Tpcer504ApplicationJSONErrorEnum string

const (
	Tpcer504ApplicationJSONErrorEnumGatewayTimeout Tpcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Tpcer504ApplicationJSONErrorDescriptionEnum string

const (
	Tpcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Tpcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Tpcer504ApplicationJSON struct {
	Error            *Tpcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Tpcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type TpcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Tpcer400ApplicationJSONObject *Tpcer400ApplicationJSON
	Tpcer401ApplicationJSONObject *Tpcer401ApplicationJSON
	Tpcer404ApplicationJSONObject *Tpcer404ApplicationJSON
	Tpcer500ApplicationJSONObject *Tpcer500ApplicationJSON
	Tpcer502ApplicationJSONObject *Tpcer502ApplicationJSON
	Tpcer503ApplicationJSONObject *Tpcer503ApplicationJSON
	Tpcer504ApplicationJSONObject *Tpcer504ApplicationJSON
}

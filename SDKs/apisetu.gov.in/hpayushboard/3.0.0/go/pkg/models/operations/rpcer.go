package operations

import (
	"openapi/pkg/models/shared"
)

type RpcerRequestBodyCertificateParameters struct {
	FullName       string `json:"FullName"`
	RegistrationNo string `json:"RegistrationNo"`
}

type RpcerRequestBodyFormatEnum string

const (
	RpcerRequestBodyFormatEnumPdf RpcerRequestBodyFormatEnum = "pdf"
)

type RpcerRequestBody struct {
	CertificateParameters *RpcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                RpcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type RpcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type RpcerRequest struct {
	Request  *RpcerRequestBody `request:"mediaType=application/json"`
	Security RpcerSecurity
}

type Rpcer400ApplicationJSONErrorEnum string

const (
	Rpcer400ApplicationJSONErrorEnumMissingParameter Rpcer400ApplicationJSONErrorEnum = "missing_parameter"
	Rpcer400ApplicationJSONErrorEnumInvalidParameter Rpcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Rpcer400ApplicationJSONErrorEnumInvalidFormat    Rpcer400ApplicationJSONErrorEnum = "invalid_format"
	Rpcer400ApplicationJSONErrorEnumInvalidTxnid     Rpcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Rpcer400ApplicationJSONErrorEnumInvalidConsentid Rpcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Rpcer400ApplicationJSONErrorDescriptionEnum string

const (
	Rpcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Rpcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Rpcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Rpcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Rpcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Rpcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Rpcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Rpcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Rpcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Rpcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Rpcer400ApplicationJSON struct {
	Error            *Rpcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rpcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rpcer401ApplicationJSONErrorEnum string

const (
	Rpcer401ApplicationJSONErrorEnumInvalidAuthentication Rpcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Rpcer401ApplicationJSONErrorEnumInvalidAuthorization  Rpcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Rpcer401ApplicationJSONErrorDescriptionEnum string

const (
	Rpcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Rpcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Rpcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Rpcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Rpcer401ApplicationJSON struct {
	Error            *Rpcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rpcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rpcer404ApplicationJSONErrorEnum string

const (
	Rpcer404ApplicationJSONErrorEnumRecordNotFound Rpcer404ApplicationJSONErrorEnum = "record_not_found"
	Rpcer404ApplicationJSONErrorEnumURLNotFound    Rpcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Rpcer404ApplicationJSONErrorDescriptionEnum string

const (
	Rpcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Rpcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Rpcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Rpcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Rpcer404ApplicationJSON struct {
	Error            *Rpcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rpcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rpcer500ApplicationJSONErrorEnum string

const (
	Rpcer500ApplicationJSONErrorEnumInternalServerError Rpcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Rpcer500ApplicationJSONErrorDescriptionEnum string

const (
	Rpcer500ApplicationJSONErrorDescriptionEnumInternalServerError Rpcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Rpcer500ApplicationJSON struct {
	Error            *Rpcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rpcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rpcer502ApplicationJSONErrorEnum string

const (
	Rpcer502ApplicationJSONErrorEnumBadGatewy Rpcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Rpcer502ApplicationJSONErrorDescriptionEnum string

const (
	Rpcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Rpcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Rpcer502ApplicationJSON struct {
	Error            *Rpcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rpcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rpcer503ApplicationJSONErrorEnum string

const (
	Rpcer503ApplicationJSONErrorEnumServiceUnavailable Rpcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Rpcer503ApplicationJSONErrorDescriptionEnum string

const (
	Rpcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Rpcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Rpcer503ApplicationJSON struct {
	Error            *Rpcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rpcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Rpcer504ApplicationJSONErrorEnum string

const (
	Rpcer504ApplicationJSONErrorEnumGatewayTimeout Rpcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Rpcer504ApplicationJSONErrorDescriptionEnum string

const (
	Rpcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Rpcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Rpcer504ApplicationJSON struct {
	Error            *Rpcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Rpcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type RpcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Rpcer400ApplicationJSONObject *Rpcer400ApplicationJSON
	Rpcer401ApplicationJSONObject *Rpcer401ApplicationJSON
	Rpcer404ApplicationJSONObject *Rpcer404ApplicationJSON
	Rpcer500ApplicationJSONObject *Rpcer500ApplicationJSON
	Rpcer502ApplicationJSONObject *Rpcer502ApplicationJSON
	Rpcer503ApplicationJSONObject *Rpcer503ApplicationJSON
	Rpcer504ApplicationJSONObject *Rpcer504ApplicationJSON
}

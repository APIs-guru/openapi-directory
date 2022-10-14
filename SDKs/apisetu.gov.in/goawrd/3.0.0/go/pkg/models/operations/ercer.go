package operations

import (
	"openapi/pkg/models/shared"
)

type ErcerRequestBodyCertificateParameters struct {
	FullName     string `json:"FullName"`
	Registration string `json:"Registration"`
}

type ErcerRequestBodyFormatEnum string

const (
	ErcerRequestBodyFormatEnumPdf ErcerRequestBodyFormatEnum = "pdf"
)

type ErcerRequestBody struct {
	CertificateParameters *ErcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                ErcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type ErcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type ErcerRequest struct {
	Request  *ErcerRequestBody `request:"mediaType=application/json"`
	Security ErcerSecurity
}

type Ercer400ApplicationJSONErrorEnum string

const (
	Ercer400ApplicationJSONErrorEnumMissingParameter Ercer400ApplicationJSONErrorEnum = "missing_parameter"
	Ercer400ApplicationJSONErrorEnumInvalidParameter Ercer400ApplicationJSONErrorEnum = "invalid_parameter"
	Ercer400ApplicationJSONErrorEnumInvalidFormat    Ercer400ApplicationJSONErrorEnum = "invalid_format"
	Ercer400ApplicationJSONErrorEnumInvalidTxnid     Ercer400ApplicationJSONErrorEnum = "invalid_txnid"
	Ercer400ApplicationJSONErrorEnumInvalidConsentid Ercer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Ercer400ApplicationJSONErrorDescriptionEnum string

const (
	Ercer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ercer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ercer400ApplicationJSONErrorDescriptionEnumBadRequest                              Ercer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ercer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ercer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ercer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ercer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ercer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ercer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Ercer400ApplicationJSON struct {
	Error            *Ercer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ercer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ercer401ApplicationJSONErrorEnum string

const (
	Ercer401ApplicationJSONErrorEnumInvalidAuthentication Ercer401ApplicationJSONErrorEnum = "invalid_authentication"
	Ercer401ApplicationJSONErrorEnumInvalidAuthorization  Ercer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Ercer401ApplicationJSONErrorDescriptionEnum string

const (
	Ercer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ercer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ercer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ercer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Ercer401ApplicationJSON struct {
	Error            *Ercer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ercer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ercer404ApplicationJSONErrorEnum string

const (
	Ercer404ApplicationJSONErrorEnumRecordNotFound Ercer404ApplicationJSONErrorEnum = "record_not_found"
	Ercer404ApplicationJSONErrorEnumURLNotFound    Ercer404ApplicationJSONErrorEnum = "url_not_found"
)

type Ercer404ApplicationJSONErrorDescriptionEnum string

const (
	Ercer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ercer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ercer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ercer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Ercer404ApplicationJSON struct {
	Error            *Ercer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ercer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ercer500ApplicationJSONErrorEnum string

const (
	Ercer500ApplicationJSONErrorEnumInternalServerError Ercer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Ercer500ApplicationJSONErrorDescriptionEnum string

const (
	Ercer500ApplicationJSONErrorDescriptionEnumInternalServerError Ercer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Ercer500ApplicationJSON struct {
	Error            *Ercer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ercer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ercer502ApplicationJSONErrorEnum string

const (
	Ercer502ApplicationJSONErrorEnumBadGatewy Ercer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Ercer502ApplicationJSONErrorDescriptionEnum string

const (
	Ercer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ercer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Ercer502ApplicationJSON struct {
	Error            *Ercer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ercer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ercer503ApplicationJSONErrorEnum string

const (
	Ercer503ApplicationJSONErrorEnumServiceUnavailable Ercer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Ercer503ApplicationJSONErrorDescriptionEnum string

const (
	Ercer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ercer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Ercer503ApplicationJSON struct {
	Error            *Ercer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ercer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ercer504ApplicationJSONErrorEnum string

const (
	Ercer504ApplicationJSONErrorEnumGatewayTimeout Ercer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Ercer504ApplicationJSONErrorDescriptionEnum string

const (
	Ercer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ercer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Ercer504ApplicationJSON struct {
	Error            *Ercer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ercer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ErcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Ercer400ApplicationJSONObject *Ercer400ApplicationJSON
	Ercer401ApplicationJSONObject *Ercer401ApplicationJSON
	Ercer404ApplicationJSONObject *Ercer404ApplicationJSON
	Ercer500ApplicationJSONObject *Ercer500ApplicationJSON
	Ercer502ApplicationJSONObject *Ercer502ApplicationJSON
	Ercer503ApplicationJSONObject *Ercer503ApplicationJSON
	Ercer504ApplicationJSONObject *Ercer504ApplicationJSON
}

package operations

import (
	"openapi/pkg/models/shared"
)

type DncerRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type DncerRequestBodyFormatEnum string

const (
	DncerRequestBodyFormatEnumPdf DncerRequestBodyFormatEnum = "pdf"
)

type DncerRequestBody struct {
	CertificateParameters *DncerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                DncerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type DncerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type DncerRequest struct {
	Request  *DncerRequestBody `request:"mediaType=application/json"`
	Security DncerSecurity
}

type Dncer400ApplicationJSONErrorEnum string

const (
	Dncer400ApplicationJSONErrorEnumMissingParameter Dncer400ApplicationJSONErrorEnum = "missing_parameter"
	Dncer400ApplicationJSONErrorEnumInvalidParameter Dncer400ApplicationJSONErrorEnum = "invalid_parameter"
	Dncer400ApplicationJSONErrorEnumInvalidFormat    Dncer400ApplicationJSONErrorEnum = "invalid_format"
	Dncer400ApplicationJSONErrorEnumInvalidTxnid     Dncer400ApplicationJSONErrorEnum = "invalid_txnid"
	Dncer400ApplicationJSONErrorEnumInvalidConsentid Dncer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Dncer400ApplicationJSONErrorDescriptionEnum string

const (
	Dncer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Dncer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Dncer400ApplicationJSONErrorDescriptionEnumBadRequest                              Dncer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Dncer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Dncer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Dncer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Dncer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Dncer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Dncer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Dncer400ApplicationJSON struct {
	Error            *Dncer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dncer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dncer401ApplicationJSONErrorEnum string

const (
	Dncer401ApplicationJSONErrorEnumInvalidAuthentication Dncer401ApplicationJSONErrorEnum = "invalid_authentication"
	Dncer401ApplicationJSONErrorEnumInvalidAuthorization  Dncer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Dncer401ApplicationJSONErrorDescriptionEnum string

const (
	Dncer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Dncer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Dncer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Dncer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Dncer401ApplicationJSON struct {
	Error            *Dncer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dncer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dncer404ApplicationJSONErrorEnum string

const (
	Dncer404ApplicationJSONErrorEnumRecordNotFound Dncer404ApplicationJSONErrorEnum = "record_not_found"
	Dncer404ApplicationJSONErrorEnumURLNotFound    Dncer404ApplicationJSONErrorEnum = "url_not_found"
)

type Dncer404ApplicationJSONErrorDescriptionEnum string

const (
	Dncer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Dncer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Dncer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Dncer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Dncer404ApplicationJSON struct {
	Error            *Dncer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dncer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dncer500ApplicationJSONErrorEnum string

const (
	Dncer500ApplicationJSONErrorEnumInternalServerError Dncer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Dncer500ApplicationJSONErrorDescriptionEnum string

const (
	Dncer500ApplicationJSONErrorDescriptionEnumInternalServerError Dncer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Dncer500ApplicationJSON struct {
	Error            *Dncer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dncer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dncer502ApplicationJSONErrorEnum string

const (
	Dncer502ApplicationJSONErrorEnumBadGatewy Dncer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Dncer502ApplicationJSONErrorDescriptionEnum string

const (
	Dncer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Dncer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Dncer502ApplicationJSON struct {
	Error            *Dncer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dncer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dncer503ApplicationJSONErrorEnum string

const (
	Dncer503ApplicationJSONErrorEnumServiceUnavailable Dncer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Dncer503ApplicationJSONErrorDescriptionEnum string

const (
	Dncer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Dncer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Dncer503ApplicationJSON struct {
	Error            *Dncer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dncer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dncer504ApplicationJSONErrorEnum string

const (
	Dncer504ApplicationJSONErrorEnumGatewayTimeout Dncer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Dncer504ApplicationJSONErrorDescriptionEnum string

const (
	Dncer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Dncer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Dncer504ApplicationJSON struct {
	Error            *Dncer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dncer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type DncerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Dncer400ApplicationJSONObject *Dncer400ApplicationJSON
	Dncer401ApplicationJSONObject *Dncer401ApplicationJSON
	Dncer404ApplicationJSONObject *Dncer404ApplicationJSON
	Dncer500ApplicationJSONObject *Dncer500ApplicationJSON
	Dncer502ApplicationJSONObject *Dncer502ApplicationJSON
	Dncer503ApplicationJSONObject *Dncer503ApplicationJSON
	Dncer504ApplicationJSONObject *Dncer504ApplicationJSON
}

package operations

import (
	"openapi/pkg/models/shared"
)

type LvcerRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type LvcerRequestBodyFormatEnum string

const (
	LvcerRequestBodyFormatEnumPdf LvcerRequestBodyFormatEnum = "pdf"
)

type LvcerRequestBody struct {
	CertificateParameters *LvcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                LvcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type LvcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Lvcer400ApplicationJSONErrorEnum string

const (
	Lvcer400ApplicationJSONErrorEnumMissingParameter Lvcer400ApplicationJSONErrorEnum = "missing_parameter"
	Lvcer400ApplicationJSONErrorEnumInvalidParameter Lvcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Lvcer400ApplicationJSONErrorEnumInvalidFormat    Lvcer400ApplicationJSONErrorEnum = "invalid_format"
	Lvcer400ApplicationJSONErrorEnumInvalidTxnid     Lvcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Lvcer400ApplicationJSONErrorEnumInvalidConsentid Lvcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Lvcer400ApplicationJSONErrorDescriptionEnum string

const (
	Lvcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Lvcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Lvcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Lvcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Lvcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Lvcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Lvcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Lvcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Lvcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Lvcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Lvcer400ApplicationJSON struct {
	Error            *Lvcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lvcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lvcer401ApplicationJSONErrorEnum string

const (
	Lvcer401ApplicationJSONErrorEnumInvalidAuthentication Lvcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Lvcer401ApplicationJSONErrorEnumInvalidAuthorization  Lvcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Lvcer401ApplicationJSONErrorDescriptionEnum string

const (
	Lvcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Lvcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Lvcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Lvcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Lvcer401ApplicationJSON struct {
	Error            *Lvcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lvcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lvcer404ApplicationJSONErrorEnum string

const (
	Lvcer404ApplicationJSONErrorEnumRecordNotFound Lvcer404ApplicationJSONErrorEnum = "record_not_found"
	Lvcer404ApplicationJSONErrorEnumURLNotFound    Lvcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Lvcer404ApplicationJSONErrorDescriptionEnum string

const (
	Lvcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Lvcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Lvcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Lvcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Lvcer404ApplicationJSON struct {
	Error            *Lvcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lvcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lvcer500ApplicationJSONErrorEnum string

const (
	Lvcer500ApplicationJSONErrorEnumInternalServerError Lvcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Lvcer500ApplicationJSONErrorDescriptionEnum string

const (
	Lvcer500ApplicationJSONErrorDescriptionEnumInternalServerError Lvcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Lvcer500ApplicationJSON struct {
	Error            *Lvcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lvcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lvcer502ApplicationJSONErrorEnum string

const (
	Lvcer502ApplicationJSONErrorEnumBadGatewy Lvcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Lvcer502ApplicationJSONErrorDescriptionEnum string

const (
	Lvcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Lvcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Lvcer502ApplicationJSON struct {
	Error            *Lvcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lvcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lvcer503ApplicationJSONErrorEnum string

const (
	Lvcer503ApplicationJSONErrorEnumServiceUnavailable Lvcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Lvcer503ApplicationJSONErrorDescriptionEnum string

const (
	Lvcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Lvcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Lvcer503ApplicationJSON struct {
	Error            *Lvcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lvcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Lvcer504ApplicationJSONErrorEnum string

const (
	Lvcer504ApplicationJSONErrorEnumGatewayTimeout Lvcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Lvcer504ApplicationJSONErrorDescriptionEnum string

const (
	Lvcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Lvcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Lvcer504ApplicationJSON struct {
	Error            *Lvcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Lvcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type LvcerRequest struct {
	Request  *LvcerRequestBody `request:"mediaType=application/json"`
	Security LvcerSecurity
}

type LvcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Lvcer400ApplicationJSONObject *Lvcer400ApplicationJSON
	Lvcer401ApplicationJSONObject *Lvcer401ApplicationJSON
	Lvcer404ApplicationJSONObject *Lvcer404ApplicationJSON
	Lvcer500ApplicationJSONObject *Lvcer500ApplicationJSON
	Lvcer502ApplicationJSONObject *Lvcer502ApplicationJSON
	Lvcer503ApplicationJSONObject *Lvcer503ApplicationJSON
	Lvcer504ApplicationJSONObject *Lvcer504ApplicationJSON
}

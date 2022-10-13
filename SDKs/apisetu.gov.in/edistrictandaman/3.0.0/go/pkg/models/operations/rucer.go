package operations

import (
	"openapi/pkg/models/shared"
)

type RucerRequestBodyCertificateParameters struct {
	CertificateNumber string `json:"CertificateNumber"`
}

type RucerRequestBodyFormatEnum string

const (
	RucerRequestBodyFormatEnumPdf RucerRequestBodyFormatEnum = "pdf"
)

type RucerRequestBody struct {
	CertificateParameters *RucerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                RucerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type RucerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type RucerRequest struct {
	Request  *RucerRequestBody `request:"mediaType=application/json"`
	Security RucerSecurity
}

type Rucer400ApplicationJSONErrorEnum string

const (
	Rucer400ApplicationJSONErrorEnumMissingParameter Rucer400ApplicationJSONErrorEnum = "missing_parameter"
	Rucer400ApplicationJSONErrorEnumInvalidParameter Rucer400ApplicationJSONErrorEnum = "invalid_parameter"
	Rucer400ApplicationJSONErrorEnumInvalidFormat    Rucer400ApplicationJSONErrorEnum = "invalid_format"
	Rucer400ApplicationJSONErrorEnumInvalidTxnid     Rucer400ApplicationJSONErrorEnum = "invalid_txnid"
	Rucer400ApplicationJSONErrorEnumInvalidConsentid Rucer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Rucer400ApplicationJSONErrorDescriptionEnum string

const (
	Rucer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Rucer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Rucer400ApplicationJSONErrorDescriptionEnumBadRequest                              Rucer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Rucer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Rucer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Rucer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Rucer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Rucer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Rucer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Rucer400ApplicationJSON struct {
	Error            *Rucer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Rucer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Rucer401ApplicationJSONErrorEnum string

const (
	Rucer401ApplicationJSONErrorEnumInvalidAuthentication Rucer401ApplicationJSONErrorEnum = "invalid_authentication"
	Rucer401ApplicationJSONErrorEnumInvalidAuthorization  Rucer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Rucer401ApplicationJSONErrorDescriptionEnum string

const (
	Rucer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Rucer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Rucer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Rucer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Rucer401ApplicationJSON struct {
	Error            *Rucer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Rucer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Rucer404ApplicationJSONErrorEnum string

const (
	Rucer404ApplicationJSONErrorEnumRecordNotFound Rucer404ApplicationJSONErrorEnum = "record_not_found"
	Rucer404ApplicationJSONErrorEnumURLNotFound    Rucer404ApplicationJSONErrorEnum = "url_not_found"
)

type Rucer404ApplicationJSONErrorDescriptionEnum string

const (
	Rucer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Rucer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Rucer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Rucer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Rucer404ApplicationJSON struct {
	Error            *Rucer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Rucer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Rucer500ApplicationJSONErrorEnum string

const (
	Rucer500ApplicationJSONErrorEnumInternalServerError Rucer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Rucer500ApplicationJSONErrorDescriptionEnum string

const (
	Rucer500ApplicationJSONErrorDescriptionEnumInternalServerError Rucer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Rucer500ApplicationJSON struct {
	Error            *Rucer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Rucer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Rucer502ApplicationJSONErrorEnum string

const (
	Rucer502ApplicationJSONErrorEnumBadGatewy Rucer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Rucer502ApplicationJSONErrorDescriptionEnum string

const (
	Rucer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Rucer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Rucer502ApplicationJSON struct {
	Error            *Rucer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Rucer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Rucer503ApplicationJSONErrorEnum string

const (
	Rucer503ApplicationJSONErrorEnumServiceUnavailable Rucer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Rucer503ApplicationJSONErrorDescriptionEnum string

const (
	Rucer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Rucer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Rucer503ApplicationJSON struct {
	Error            *Rucer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Rucer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Rucer504ApplicationJSONErrorEnum string

const (
	Rucer504ApplicationJSONErrorEnumGatewayTimeout Rucer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Rucer504ApplicationJSONErrorDescriptionEnum string

const (
	Rucer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Rucer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Rucer504ApplicationJSON struct {
	Error            *Rucer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Rucer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type RucerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Rucer400ApplicationJSONObject *Rucer400ApplicationJSON
	Rucer401ApplicationJSONObject *Rucer401ApplicationJSON
	Rucer404ApplicationJSONObject *Rucer404ApplicationJSON
	Rucer500ApplicationJSONObject *Rucer500ApplicationJSON
	Rucer502ApplicationJSONObject *Rucer502ApplicationJSON
	Rucer503ApplicationJSONObject *Rucer503ApplicationJSON
	Rucer504ApplicationJSONObject *Rucer504ApplicationJSON
}

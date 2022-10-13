package operations

import (
	"openapi/pkg/models/shared"
)

type RacerRequestBodyCertificateParameters struct {
	Name  string `json:"Name"`
	RefNo string `json:"RefNo"`
}

type RacerRequestBodyFormatEnum string

const (
	RacerRequestBodyFormatEnumPdf RacerRequestBodyFormatEnum = "pdf"
)

type RacerRequestBody struct {
	CertificateParameters *RacerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                RacerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type RacerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type RacerRequest struct {
	Request  *RacerRequestBody `request:"mediaType=application/json"`
	Security RacerSecurity
}

type Racer400ApplicationJSONErrorEnum string

const (
	Racer400ApplicationJSONErrorEnumMissingParameter Racer400ApplicationJSONErrorEnum = "missing_parameter"
	Racer400ApplicationJSONErrorEnumInvalidParameter Racer400ApplicationJSONErrorEnum = "invalid_parameter"
	Racer400ApplicationJSONErrorEnumInvalidFormat    Racer400ApplicationJSONErrorEnum = "invalid_format"
	Racer400ApplicationJSONErrorEnumInvalidTxnid     Racer400ApplicationJSONErrorEnum = "invalid_txnid"
	Racer400ApplicationJSONErrorEnumInvalidConsentid Racer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Racer400ApplicationJSONErrorDescriptionEnum string

const (
	Racer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Racer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Racer400ApplicationJSONErrorDescriptionEnumBadRequest                              Racer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Racer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Racer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Racer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Racer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Racer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Racer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Racer400ApplicationJSON struct {
	Error            *Racer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Racer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Racer401ApplicationJSONErrorEnum string

const (
	Racer401ApplicationJSONErrorEnumInvalidAuthentication Racer401ApplicationJSONErrorEnum = "invalid_authentication"
	Racer401ApplicationJSONErrorEnumInvalidAuthorization  Racer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Racer401ApplicationJSONErrorDescriptionEnum string

const (
	Racer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Racer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Racer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Racer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Racer401ApplicationJSON struct {
	Error            *Racer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Racer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Racer404ApplicationJSONErrorEnum string

const (
	Racer404ApplicationJSONErrorEnumRecordNotFound Racer404ApplicationJSONErrorEnum = "record_not_found"
	Racer404ApplicationJSONErrorEnumURLNotFound    Racer404ApplicationJSONErrorEnum = "url_not_found"
)

type Racer404ApplicationJSONErrorDescriptionEnum string

const (
	Racer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Racer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Racer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Racer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Racer404ApplicationJSON struct {
	Error            *Racer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Racer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Racer500ApplicationJSONErrorEnum string

const (
	Racer500ApplicationJSONErrorEnumInternalServerError Racer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Racer500ApplicationJSONErrorDescriptionEnum string

const (
	Racer500ApplicationJSONErrorDescriptionEnumInternalServerError Racer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Racer500ApplicationJSON struct {
	Error            *Racer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Racer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Racer502ApplicationJSONErrorEnum string

const (
	Racer502ApplicationJSONErrorEnumBadGatewy Racer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Racer502ApplicationJSONErrorDescriptionEnum string

const (
	Racer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Racer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Racer502ApplicationJSON struct {
	Error            *Racer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Racer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Racer503ApplicationJSONErrorEnum string

const (
	Racer503ApplicationJSONErrorEnumServiceUnavailable Racer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Racer503ApplicationJSONErrorDescriptionEnum string

const (
	Racer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Racer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Racer503ApplicationJSON struct {
	Error            *Racer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Racer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Racer504ApplicationJSONErrorEnum string

const (
	Racer504ApplicationJSONErrorEnumGatewayTimeout Racer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Racer504ApplicationJSONErrorDescriptionEnum string

const (
	Racer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Racer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Racer504ApplicationJSON struct {
	Error            *Racer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Racer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type RacerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Racer400ApplicationJSONObject *Racer400ApplicationJSON
	Racer401ApplicationJSONObject *Racer401ApplicationJSON
	Racer404ApplicationJSONObject *Racer404ApplicationJSON
	Racer500ApplicationJSONObject *Racer500ApplicationJSON
	Racer502ApplicationJSONObject *Racer502ApplicationJSON
	Racer503ApplicationJSONObject *Racer503ApplicationJSON
	Racer504ApplicationJSONObject *Racer504ApplicationJSON
}

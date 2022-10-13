package operations

import (
	"openapi/pkg/models/shared"
)

type SicerRequestBodyCertificateParameters struct {
	Name       string `json:"_name"`
	ConsumerID string `json:"consumer_id"`
}

type SicerRequestBodyFormatEnum string

const (
	SicerRequestBodyFormatEnumPdf SicerRequestBodyFormatEnum = "pdf"
)

type SicerRequestBody struct {
	CertificateParameters *SicerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                SicerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type SicerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type SicerRequest struct {
	Request  *SicerRequestBody `request:"mediaType=application/json"`
	Security SicerSecurity
}

type Sicer400ApplicationJSONErrorEnum string

const (
	Sicer400ApplicationJSONErrorEnumMissingParameter Sicer400ApplicationJSONErrorEnum = "missing_parameter"
	Sicer400ApplicationJSONErrorEnumInvalidParameter Sicer400ApplicationJSONErrorEnum = "invalid_parameter"
	Sicer400ApplicationJSONErrorEnumInvalidFormat    Sicer400ApplicationJSONErrorEnum = "invalid_format"
	Sicer400ApplicationJSONErrorEnumInvalidTxnid     Sicer400ApplicationJSONErrorEnum = "invalid_txnid"
	Sicer400ApplicationJSONErrorEnumInvalidConsentid Sicer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Sicer400ApplicationJSONErrorDescriptionEnum string

const (
	Sicer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Sicer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Sicer400ApplicationJSONErrorDescriptionEnumBadRequest                              Sicer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Sicer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Sicer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Sicer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Sicer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Sicer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Sicer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Sicer400ApplicationJSON struct {
	Error            *Sicer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sicer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sicer401ApplicationJSONErrorEnum string

const (
	Sicer401ApplicationJSONErrorEnumInvalidAuthentication Sicer401ApplicationJSONErrorEnum = "invalid_authentication"
	Sicer401ApplicationJSONErrorEnumInvalidAuthorization  Sicer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Sicer401ApplicationJSONErrorDescriptionEnum string

const (
	Sicer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Sicer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Sicer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Sicer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Sicer401ApplicationJSON struct {
	Error            *Sicer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sicer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sicer404ApplicationJSONErrorEnum string

const (
	Sicer404ApplicationJSONErrorEnumRecordNotFound Sicer404ApplicationJSONErrorEnum = "record_not_found"
	Sicer404ApplicationJSONErrorEnumURLNotFound    Sicer404ApplicationJSONErrorEnum = "url_not_found"
)

type Sicer404ApplicationJSONErrorDescriptionEnum string

const (
	Sicer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Sicer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Sicer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Sicer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Sicer404ApplicationJSON struct {
	Error            *Sicer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sicer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sicer500ApplicationJSONErrorEnum string

const (
	Sicer500ApplicationJSONErrorEnumInternalServerError Sicer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Sicer500ApplicationJSONErrorDescriptionEnum string

const (
	Sicer500ApplicationJSONErrorDescriptionEnumInternalServerError Sicer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Sicer500ApplicationJSON struct {
	Error            *Sicer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sicer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sicer502ApplicationJSONErrorEnum string

const (
	Sicer502ApplicationJSONErrorEnumBadGatewy Sicer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Sicer502ApplicationJSONErrorDescriptionEnum string

const (
	Sicer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Sicer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Sicer502ApplicationJSON struct {
	Error            *Sicer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sicer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sicer503ApplicationJSONErrorEnum string

const (
	Sicer503ApplicationJSONErrorEnumServiceUnavailable Sicer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Sicer503ApplicationJSONErrorDescriptionEnum string

const (
	Sicer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Sicer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Sicer503ApplicationJSON struct {
	Error            *Sicer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sicer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Sicer504ApplicationJSONErrorEnum string

const (
	Sicer504ApplicationJSONErrorEnumGatewayTimeout Sicer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Sicer504ApplicationJSONErrorDescriptionEnum string

const (
	Sicer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Sicer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Sicer504ApplicationJSON struct {
	Error            *Sicer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Sicer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type SicerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Sicer400ApplicationJSONObject *Sicer400ApplicationJSON
	Sicer401ApplicationJSONObject *Sicer401ApplicationJSON
	Sicer404ApplicationJSONObject *Sicer404ApplicationJSON
	Sicer500ApplicationJSONObject *Sicer500ApplicationJSON
	Sicer502ApplicationJSONObject *Sicer502ApplicationJSON
	Sicer503ApplicationJSONObject *Sicer503ApplicationJSON
	Sicer504ApplicationJSONObject *Sicer504ApplicationJSON
}

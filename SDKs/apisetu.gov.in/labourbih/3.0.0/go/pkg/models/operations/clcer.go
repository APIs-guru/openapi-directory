package operations

import (
	"openapi/pkg/models/shared"
)

type ClcerRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type ClcerRequestBodyFormatEnum string

const (
	ClcerRequestBodyFormatEnumPdf ClcerRequestBodyFormatEnum = "pdf"
)

type ClcerRequestBody struct {
	CertificateParameters *ClcerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                ClcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type ClcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type ClcerRequest struct {
	Request  *ClcerRequestBody `request:"mediaType=application/json"`
	Security ClcerSecurity
}

type Clcer400ApplicationJSONErrorEnum string

const (
	Clcer400ApplicationJSONErrorEnumMissingParameter Clcer400ApplicationJSONErrorEnum = "missing_parameter"
	Clcer400ApplicationJSONErrorEnumInvalidParameter Clcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Clcer400ApplicationJSONErrorEnumInvalidFormat    Clcer400ApplicationJSONErrorEnum = "invalid_format"
	Clcer400ApplicationJSONErrorEnumInvalidTxnid     Clcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Clcer400ApplicationJSONErrorEnumInvalidConsentid Clcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Clcer400ApplicationJSONErrorDescriptionEnum string

const (
	Clcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Clcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Clcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Clcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Clcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Clcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Clcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Clcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Clcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Clcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Clcer400ApplicationJSON struct {
	Error            *Clcer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Clcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Clcer401ApplicationJSONErrorEnum string

const (
	Clcer401ApplicationJSONErrorEnumInvalidAuthentication Clcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Clcer401ApplicationJSONErrorEnumInvalidAuthorization  Clcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Clcer401ApplicationJSONErrorDescriptionEnum string

const (
	Clcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Clcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Clcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Clcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Clcer401ApplicationJSON struct {
	Error            *Clcer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Clcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Clcer404ApplicationJSONErrorEnum string

const (
	Clcer404ApplicationJSONErrorEnumRecordNotFound Clcer404ApplicationJSONErrorEnum = "record_not_found"
	Clcer404ApplicationJSONErrorEnumURLNotFound    Clcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Clcer404ApplicationJSONErrorDescriptionEnum string

const (
	Clcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Clcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Clcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Clcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Clcer404ApplicationJSON struct {
	Error            *Clcer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Clcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Clcer500ApplicationJSONErrorEnum string

const (
	Clcer500ApplicationJSONErrorEnumInternalServerError Clcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Clcer500ApplicationJSONErrorDescriptionEnum string

const (
	Clcer500ApplicationJSONErrorDescriptionEnumInternalServerError Clcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Clcer500ApplicationJSON struct {
	Error            *Clcer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Clcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Clcer502ApplicationJSONErrorEnum string

const (
	Clcer502ApplicationJSONErrorEnumBadGatewy Clcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Clcer502ApplicationJSONErrorDescriptionEnum string

const (
	Clcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Clcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Clcer502ApplicationJSON struct {
	Error            *Clcer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Clcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Clcer503ApplicationJSONErrorEnum string

const (
	Clcer503ApplicationJSONErrorEnumServiceUnavailable Clcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Clcer503ApplicationJSONErrorDescriptionEnum string

const (
	Clcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Clcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Clcer503ApplicationJSON struct {
	Error            *Clcer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Clcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Clcer504ApplicationJSONErrorEnum string

const (
	Clcer504ApplicationJSONErrorEnumGatewayTimeout Clcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Clcer504ApplicationJSONErrorDescriptionEnum string

const (
	Clcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Clcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Clcer504ApplicationJSON struct {
	Error            *Clcer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Clcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type ClcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Clcer400ApplicationJSONObject *Clcer400ApplicationJSON
	Clcer401ApplicationJSONObject *Clcer401ApplicationJSON
	Clcer404ApplicationJSONObject *Clcer404ApplicationJSON
	Clcer500ApplicationJSONObject *Clcer500ApplicationJSON
	Clcer502ApplicationJSONObject *Clcer502ApplicationJSON
	Clcer503ApplicationJSONObject *Clcer503ApplicationJSON
	Clcer504ApplicationJSONObject *Clcer504ApplicationJSON
}

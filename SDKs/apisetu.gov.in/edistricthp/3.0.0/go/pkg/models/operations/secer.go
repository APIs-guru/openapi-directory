package operations

import (
	"openapi/pkg/models/shared"
)

type SecerRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type SecerRequestBodyFormatEnum string

const (
	SecerRequestBodyFormatEnumPdf SecerRequestBodyFormatEnum = "pdf"
)

type SecerRequestBody struct {
	CertificateParameters *SecerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                SecerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type SecerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type SecerRequest struct {
	Request  *SecerRequestBody `request:"mediaType=application/json"`
	Security SecerSecurity
}

type Secer400ApplicationJSONErrorEnum string

const (
	Secer400ApplicationJSONErrorEnumMissingParameter Secer400ApplicationJSONErrorEnum = "missing_parameter"
	Secer400ApplicationJSONErrorEnumInvalidParameter Secer400ApplicationJSONErrorEnum = "invalid_parameter"
	Secer400ApplicationJSONErrorEnumInvalidFormat    Secer400ApplicationJSONErrorEnum = "invalid_format"
	Secer400ApplicationJSONErrorEnumInvalidTxnid     Secer400ApplicationJSONErrorEnum = "invalid_txnid"
	Secer400ApplicationJSONErrorEnumInvalidConsentid Secer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Secer400ApplicationJSONErrorDescriptionEnum string

const (
	Secer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Secer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Secer400ApplicationJSONErrorDescriptionEnumBadRequest                              Secer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Secer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Secer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Secer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Secer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Secer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Secer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Secer400ApplicationJSON struct {
	Error            *Secer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Secer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Secer401ApplicationJSONErrorEnum string

const (
	Secer401ApplicationJSONErrorEnumInvalidAuthentication Secer401ApplicationJSONErrorEnum = "invalid_authentication"
	Secer401ApplicationJSONErrorEnumInvalidAuthorization  Secer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Secer401ApplicationJSONErrorDescriptionEnum string

const (
	Secer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Secer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Secer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Secer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Secer401ApplicationJSON struct {
	Error            *Secer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Secer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Secer404ApplicationJSONErrorEnum string

const (
	Secer404ApplicationJSONErrorEnumRecordNotFound Secer404ApplicationJSONErrorEnum = "record_not_found"
	Secer404ApplicationJSONErrorEnumURLNotFound    Secer404ApplicationJSONErrorEnum = "url_not_found"
)

type Secer404ApplicationJSONErrorDescriptionEnum string

const (
	Secer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Secer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Secer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Secer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Secer404ApplicationJSON struct {
	Error            *Secer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Secer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Secer500ApplicationJSONErrorEnum string

const (
	Secer500ApplicationJSONErrorEnumInternalServerError Secer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Secer500ApplicationJSONErrorDescriptionEnum string

const (
	Secer500ApplicationJSONErrorDescriptionEnumInternalServerError Secer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Secer500ApplicationJSON struct {
	Error            *Secer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Secer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Secer502ApplicationJSONErrorEnum string

const (
	Secer502ApplicationJSONErrorEnumBadGatewy Secer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Secer502ApplicationJSONErrorDescriptionEnum string

const (
	Secer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Secer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Secer502ApplicationJSON struct {
	Error            *Secer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Secer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Secer503ApplicationJSONErrorEnum string

const (
	Secer503ApplicationJSONErrorEnumServiceUnavailable Secer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Secer503ApplicationJSONErrorDescriptionEnum string

const (
	Secer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Secer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Secer503ApplicationJSON struct {
	Error            *Secer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Secer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Secer504ApplicationJSONErrorEnum string

const (
	Secer504ApplicationJSONErrorEnumGatewayTimeout Secer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Secer504ApplicationJSONErrorDescriptionEnum string

const (
	Secer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Secer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Secer504ApplicationJSON struct {
	Error            *Secer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Secer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type SecerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Secer400ApplicationJSONObject *Secer400ApplicationJSON
	Secer401ApplicationJSONObject *Secer401ApplicationJSON
	Secer404ApplicationJSONObject *Secer404ApplicationJSON
	Secer500ApplicationJSONObject *Secer500ApplicationJSON
	Secer502ApplicationJSONObject *Secer502ApplicationJSON
	Secer503ApplicationJSONObject *Secer503ApplicationJSON
	Secer504ApplicationJSONObject *Secer504ApplicationJSON
}

package operations

import (
	"openapi/pkg/models/shared"
)

type LlcerRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
	Udf2 string `json:"UDF2"`
	Udf3 string `json:"UDF3"`
}

type LlcerRequestBodyFormatEnum string

const (
	LlcerRequestBodyFormatEnumPdf LlcerRequestBodyFormatEnum = "pdf"
)

type LlcerRequestBody struct {
	CertificateParameters *LlcerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                LlcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type LlcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type LlcerRequest struct {
	Request  *LlcerRequestBody `request:"mediaType=application/json"`
	Security LlcerSecurity
}

type Llcer400ApplicationJSONErrorEnum string

const (
	Llcer400ApplicationJSONErrorEnumMissingParameter Llcer400ApplicationJSONErrorEnum = "missing_parameter"
	Llcer400ApplicationJSONErrorEnumInvalidParameter Llcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Llcer400ApplicationJSONErrorEnumInvalidFormat    Llcer400ApplicationJSONErrorEnum = "invalid_format"
	Llcer400ApplicationJSONErrorEnumInvalidTxnid     Llcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Llcer400ApplicationJSONErrorEnumInvalidConsentid Llcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Llcer400ApplicationJSONErrorDescriptionEnum string

const (
	Llcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Llcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Llcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Llcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Llcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Llcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Llcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Llcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Llcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Llcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Llcer400ApplicationJSON struct {
	Error            *Llcer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Llcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Llcer401ApplicationJSONErrorEnum string

const (
	Llcer401ApplicationJSONErrorEnumInvalidAuthentication Llcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Llcer401ApplicationJSONErrorEnumInvalidAuthorization  Llcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Llcer401ApplicationJSONErrorDescriptionEnum string

const (
	Llcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Llcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Llcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Llcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Llcer401ApplicationJSON struct {
	Error            *Llcer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Llcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Llcer404ApplicationJSONErrorEnum string

const (
	Llcer404ApplicationJSONErrorEnumRecordNotFound Llcer404ApplicationJSONErrorEnum = "record_not_found"
	Llcer404ApplicationJSONErrorEnumURLNotFound    Llcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Llcer404ApplicationJSONErrorDescriptionEnum string

const (
	Llcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Llcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Llcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Llcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Llcer404ApplicationJSON struct {
	Error            *Llcer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Llcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Llcer500ApplicationJSONErrorEnum string

const (
	Llcer500ApplicationJSONErrorEnumInternalServerError Llcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Llcer500ApplicationJSONErrorDescriptionEnum string

const (
	Llcer500ApplicationJSONErrorDescriptionEnumInternalServerError Llcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Llcer500ApplicationJSON struct {
	Error            *Llcer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Llcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Llcer502ApplicationJSONErrorEnum string

const (
	Llcer502ApplicationJSONErrorEnumBadGatewy Llcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Llcer502ApplicationJSONErrorDescriptionEnum string

const (
	Llcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Llcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Llcer502ApplicationJSON struct {
	Error            *Llcer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Llcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Llcer503ApplicationJSONErrorEnum string

const (
	Llcer503ApplicationJSONErrorEnumServiceUnavailable Llcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Llcer503ApplicationJSONErrorDescriptionEnum string

const (
	Llcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Llcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Llcer503ApplicationJSON struct {
	Error            *Llcer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Llcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Llcer504ApplicationJSONErrorEnum string

const (
	Llcer504ApplicationJSONErrorEnumGatewayTimeout Llcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Llcer504ApplicationJSONErrorDescriptionEnum string

const (
	Llcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Llcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Llcer504ApplicationJSON struct {
	Error            *Llcer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Llcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type LlcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Llcer400ApplicationJSONObject *Llcer400ApplicationJSON
	Llcer401ApplicationJSONObject *Llcer401ApplicationJSON
	Llcer404ApplicationJSONObject *Llcer404ApplicationJSON
	Llcer500ApplicationJSONObject *Llcer500ApplicationJSON
	Llcer502ApplicationJSONObject *Llcer502ApplicationJSON
	Llcer503ApplicationJSONObject *Llcer503ApplicationJSON
	Llcer504ApplicationJSONObject *Llcer504ApplicationJSON
}

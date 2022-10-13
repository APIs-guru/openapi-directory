package operations

import (
	"openapi/pkg/models/shared"
)

type CecerRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type CecerRequestBodyFormatEnum string

const (
	CecerRequestBodyFormatEnumPdf CecerRequestBodyFormatEnum = "pdf"
)

type CecerRequestBody struct {
	CertificateParameters *CecerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                CecerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type CecerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type CecerRequest struct {
	Request  *CecerRequestBody `request:"mediaType=application/json"`
	Security CecerSecurity
}

type Cecer400ApplicationJSONErrorEnum string

const (
	Cecer400ApplicationJSONErrorEnumMissingParameter Cecer400ApplicationJSONErrorEnum = "missing_parameter"
	Cecer400ApplicationJSONErrorEnumInvalidParameter Cecer400ApplicationJSONErrorEnum = "invalid_parameter"
	Cecer400ApplicationJSONErrorEnumInvalidFormat    Cecer400ApplicationJSONErrorEnum = "invalid_format"
	Cecer400ApplicationJSONErrorEnumInvalidTxnid     Cecer400ApplicationJSONErrorEnum = "invalid_txnid"
	Cecer400ApplicationJSONErrorEnumInvalidConsentid Cecer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Cecer400ApplicationJSONErrorDescriptionEnum string

const (
	Cecer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Cecer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Cecer400ApplicationJSONErrorDescriptionEnumBadRequest                              Cecer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Cecer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Cecer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Cecer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Cecer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Cecer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Cecer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Cecer400ApplicationJSON struct {
	Error            *Cecer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cecer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cecer401ApplicationJSONErrorEnum string

const (
	Cecer401ApplicationJSONErrorEnumInvalidAuthentication Cecer401ApplicationJSONErrorEnum = "invalid_authentication"
	Cecer401ApplicationJSONErrorEnumInvalidAuthorization  Cecer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Cecer401ApplicationJSONErrorDescriptionEnum string

const (
	Cecer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Cecer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Cecer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Cecer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Cecer401ApplicationJSON struct {
	Error            *Cecer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cecer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cecer404ApplicationJSONErrorEnum string

const (
	Cecer404ApplicationJSONErrorEnumRecordNotFound Cecer404ApplicationJSONErrorEnum = "record_not_found"
	Cecer404ApplicationJSONErrorEnumURLNotFound    Cecer404ApplicationJSONErrorEnum = "url_not_found"
)

type Cecer404ApplicationJSONErrorDescriptionEnum string

const (
	Cecer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Cecer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Cecer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Cecer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Cecer404ApplicationJSON struct {
	Error            *Cecer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cecer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cecer500ApplicationJSONErrorEnum string

const (
	Cecer500ApplicationJSONErrorEnumInternalServerError Cecer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Cecer500ApplicationJSONErrorDescriptionEnum string

const (
	Cecer500ApplicationJSONErrorDescriptionEnumInternalServerError Cecer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Cecer500ApplicationJSON struct {
	Error            *Cecer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cecer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cecer502ApplicationJSONErrorEnum string

const (
	Cecer502ApplicationJSONErrorEnumBadGatewy Cecer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Cecer502ApplicationJSONErrorDescriptionEnum string

const (
	Cecer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Cecer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Cecer502ApplicationJSON struct {
	Error            *Cecer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cecer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cecer503ApplicationJSONErrorEnum string

const (
	Cecer503ApplicationJSONErrorEnumServiceUnavailable Cecer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Cecer503ApplicationJSONErrorDescriptionEnum string

const (
	Cecer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Cecer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Cecer503ApplicationJSON struct {
	Error            *Cecer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cecer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cecer504ApplicationJSONErrorEnum string

const (
	Cecer504ApplicationJSONErrorEnumGatewayTimeout Cecer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Cecer504ApplicationJSONErrorDescriptionEnum string

const (
	Cecer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Cecer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Cecer504ApplicationJSON struct {
	Error            *Cecer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cecer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type CecerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Cecer400ApplicationJSONObject *Cecer400ApplicationJSON
	Cecer401ApplicationJSONObject *Cecer401ApplicationJSON
	Cecer404ApplicationJSONObject *Cecer404ApplicationJSON
	Cecer500ApplicationJSONObject *Cecer500ApplicationJSON
	Cecer502ApplicationJSONObject *Cecer502ApplicationJSON
	Cecer503ApplicationJSONObject *Cecer503ApplicationJSON
	Cecer504ApplicationJSONObject *Cecer504ApplicationJSON
}

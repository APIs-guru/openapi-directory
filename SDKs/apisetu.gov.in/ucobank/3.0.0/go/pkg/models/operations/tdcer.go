package operations

import (
	"openapi/pkg/models/shared"
)

type TdcerRequestBodyCertificateParameters struct {
	CustID string `json:"CustID"`
	Dob    string `json:"DOB"`
	FinYr  string `json:"finYr"`
}

type TdcerRequestBodyFormatEnum string

const (
	TdcerRequestBodyFormatEnumPdf TdcerRequestBodyFormatEnum = "pdf"
)

type TdcerRequestBody struct {
	CertificateParameters *TdcerRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                TdcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type TdcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type TdcerRequest struct {
	Request  *TdcerRequestBody `request:"mediaType=application/json"`
	Security TdcerSecurity
}

type Tdcer400ApplicationJSONErrorEnum string

const (
	Tdcer400ApplicationJSONErrorEnumMissingParameter Tdcer400ApplicationJSONErrorEnum = "missing_parameter"
	Tdcer400ApplicationJSONErrorEnumInvalidParameter Tdcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Tdcer400ApplicationJSONErrorEnumInvalidFormat    Tdcer400ApplicationJSONErrorEnum = "invalid_format"
	Tdcer400ApplicationJSONErrorEnumInvalidTxnid     Tdcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Tdcer400ApplicationJSONErrorEnumInvalidConsentid Tdcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Tdcer400ApplicationJSONErrorDescriptionEnum string

const (
	Tdcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Tdcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Tdcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Tdcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Tdcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Tdcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Tdcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Tdcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Tdcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Tdcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Tdcer400ApplicationJSON struct {
	Error            *Tdcer400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tdcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tdcer401ApplicationJSONErrorEnum string

const (
	Tdcer401ApplicationJSONErrorEnumInvalidAuthentication Tdcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Tdcer401ApplicationJSONErrorEnumInvalidAuthorization  Tdcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Tdcer401ApplicationJSONErrorDescriptionEnum string

const (
	Tdcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Tdcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Tdcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Tdcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Tdcer401ApplicationJSON struct {
	Error            *Tdcer401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tdcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tdcer404ApplicationJSONErrorEnum string

const (
	Tdcer404ApplicationJSONErrorEnumRecordNotFound Tdcer404ApplicationJSONErrorEnum = "record_not_found"
	Tdcer404ApplicationJSONErrorEnumURLNotFound    Tdcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Tdcer404ApplicationJSONErrorDescriptionEnum string

const (
	Tdcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Tdcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Tdcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Tdcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Tdcer404ApplicationJSON struct {
	Error            *Tdcer404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tdcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tdcer500ApplicationJSONErrorEnum string

const (
	Tdcer500ApplicationJSONErrorEnumInternalServerError Tdcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Tdcer500ApplicationJSONErrorDescriptionEnum string

const (
	Tdcer500ApplicationJSONErrorDescriptionEnumInternalServerError Tdcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Tdcer500ApplicationJSON struct {
	Error            *Tdcer500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tdcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tdcer502ApplicationJSONErrorEnum string

const (
	Tdcer502ApplicationJSONErrorEnumBadGatewy Tdcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Tdcer502ApplicationJSONErrorDescriptionEnum string

const (
	Tdcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Tdcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Tdcer502ApplicationJSON struct {
	Error            *Tdcer502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tdcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tdcer503ApplicationJSONErrorEnum string

const (
	Tdcer503ApplicationJSONErrorEnumServiceUnavailable Tdcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Tdcer503ApplicationJSONErrorDescriptionEnum string

const (
	Tdcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Tdcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Tdcer503ApplicationJSON struct {
	Error            *Tdcer503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tdcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Tdcer504ApplicationJSONErrorEnum string

const (
	Tdcer504ApplicationJSONErrorEnumGatewayTimeout Tdcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Tdcer504ApplicationJSONErrorDescriptionEnum string

const (
	Tdcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Tdcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Tdcer504ApplicationJSON struct {
	Error            *Tdcer504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Tdcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type TdcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Tdcer400ApplicationJSONObject *Tdcer400ApplicationJSON
	Tdcer401ApplicationJSONObject *Tdcer401ApplicationJSON
	Tdcer404ApplicationJSONObject *Tdcer404ApplicationJSON
	Tdcer500ApplicationJSONObject *Tdcer500ApplicationJSON
	Tdcer502ApplicationJSONObject *Tdcer502ApplicationJSON
	Tdcer503ApplicationJSONObject *Tdcer503ApplicationJSON
	Tdcer504ApplicationJSONObject *Tdcer504ApplicationJSON
}

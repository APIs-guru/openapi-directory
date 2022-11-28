package operations

import (
	"openapi/pkg/models/shared"
)

type FfcerRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type FfcerRequestBodyFormatEnum string

const (
	FfcerRequestBodyFormatEnumPdf FfcerRequestBodyFormatEnum = "pdf"
)

type FfcerRequestBody struct {
	CertificateParameters *FfcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                FfcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type FfcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Ffcer400ApplicationJSONErrorEnum string

const (
	Ffcer400ApplicationJSONErrorEnumMissingParameter Ffcer400ApplicationJSONErrorEnum = "missing_parameter"
	Ffcer400ApplicationJSONErrorEnumInvalidParameter Ffcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Ffcer400ApplicationJSONErrorEnumInvalidFormat    Ffcer400ApplicationJSONErrorEnum = "invalid_format"
	Ffcer400ApplicationJSONErrorEnumInvalidTxnid     Ffcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Ffcer400ApplicationJSONErrorEnumInvalidConsentid Ffcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Ffcer400ApplicationJSONErrorDescriptionEnum string

const (
	Ffcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ffcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ffcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Ffcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ffcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ffcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ffcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ffcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ffcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ffcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Ffcer400ApplicationJSON struct {
	Error            *Ffcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ffcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ffcer401ApplicationJSONErrorEnum string

const (
	Ffcer401ApplicationJSONErrorEnumInvalidAuthentication Ffcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Ffcer401ApplicationJSONErrorEnumInvalidAuthorization  Ffcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Ffcer401ApplicationJSONErrorDescriptionEnum string

const (
	Ffcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ffcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ffcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ffcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Ffcer401ApplicationJSON struct {
	Error            *Ffcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ffcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ffcer404ApplicationJSONErrorEnum string

const (
	Ffcer404ApplicationJSONErrorEnumRecordNotFound Ffcer404ApplicationJSONErrorEnum = "record_not_found"
	Ffcer404ApplicationJSONErrorEnumURLNotFound    Ffcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Ffcer404ApplicationJSONErrorDescriptionEnum string

const (
	Ffcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ffcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ffcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ffcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Ffcer404ApplicationJSON struct {
	Error            *Ffcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ffcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ffcer500ApplicationJSONErrorEnum string

const (
	Ffcer500ApplicationJSONErrorEnumInternalServerError Ffcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Ffcer500ApplicationJSONErrorDescriptionEnum string

const (
	Ffcer500ApplicationJSONErrorDescriptionEnumInternalServerError Ffcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Ffcer500ApplicationJSON struct {
	Error            *Ffcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ffcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ffcer502ApplicationJSONErrorEnum string

const (
	Ffcer502ApplicationJSONErrorEnumBadGatewy Ffcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Ffcer502ApplicationJSONErrorDescriptionEnum string

const (
	Ffcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ffcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Ffcer502ApplicationJSON struct {
	Error            *Ffcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ffcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ffcer503ApplicationJSONErrorEnum string

const (
	Ffcer503ApplicationJSONErrorEnumServiceUnavailable Ffcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Ffcer503ApplicationJSONErrorDescriptionEnum string

const (
	Ffcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ffcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Ffcer503ApplicationJSON struct {
	Error            *Ffcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ffcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ffcer504ApplicationJSONErrorEnum string

const (
	Ffcer504ApplicationJSONErrorEnumGatewayTimeout Ffcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Ffcer504ApplicationJSONErrorDescriptionEnum string

const (
	Ffcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ffcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Ffcer504ApplicationJSON struct {
	Error            *Ffcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ffcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type FfcerRequest struct {
	Request  *FfcerRequestBody `request:"mediaType=application/json"`
	Security FfcerSecurity
}

type FfcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Ffcer400ApplicationJSONObject *Ffcer400ApplicationJSON
	Ffcer401ApplicationJSONObject *Ffcer401ApplicationJSON
	Ffcer404ApplicationJSONObject *Ffcer404ApplicationJSON
	Ffcer500ApplicationJSONObject *Ffcer500ApplicationJSON
	Ffcer502ApplicationJSONObject *Ffcer502ApplicationJSON
	Ffcer503ApplicationJSONObject *Ffcer503ApplicationJSON
	Ffcer504ApplicationJSONObject *Ffcer504ApplicationJSON
}

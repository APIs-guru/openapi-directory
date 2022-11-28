package operations

import (
	"openapi/pkg/models/shared"
)

type IgcerRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type IgcerRequestBodyFormatEnum string

const (
	IgcerRequestBodyFormatEnumPdf IgcerRequestBodyFormatEnum = "pdf"
)

type IgcerRequestBody struct {
	CertificateParameters *IgcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                IgcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type IgcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Igcer400ApplicationJSONErrorEnum string

const (
	Igcer400ApplicationJSONErrorEnumMissingParameter Igcer400ApplicationJSONErrorEnum = "missing_parameter"
	Igcer400ApplicationJSONErrorEnumInvalidParameter Igcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Igcer400ApplicationJSONErrorEnumInvalidFormat    Igcer400ApplicationJSONErrorEnum = "invalid_format"
	Igcer400ApplicationJSONErrorEnumInvalidTxnid     Igcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Igcer400ApplicationJSONErrorEnumInvalidConsentid Igcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Igcer400ApplicationJSONErrorDescriptionEnum string

const (
	Igcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Igcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Igcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Igcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Igcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Igcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Igcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Igcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Igcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Igcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Igcer400ApplicationJSON struct {
	Error            *Igcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Igcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Igcer401ApplicationJSONErrorEnum string

const (
	Igcer401ApplicationJSONErrorEnumInvalidAuthentication Igcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Igcer401ApplicationJSONErrorEnumInvalidAuthorization  Igcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Igcer401ApplicationJSONErrorDescriptionEnum string

const (
	Igcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Igcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Igcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Igcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Igcer401ApplicationJSON struct {
	Error            *Igcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Igcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Igcer404ApplicationJSONErrorEnum string

const (
	Igcer404ApplicationJSONErrorEnumRecordNotFound Igcer404ApplicationJSONErrorEnum = "record_not_found"
	Igcer404ApplicationJSONErrorEnumURLNotFound    Igcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Igcer404ApplicationJSONErrorDescriptionEnum string

const (
	Igcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Igcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Igcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Igcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Igcer404ApplicationJSON struct {
	Error            *Igcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Igcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Igcer500ApplicationJSONErrorEnum string

const (
	Igcer500ApplicationJSONErrorEnumInternalServerError Igcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Igcer500ApplicationJSONErrorDescriptionEnum string

const (
	Igcer500ApplicationJSONErrorDescriptionEnumInternalServerError Igcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Igcer500ApplicationJSON struct {
	Error            *Igcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Igcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Igcer502ApplicationJSONErrorEnum string

const (
	Igcer502ApplicationJSONErrorEnumBadGatewy Igcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Igcer502ApplicationJSONErrorDescriptionEnum string

const (
	Igcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Igcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Igcer502ApplicationJSON struct {
	Error            *Igcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Igcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Igcer503ApplicationJSONErrorEnum string

const (
	Igcer503ApplicationJSONErrorEnumServiceUnavailable Igcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Igcer503ApplicationJSONErrorDescriptionEnum string

const (
	Igcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Igcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Igcer503ApplicationJSON struct {
	Error            *Igcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Igcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Igcer504ApplicationJSONErrorEnum string

const (
	Igcer504ApplicationJSONErrorEnumGatewayTimeout Igcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Igcer504ApplicationJSONErrorDescriptionEnum string

const (
	Igcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Igcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Igcer504ApplicationJSON struct {
	Error            *Igcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Igcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type IgcerRequest struct {
	Request  *IgcerRequestBody `request:"mediaType=application/json"`
	Security IgcerSecurity
}

type IgcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Igcer400ApplicationJSONObject *Igcer400ApplicationJSON
	Igcer401ApplicationJSONObject *Igcer401ApplicationJSON
	Igcer404ApplicationJSONObject *Igcer404ApplicationJSON
	Igcer500ApplicationJSONObject *Igcer500ApplicationJSON
	Igcer502ApplicationJSONObject *Igcer502ApplicationJSON
	Igcer503ApplicationJSONObject *Igcer503ApplicationJSON
	Igcer504ApplicationJSONObject *Igcer504ApplicationJSON
}

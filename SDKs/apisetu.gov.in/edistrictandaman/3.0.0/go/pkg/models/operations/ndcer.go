package operations

import (
	"openapi/pkg/models/shared"
)

type NdcerRequestBodyCertificateParameters struct {
	CertificateNumber string `json:"CertificateNumber"`
}

type NdcerRequestBodyFormatEnum string

const (
	NdcerRequestBodyFormatEnumPdf NdcerRequestBodyFormatEnum = "pdf"
)

type NdcerRequestBody struct {
	CertificateParameters *NdcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                NdcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type NdcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Ndcer400ApplicationJSONErrorEnum string

const (
	Ndcer400ApplicationJSONErrorEnumMissingParameter Ndcer400ApplicationJSONErrorEnum = "missing_parameter"
	Ndcer400ApplicationJSONErrorEnumInvalidParameter Ndcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Ndcer400ApplicationJSONErrorEnumInvalidFormat    Ndcer400ApplicationJSONErrorEnum = "invalid_format"
	Ndcer400ApplicationJSONErrorEnumInvalidTxnid     Ndcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Ndcer400ApplicationJSONErrorEnumInvalidConsentid Ndcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Ndcer400ApplicationJSONErrorDescriptionEnum string

const (
	Ndcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ndcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ndcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Ndcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ndcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ndcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ndcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ndcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ndcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ndcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Ndcer400ApplicationJSON struct {
	Error            *Ndcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ndcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ndcer401ApplicationJSONErrorEnum string

const (
	Ndcer401ApplicationJSONErrorEnumInvalidAuthentication Ndcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Ndcer401ApplicationJSONErrorEnumInvalidAuthorization  Ndcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Ndcer401ApplicationJSONErrorDescriptionEnum string

const (
	Ndcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ndcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ndcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ndcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Ndcer401ApplicationJSON struct {
	Error            *Ndcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ndcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ndcer404ApplicationJSONErrorEnum string

const (
	Ndcer404ApplicationJSONErrorEnumRecordNotFound Ndcer404ApplicationJSONErrorEnum = "record_not_found"
	Ndcer404ApplicationJSONErrorEnumURLNotFound    Ndcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Ndcer404ApplicationJSONErrorDescriptionEnum string

const (
	Ndcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ndcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ndcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ndcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Ndcer404ApplicationJSON struct {
	Error            *Ndcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ndcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ndcer500ApplicationJSONErrorEnum string

const (
	Ndcer500ApplicationJSONErrorEnumInternalServerError Ndcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Ndcer500ApplicationJSONErrorDescriptionEnum string

const (
	Ndcer500ApplicationJSONErrorDescriptionEnumInternalServerError Ndcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Ndcer500ApplicationJSON struct {
	Error            *Ndcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ndcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ndcer502ApplicationJSONErrorEnum string

const (
	Ndcer502ApplicationJSONErrorEnumBadGatewy Ndcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Ndcer502ApplicationJSONErrorDescriptionEnum string

const (
	Ndcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ndcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Ndcer502ApplicationJSON struct {
	Error            *Ndcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ndcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ndcer503ApplicationJSONErrorEnum string

const (
	Ndcer503ApplicationJSONErrorEnumServiceUnavailable Ndcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Ndcer503ApplicationJSONErrorDescriptionEnum string

const (
	Ndcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ndcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Ndcer503ApplicationJSON struct {
	Error            *Ndcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ndcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Ndcer504ApplicationJSONErrorEnum string

const (
	Ndcer504ApplicationJSONErrorEnumGatewayTimeout Ndcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Ndcer504ApplicationJSONErrorDescriptionEnum string

const (
	Ndcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ndcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Ndcer504ApplicationJSON struct {
	Error            *Ndcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Ndcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type NdcerRequest struct {
	Request  *NdcerRequestBody `request:"mediaType=application/json"`
	Security NdcerSecurity
}

type NdcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Ndcer400ApplicationJSONObject *Ndcer400ApplicationJSON
	Ndcer401ApplicationJSONObject *Ndcer401ApplicationJSON
	Ndcer404ApplicationJSONObject *Ndcer404ApplicationJSON
	Ndcer500ApplicationJSONObject *Ndcer500ApplicationJSON
	Ndcer502ApplicationJSONObject *Ndcer502ApplicationJSON
	Ndcer503ApplicationJSONObject *Ndcer503ApplicationJSON
	Ndcer504ApplicationJSONObject *Ndcer504ApplicationJSON
}

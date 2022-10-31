package operations

import (
	"openapi/pkg/models/shared"
)

type NncerRequestBodyCertificateParameters struct {
	RefNo string `json:"RefNo"`
}

type NncerRequestBodyFormatEnum string

const (
	NncerRequestBodyFormatEnumPdf NncerRequestBodyFormatEnum = "pdf"
)

type NncerRequestBody struct {
	CertificateParameters *NncerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                NncerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type NncerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type NncerRequest struct {
	Request  *NncerRequestBody `request:"mediaType=application/json"`
	Security NncerSecurity
}

type Nncer400ApplicationJSONErrorEnum string

const (
	Nncer400ApplicationJSONErrorEnumMissingParameter Nncer400ApplicationJSONErrorEnum = "missing_parameter"
	Nncer400ApplicationJSONErrorEnumInvalidParameter Nncer400ApplicationJSONErrorEnum = "invalid_parameter"
	Nncer400ApplicationJSONErrorEnumInvalidFormat    Nncer400ApplicationJSONErrorEnum = "invalid_format"
	Nncer400ApplicationJSONErrorEnumInvalidTxnid     Nncer400ApplicationJSONErrorEnum = "invalid_txnid"
	Nncer400ApplicationJSONErrorEnumInvalidConsentid Nncer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Nncer400ApplicationJSONErrorDescriptionEnum string

const (
	Nncer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Nncer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Nncer400ApplicationJSONErrorDescriptionEnumBadRequest                              Nncer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Nncer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Nncer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Nncer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Nncer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Nncer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Nncer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Nncer400ApplicationJSON struct {
	Error            *Nncer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nncer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nncer401ApplicationJSONErrorEnum string

const (
	Nncer401ApplicationJSONErrorEnumInvalidAuthentication Nncer401ApplicationJSONErrorEnum = "invalid_authentication"
	Nncer401ApplicationJSONErrorEnumInvalidAuthorization  Nncer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Nncer401ApplicationJSONErrorDescriptionEnum string

const (
	Nncer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Nncer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Nncer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Nncer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Nncer401ApplicationJSON struct {
	Error            *Nncer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nncer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nncer404ApplicationJSONErrorEnum string

const (
	Nncer404ApplicationJSONErrorEnumRecordNotFound Nncer404ApplicationJSONErrorEnum = "record_not_found"
	Nncer404ApplicationJSONErrorEnumURLNotFound    Nncer404ApplicationJSONErrorEnum = "url_not_found"
)

type Nncer404ApplicationJSONErrorDescriptionEnum string

const (
	Nncer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Nncer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Nncer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Nncer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Nncer404ApplicationJSON struct {
	Error            *Nncer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nncer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nncer500ApplicationJSONErrorEnum string

const (
	Nncer500ApplicationJSONErrorEnumInternalServerError Nncer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Nncer500ApplicationJSONErrorDescriptionEnum string

const (
	Nncer500ApplicationJSONErrorDescriptionEnumInternalServerError Nncer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Nncer500ApplicationJSON struct {
	Error            *Nncer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nncer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nncer502ApplicationJSONErrorEnum string

const (
	Nncer502ApplicationJSONErrorEnumBadGatewy Nncer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Nncer502ApplicationJSONErrorDescriptionEnum string

const (
	Nncer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Nncer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Nncer502ApplicationJSON struct {
	Error            *Nncer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nncer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nncer503ApplicationJSONErrorEnum string

const (
	Nncer503ApplicationJSONErrorEnumServiceUnavailable Nncer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Nncer503ApplicationJSONErrorDescriptionEnum string

const (
	Nncer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Nncer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Nncer503ApplicationJSON struct {
	Error            *Nncer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nncer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nncer504ApplicationJSONErrorEnum string

const (
	Nncer504ApplicationJSONErrorEnumGatewayTimeout Nncer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Nncer504ApplicationJSONErrorDescriptionEnum string

const (
	Nncer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Nncer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Nncer504ApplicationJSON struct {
	Error            *Nncer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nncer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type NncerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Nncer400ApplicationJSONObject *Nncer400ApplicationJSON
	Nncer401ApplicationJSONObject *Nncer401ApplicationJSON
	Nncer404ApplicationJSONObject *Nncer404ApplicationJSON
	Nncer500ApplicationJSONObject *Nncer500ApplicationJSON
	Nncer502ApplicationJSONObject *Nncer502ApplicationJSON
	Nncer503ApplicationJSONObject *Nncer503ApplicationJSON
	Nncer504ApplicationJSONObject *Nncer504ApplicationJSON
}

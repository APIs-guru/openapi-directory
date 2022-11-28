package operations

import (
	"openapi/pkg/models/shared"
)

type NbcerRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type NbcerRequestBodyFormatEnum string

const (
	NbcerRequestBodyFormatEnumPdf NbcerRequestBodyFormatEnum = "pdf"
)

type NbcerRequestBody struct {
	CertificateParameters *NbcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                NbcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type NbcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Nbcer400ApplicationJSONErrorEnum string

const (
	Nbcer400ApplicationJSONErrorEnumMissingParameter Nbcer400ApplicationJSONErrorEnum = "missing_parameter"
	Nbcer400ApplicationJSONErrorEnumInvalidParameter Nbcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Nbcer400ApplicationJSONErrorEnumInvalidFormat    Nbcer400ApplicationJSONErrorEnum = "invalid_format"
	Nbcer400ApplicationJSONErrorEnumInvalidTxnid     Nbcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Nbcer400ApplicationJSONErrorEnumInvalidConsentid Nbcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Nbcer400ApplicationJSONErrorDescriptionEnum string

const (
	Nbcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Nbcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Nbcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Nbcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Nbcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Nbcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Nbcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Nbcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Nbcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Nbcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Nbcer400ApplicationJSON struct {
	Error            *Nbcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nbcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nbcer401ApplicationJSONErrorEnum string

const (
	Nbcer401ApplicationJSONErrorEnumInvalidAuthentication Nbcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Nbcer401ApplicationJSONErrorEnumInvalidAuthorization  Nbcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Nbcer401ApplicationJSONErrorDescriptionEnum string

const (
	Nbcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Nbcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Nbcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Nbcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Nbcer401ApplicationJSON struct {
	Error            *Nbcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nbcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nbcer404ApplicationJSONErrorEnum string

const (
	Nbcer404ApplicationJSONErrorEnumRecordNotFound Nbcer404ApplicationJSONErrorEnum = "record_not_found"
	Nbcer404ApplicationJSONErrorEnumURLNotFound    Nbcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Nbcer404ApplicationJSONErrorDescriptionEnum string

const (
	Nbcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Nbcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Nbcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Nbcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Nbcer404ApplicationJSON struct {
	Error            *Nbcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nbcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nbcer500ApplicationJSONErrorEnum string

const (
	Nbcer500ApplicationJSONErrorEnumInternalServerError Nbcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Nbcer500ApplicationJSONErrorDescriptionEnum string

const (
	Nbcer500ApplicationJSONErrorDescriptionEnumInternalServerError Nbcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Nbcer500ApplicationJSON struct {
	Error            *Nbcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nbcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nbcer502ApplicationJSONErrorEnum string

const (
	Nbcer502ApplicationJSONErrorEnumBadGatewy Nbcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Nbcer502ApplicationJSONErrorDescriptionEnum string

const (
	Nbcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Nbcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Nbcer502ApplicationJSON struct {
	Error            *Nbcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nbcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nbcer503ApplicationJSONErrorEnum string

const (
	Nbcer503ApplicationJSONErrorEnumServiceUnavailable Nbcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Nbcer503ApplicationJSONErrorDescriptionEnum string

const (
	Nbcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Nbcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Nbcer503ApplicationJSON struct {
	Error            *Nbcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nbcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Nbcer504ApplicationJSONErrorEnum string

const (
	Nbcer504ApplicationJSONErrorEnumGatewayTimeout Nbcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Nbcer504ApplicationJSONErrorDescriptionEnum string

const (
	Nbcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Nbcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Nbcer504ApplicationJSON struct {
	Error            *Nbcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Nbcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type NbcerRequest struct {
	Request  *NbcerRequestBody `request:"mediaType=application/json"`
	Security NbcerSecurity
}

type NbcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Nbcer400ApplicationJSONObject *Nbcer400ApplicationJSON
	Nbcer401ApplicationJSONObject *Nbcer401ApplicationJSON
	Nbcer404ApplicationJSONObject *Nbcer404ApplicationJSON
	Nbcer500ApplicationJSONObject *Nbcer500ApplicationJSON
	Nbcer502ApplicationJSONObject *Nbcer502ApplicationJSON
	Nbcer503ApplicationJSONObject *Nbcer503ApplicationJSON
	Nbcer504ApplicationJSONObject *Nbcer504ApplicationJSON
}

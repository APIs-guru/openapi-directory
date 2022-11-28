package operations

import (
	"openapi/pkg/models/shared"
)

type EtcerRequestBodyCertificateParameters struct {
	UniqueCode string `json:"_unique_code"`
}

type EtcerRequestBodyFormatEnum string

const (
	EtcerRequestBodyFormatEnumPdf EtcerRequestBodyFormatEnum = "pdf"
)

type EtcerRequestBody struct {
	CertificateParameters *EtcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                EtcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type EtcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Etcer400ApplicationJSONErrorEnum string

const (
	Etcer400ApplicationJSONErrorEnumMissingParameter Etcer400ApplicationJSONErrorEnum = "missing_parameter"
	Etcer400ApplicationJSONErrorEnumInvalidParameter Etcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Etcer400ApplicationJSONErrorEnumInvalidFormat    Etcer400ApplicationJSONErrorEnum = "invalid_format"
	Etcer400ApplicationJSONErrorEnumInvalidTxnid     Etcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Etcer400ApplicationJSONErrorEnumInvalidConsentid Etcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Etcer400ApplicationJSONErrorDescriptionEnum string

const (
	Etcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Etcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Etcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Etcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Etcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Etcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Etcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Etcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Etcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Etcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Etcer400ApplicationJSON struct {
	Error            *Etcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Etcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Etcer401ApplicationJSONErrorEnum string

const (
	Etcer401ApplicationJSONErrorEnumInvalidAuthentication Etcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Etcer401ApplicationJSONErrorEnumInvalidAuthorization  Etcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Etcer401ApplicationJSONErrorDescriptionEnum string

const (
	Etcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Etcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Etcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Etcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Etcer401ApplicationJSON struct {
	Error            *Etcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Etcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Etcer404ApplicationJSONErrorEnum string

const (
	Etcer404ApplicationJSONErrorEnumRecordNotFound Etcer404ApplicationJSONErrorEnum = "record_not_found"
	Etcer404ApplicationJSONErrorEnumURLNotFound    Etcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Etcer404ApplicationJSONErrorDescriptionEnum string

const (
	Etcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Etcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Etcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Etcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Etcer404ApplicationJSON struct {
	Error            *Etcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Etcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Etcer500ApplicationJSONErrorEnum string

const (
	Etcer500ApplicationJSONErrorEnumInternalServerError Etcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Etcer500ApplicationJSONErrorDescriptionEnum string

const (
	Etcer500ApplicationJSONErrorDescriptionEnumInternalServerError Etcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Etcer500ApplicationJSON struct {
	Error            *Etcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Etcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Etcer502ApplicationJSONErrorEnum string

const (
	Etcer502ApplicationJSONErrorEnumBadGatewy Etcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Etcer502ApplicationJSONErrorDescriptionEnum string

const (
	Etcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Etcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Etcer502ApplicationJSON struct {
	Error            *Etcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Etcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Etcer503ApplicationJSONErrorEnum string

const (
	Etcer503ApplicationJSONErrorEnumServiceUnavailable Etcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Etcer503ApplicationJSONErrorDescriptionEnum string

const (
	Etcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Etcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Etcer503ApplicationJSON struct {
	Error            *Etcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Etcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Etcer504ApplicationJSONErrorEnum string

const (
	Etcer504ApplicationJSONErrorEnumGatewayTimeout Etcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Etcer504ApplicationJSONErrorDescriptionEnum string

const (
	Etcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Etcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Etcer504ApplicationJSON struct {
	Error            *Etcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Etcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type EtcerRequest struct {
	Request  *EtcerRequestBody `request:"mediaType=application/json"`
	Security EtcerSecurity
}

type EtcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Etcer400ApplicationJSONObject *Etcer400ApplicationJSON
	Etcer401ApplicationJSONObject *Etcer401ApplicationJSON
	Etcer404ApplicationJSONObject *Etcer404ApplicationJSON
	Etcer500ApplicationJSONObject *Etcer500ApplicationJSON
	Etcer502ApplicationJSONObject *Etcer502ApplicationJSON
	Etcer503ApplicationJSONObject *Etcer503ApplicationJSON
	Etcer504ApplicationJSONObject *Etcer504ApplicationJSON
}

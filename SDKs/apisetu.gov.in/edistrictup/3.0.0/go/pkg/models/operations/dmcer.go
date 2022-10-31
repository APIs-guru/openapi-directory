package operations

import (
	"openapi/pkg/models/shared"
)

type DmcerRequestBodyCertificateParameters struct {
	ApplicationNo string `json:"ApplicationNo"`
	CertificateID string `json:"CertificateID"`
}

type DmcerRequestBodyFormatEnum string

const (
	DmcerRequestBodyFormatEnumPdf DmcerRequestBodyFormatEnum = "pdf"
)

type DmcerRequestBody struct {
	CertificateParameters *DmcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                DmcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type DmcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type DmcerRequest struct {
	Request  *DmcerRequestBody `request:"mediaType=application/json"`
	Security DmcerSecurity
}

type Dmcer400ApplicationJSONErrorEnum string

const (
	Dmcer400ApplicationJSONErrorEnumMissingParameter Dmcer400ApplicationJSONErrorEnum = "missing_parameter"
	Dmcer400ApplicationJSONErrorEnumInvalidParameter Dmcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Dmcer400ApplicationJSONErrorEnumInvalidFormat    Dmcer400ApplicationJSONErrorEnum = "invalid_format"
	Dmcer400ApplicationJSONErrorEnumInvalidTxnid     Dmcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Dmcer400ApplicationJSONErrorEnumInvalidConsentid Dmcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Dmcer400ApplicationJSONErrorDescriptionEnum string

const (
	Dmcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Dmcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Dmcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Dmcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Dmcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Dmcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Dmcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Dmcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Dmcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Dmcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Dmcer400ApplicationJSON struct {
	Error            *Dmcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dmcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dmcer401ApplicationJSONErrorEnum string

const (
	Dmcer401ApplicationJSONErrorEnumInvalidAuthentication Dmcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Dmcer401ApplicationJSONErrorEnumInvalidAuthorization  Dmcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Dmcer401ApplicationJSONErrorDescriptionEnum string

const (
	Dmcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Dmcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Dmcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Dmcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Dmcer401ApplicationJSON struct {
	Error            *Dmcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dmcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dmcer404ApplicationJSONErrorEnum string

const (
	Dmcer404ApplicationJSONErrorEnumRecordNotFound Dmcer404ApplicationJSONErrorEnum = "record_not_found"
	Dmcer404ApplicationJSONErrorEnumURLNotFound    Dmcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Dmcer404ApplicationJSONErrorDescriptionEnum string

const (
	Dmcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Dmcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Dmcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Dmcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Dmcer404ApplicationJSON struct {
	Error            *Dmcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dmcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dmcer500ApplicationJSONErrorEnum string

const (
	Dmcer500ApplicationJSONErrorEnumInternalServerError Dmcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Dmcer500ApplicationJSONErrorDescriptionEnum string

const (
	Dmcer500ApplicationJSONErrorDescriptionEnumInternalServerError Dmcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Dmcer500ApplicationJSON struct {
	Error            *Dmcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dmcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dmcer502ApplicationJSONErrorEnum string

const (
	Dmcer502ApplicationJSONErrorEnumBadGatewy Dmcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Dmcer502ApplicationJSONErrorDescriptionEnum string

const (
	Dmcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Dmcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Dmcer502ApplicationJSON struct {
	Error            *Dmcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dmcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dmcer503ApplicationJSONErrorEnum string

const (
	Dmcer503ApplicationJSONErrorEnumServiceUnavailable Dmcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Dmcer503ApplicationJSONErrorDescriptionEnum string

const (
	Dmcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Dmcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Dmcer503ApplicationJSON struct {
	Error            *Dmcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dmcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dmcer504ApplicationJSONErrorEnum string

const (
	Dmcer504ApplicationJSONErrorEnumGatewayTimeout Dmcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Dmcer504ApplicationJSONErrorDescriptionEnum string

const (
	Dmcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Dmcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Dmcer504ApplicationJSON struct {
	Error            *Dmcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dmcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type DmcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Dmcer400ApplicationJSONObject *Dmcer400ApplicationJSON
	Dmcer401ApplicationJSONObject *Dmcer401ApplicationJSON
	Dmcer404ApplicationJSONObject *Dmcer404ApplicationJSON
	Dmcer500ApplicationJSONObject *Dmcer500ApplicationJSON
	Dmcer502ApplicationJSONObject *Dmcer502ApplicationJSON
	Dmcer503ApplicationJSONObject *Dmcer503ApplicationJSON
	Dmcer504ApplicationJSONObject *Dmcer504ApplicationJSON
}

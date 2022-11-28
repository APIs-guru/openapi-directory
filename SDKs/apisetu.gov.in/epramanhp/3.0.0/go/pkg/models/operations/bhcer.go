package operations

import (
	"openapi/pkg/models/shared"
)

type BhcerRequestBodyCertificateParameters struct {
	Name  string `json:"Name"`
	RefNo string `json:"RefNo"`
}

type BhcerRequestBodyFormatEnum string

const (
	BhcerRequestBodyFormatEnumPdf BhcerRequestBodyFormatEnum = "pdf"
)

type BhcerRequestBody struct {
	CertificateParameters *BhcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                BhcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type BhcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Bhcer400ApplicationJSONErrorEnum string

const (
	Bhcer400ApplicationJSONErrorEnumMissingParameter Bhcer400ApplicationJSONErrorEnum = "missing_parameter"
	Bhcer400ApplicationJSONErrorEnumInvalidParameter Bhcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Bhcer400ApplicationJSONErrorEnumInvalidFormat    Bhcer400ApplicationJSONErrorEnum = "invalid_format"
	Bhcer400ApplicationJSONErrorEnumInvalidTxnid     Bhcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Bhcer400ApplicationJSONErrorEnumInvalidConsentid Bhcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Bhcer400ApplicationJSONErrorDescriptionEnum string

const (
	Bhcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Bhcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Bhcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Bhcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Bhcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Bhcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Bhcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Bhcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Bhcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Bhcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Bhcer400ApplicationJSON struct {
	Error            *Bhcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bhcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bhcer401ApplicationJSONErrorEnum string

const (
	Bhcer401ApplicationJSONErrorEnumInvalidAuthentication Bhcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Bhcer401ApplicationJSONErrorEnumInvalidAuthorization  Bhcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Bhcer401ApplicationJSONErrorDescriptionEnum string

const (
	Bhcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Bhcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Bhcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Bhcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Bhcer401ApplicationJSON struct {
	Error            *Bhcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bhcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bhcer404ApplicationJSONErrorEnum string

const (
	Bhcer404ApplicationJSONErrorEnumRecordNotFound Bhcer404ApplicationJSONErrorEnum = "record_not_found"
	Bhcer404ApplicationJSONErrorEnumURLNotFound    Bhcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Bhcer404ApplicationJSONErrorDescriptionEnum string

const (
	Bhcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Bhcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Bhcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Bhcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Bhcer404ApplicationJSON struct {
	Error            *Bhcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bhcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bhcer500ApplicationJSONErrorEnum string

const (
	Bhcer500ApplicationJSONErrorEnumInternalServerError Bhcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Bhcer500ApplicationJSONErrorDescriptionEnum string

const (
	Bhcer500ApplicationJSONErrorDescriptionEnumInternalServerError Bhcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Bhcer500ApplicationJSON struct {
	Error            *Bhcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bhcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bhcer502ApplicationJSONErrorEnum string

const (
	Bhcer502ApplicationJSONErrorEnumBadGatewy Bhcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Bhcer502ApplicationJSONErrorDescriptionEnum string

const (
	Bhcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Bhcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Bhcer502ApplicationJSON struct {
	Error            *Bhcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bhcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bhcer503ApplicationJSONErrorEnum string

const (
	Bhcer503ApplicationJSONErrorEnumServiceUnavailable Bhcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Bhcer503ApplicationJSONErrorDescriptionEnum string

const (
	Bhcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Bhcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Bhcer503ApplicationJSON struct {
	Error            *Bhcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bhcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bhcer504ApplicationJSONErrorEnum string

const (
	Bhcer504ApplicationJSONErrorEnumGatewayTimeout Bhcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Bhcer504ApplicationJSONErrorDescriptionEnum string

const (
	Bhcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Bhcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Bhcer504ApplicationJSON struct {
	Error            *Bhcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bhcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type BhcerRequest struct {
	Request  *BhcerRequestBody `request:"mediaType=application/json"`
	Security BhcerSecurity
}

type BhcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Bhcer400ApplicationJSONObject *Bhcer400ApplicationJSON
	Bhcer401ApplicationJSONObject *Bhcer401ApplicationJSON
	Bhcer404ApplicationJSONObject *Bhcer404ApplicationJSON
	Bhcer500ApplicationJSONObject *Bhcer500ApplicationJSON
	Bhcer502ApplicationJSONObject *Bhcer502ApplicationJSON
	Bhcer503ApplicationJSONObject *Bhcer503ApplicationJSON
	Bhcer504ApplicationJSONObject *Bhcer504ApplicationJSON
}

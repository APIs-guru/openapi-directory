package operations

import (
	"openapi/pkg/models/shared"
)

type BtcerRequestBodyCertificateParameters struct {
	CertType    string `json:"Cert_Type"`
	DateofEvent string `json:"DateofEvent"`
	RegisNumber string `json:"RegisNumber"`
	Year        string `json:"Year"`
}

type BtcerRequestBodyFormatEnum string

const (
	BtcerRequestBodyFormatEnumPdf BtcerRequestBodyFormatEnum = "pdf"
)

type BtcerRequestBody struct {
	CertificateParameters *BtcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                BtcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type BtcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Btcer400ApplicationJSONErrorEnum string

const (
	Btcer400ApplicationJSONErrorEnumMissingParameter Btcer400ApplicationJSONErrorEnum = "missing_parameter"
	Btcer400ApplicationJSONErrorEnumInvalidParameter Btcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Btcer400ApplicationJSONErrorEnumInvalidFormat    Btcer400ApplicationJSONErrorEnum = "invalid_format"
	Btcer400ApplicationJSONErrorEnumInvalidTxnid     Btcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Btcer400ApplicationJSONErrorEnumInvalidConsentid Btcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Btcer400ApplicationJSONErrorDescriptionEnum string

const (
	Btcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Btcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Btcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Btcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Btcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Btcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Btcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Btcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Btcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Btcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Btcer400ApplicationJSON struct {
	Error            *Btcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Btcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Btcer401ApplicationJSONErrorEnum string

const (
	Btcer401ApplicationJSONErrorEnumInvalidAuthentication Btcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Btcer401ApplicationJSONErrorEnumInvalidAuthorization  Btcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Btcer401ApplicationJSONErrorDescriptionEnum string

const (
	Btcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Btcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Btcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Btcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Btcer401ApplicationJSON struct {
	Error            *Btcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Btcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Btcer404ApplicationJSONErrorEnum string

const (
	Btcer404ApplicationJSONErrorEnumRecordNotFound Btcer404ApplicationJSONErrorEnum = "record_not_found"
	Btcer404ApplicationJSONErrorEnumURLNotFound    Btcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Btcer404ApplicationJSONErrorDescriptionEnum string

const (
	Btcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Btcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Btcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Btcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Btcer404ApplicationJSON struct {
	Error            *Btcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Btcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Btcer500ApplicationJSONErrorEnum string

const (
	Btcer500ApplicationJSONErrorEnumInternalServerError Btcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Btcer500ApplicationJSONErrorDescriptionEnum string

const (
	Btcer500ApplicationJSONErrorDescriptionEnumInternalServerError Btcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Btcer500ApplicationJSON struct {
	Error            *Btcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Btcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Btcer502ApplicationJSONErrorEnum string

const (
	Btcer502ApplicationJSONErrorEnumBadGatewy Btcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Btcer502ApplicationJSONErrorDescriptionEnum string

const (
	Btcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Btcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Btcer502ApplicationJSON struct {
	Error            *Btcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Btcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Btcer503ApplicationJSONErrorEnum string

const (
	Btcer503ApplicationJSONErrorEnumServiceUnavailable Btcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Btcer503ApplicationJSONErrorDescriptionEnum string

const (
	Btcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Btcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Btcer503ApplicationJSON struct {
	Error            *Btcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Btcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Btcer504ApplicationJSONErrorEnum string

const (
	Btcer504ApplicationJSONErrorEnumGatewayTimeout Btcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Btcer504ApplicationJSONErrorDescriptionEnum string

const (
	Btcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Btcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Btcer504ApplicationJSON struct {
	Error            *Btcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Btcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type BtcerRequest struct {
	Request  *BtcerRequestBody `request:"mediaType=application/json"`
	Security BtcerSecurity
}

type BtcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Btcer400ApplicationJSONObject *Btcer400ApplicationJSON
	Btcer401ApplicationJSONObject *Btcer401ApplicationJSON
	Btcer404ApplicationJSONObject *Btcer404ApplicationJSON
	Btcer500ApplicationJSONObject *Btcer500ApplicationJSON
	Btcer502ApplicationJSONObject *Btcer502ApplicationJSON
	Btcer503ApplicationJSONObject *Btcer503ApplicationJSON
	Btcer504ApplicationJSONObject *Btcer504ApplicationJSON
}

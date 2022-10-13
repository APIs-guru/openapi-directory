package operations

import (
	"openapi/pkg/models/shared"
)

type DpicrRequestBodyCertificateParameters struct {
	CertNo   string `json:"CERT_NO"`
	FullName string `json:"FullName"`
}

type DpicrRequestBodyFormatEnum string

const (
	DpicrRequestBodyFormatEnumPdf DpicrRequestBodyFormatEnum = "pdf"
)

type DpicrRequestBody struct {
	CertificateParameters *DpicrRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                DpicrRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type DpicrSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type DpicrRequest struct {
	Request  *DpicrRequestBody `request:"mediaType=application/json"`
	Security DpicrSecurity
}

type Dpicr400ApplicationJSONErrorEnum string

const (
	Dpicr400ApplicationJSONErrorEnumMissingParameter Dpicr400ApplicationJSONErrorEnum = "missing_parameter"
	Dpicr400ApplicationJSONErrorEnumInvalidParameter Dpicr400ApplicationJSONErrorEnum = "invalid_parameter"
	Dpicr400ApplicationJSONErrorEnumInvalidFormat    Dpicr400ApplicationJSONErrorEnum = "invalid_format"
	Dpicr400ApplicationJSONErrorEnumInvalidTxnid     Dpicr400ApplicationJSONErrorEnum = "invalid_txnid"
	Dpicr400ApplicationJSONErrorEnumInvalidConsentid Dpicr400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Dpicr400ApplicationJSONErrorDescriptionEnum string

const (
	Dpicr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Dpicr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Dpicr400ApplicationJSONErrorDescriptionEnumBadRequest                              Dpicr400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Dpicr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Dpicr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Dpicr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Dpicr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Dpicr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Dpicr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Dpicr400ApplicationJSON struct {
	Error            *Dpicr400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Dpicr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Dpicr401ApplicationJSONErrorEnum string

const (
	Dpicr401ApplicationJSONErrorEnumInvalidAuthentication Dpicr401ApplicationJSONErrorEnum = "invalid_authentication"
	Dpicr401ApplicationJSONErrorEnumInvalidAuthorization  Dpicr401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Dpicr401ApplicationJSONErrorDescriptionEnum string

const (
	Dpicr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Dpicr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Dpicr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Dpicr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Dpicr401ApplicationJSON struct {
	Error            *Dpicr401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Dpicr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Dpicr404ApplicationJSONErrorEnum string

const (
	Dpicr404ApplicationJSONErrorEnumRecordNotFound Dpicr404ApplicationJSONErrorEnum = "record_not_found"
	Dpicr404ApplicationJSONErrorEnumURLNotFound    Dpicr404ApplicationJSONErrorEnum = "url_not_found"
)

type Dpicr404ApplicationJSONErrorDescriptionEnum string

const (
	Dpicr404ApplicationJSONErrorDescriptionEnumNoRecordFound               Dpicr404ApplicationJSONErrorDescriptionEnum = "No record found"
	Dpicr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Dpicr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Dpicr404ApplicationJSON struct {
	Error            *Dpicr404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Dpicr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Dpicr500ApplicationJSONErrorEnum string

const (
	Dpicr500ApplicationJSONErrorEnumInternalServerError Dpicr500ApplicationJSONErrorEnum = "internal_server_error"
)

type Dpicr500ApplicationJSONErrorDescriptionEnum string

const (
	Dpicr500ApplicationJSONErrorDescriptionEnumInternalServerError Dpicr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Dpicr500ApplicationJSON struct {
	Error            *Dpicr500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Dpicr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Dpicr502ApplicationJSONErrorEnum string

const (
	Dpicr502ApplicationJSONErrorEnumBadGatewy Dpicr502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Dpicr502ApplicationJSONErrorDescriptionEnum string

const (
	Dpicr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Dpicr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Dpicr502ApplicationJSON struct {
	Error            *Dpicr502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Dpicr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Dpicr503ApplicationJSONErrorEnum string

const (
	Dpicr503ApplicationJSONErrorEnumServiceUnavailable Dpicr503ApplicationJSONErrorEnum = "service_unavailable"
)

type Dpicr503ApplicationJSONErrorDescriptionEnum string

const (
	Dpicr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Dpicr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Dpicr503ApplicationJSON struct {
	Error            *Dpicr503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Dpicr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Dpicr504ApplicationJSONErrorEnum string

const (
	Dpicr504ApplicationJSONErrorEnumGatewayTimeout Dpicr504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Dpicr504ApplicationJSONErrorDescriptionEnum string

const (
	Dpicr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Dpicr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Dpicr504ApplicationJSON struct {
	Error            *Dpicr504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Dpicr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type DpicrResponse struct {
	ContentType                   string
	StatusCode                    int64
	Dpicr400ApplicationJSONObject *Dpicr400ApplicationJSON
	Dpicr401ApplicationJSONObject *Dpicr401ApplicationJSON
	Dpicr404ApplicationJSONObject *Dpicr404ApplicationJSON
	Dpicr500ApplicationJSONObject *Dpicr500ApplicationJSON
	Dpicr502ApplicationJSONObject *Dpicr502ApplicationJSON
	Dpicr503ApplicationJSONObject *Dpicr503ApplicationJSON
	Dpicr504ApplicationJSONObject *Dpicr504ApplicationJSON
}

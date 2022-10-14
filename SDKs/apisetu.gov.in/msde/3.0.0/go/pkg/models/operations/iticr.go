package operations

import (
	"openapi/pkg/models/shared"
)

type IticrRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Certno   string `json:"certno"`
}

type IticrRequestBodyFormatEnum string

const (
	IticrRequestBodyFormatEnumPdf IticrRequestBodyFormatEnum = "pdf"
)

type IticrRequestBody struct {
	CertificateParameters *IticrRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                IticrRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type IticrSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type IticrRequest struct {
	Request  *IticrRequestBody `request:"mediaType=application/json"`
	Security IticrSecurity
}

type Iticr400ApplicationJSONErrorEnum string

const (
	Iticr400ApplicationJSONErrorEnumMissingParameter Iticr400ApplicationJSONErrorEnum = "missing_parameter"
	Iticr400ApplicationJSONErrorEnumInvalidParameter Iticr400ApplicationJSONErrorEnum = "invalid_parameter"
	Iticr400ApplicationJSONErrorEnumInvalidFormat    Iticr400ApplicationJSONErrorEnum = "invalid_format"
	Iticr400ApplicationJSONErrorEnumInvalidTxnid     Iticr400ApplicationJSONErrorEnum = "invalid_txnid"
	Iticr400ApplicationJSONErrorEnumInvalidConsentid Iticr400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Iticr400ApplicationJSONErrorDescriptionEnum string

const (
	Iticr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Iticr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Iticr400ApplicationJSONErrorDescriptionEnumBadRequest                              Iticr400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Iticr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Iticr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Iticr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Iticr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Iticr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Iticr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Iticr400ApplicationJSON struct {
	Error            *Iticr400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Iticr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Iticr401ApplicationJSONErrorEnum string

const (
	Iticr401ApplicationJSONErrorEnumInvalidAuthentication Iticr401ApplicationJSONErrorEnum = "invalid_authentication"
	Iticr401ApplicationJSONErrorEnumInvalidAuthorization  Iticr401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Iticr401ApplicationJSONErrorDescriptionEnum string

const (
	Iticr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Iticr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Iticr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Iticr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Iticr401ApplicationJSON struct {
	Error            *Iticr401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Iticr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Iticr404ApplicationJSONErrorEnum string

const (
	Iticr404ApplicationJSONErrorEnumRecordNotFound Iticr404ApplicationJSONErrorEnum = "record_not_found"
	Iticr404ApplicationJSONErrorEnumURLNotFound    Iticr404ApplicationJSONErrorEnum = "url_not_found"
)

type Iticr404ApplicationJSONErrorDescriptionEnum string

const (
	Iticr404ApplicationJSONErrorDescriptionEnumNoRecordFound               Iticr404ApplicationJSONErrorDescriptionEnum = "No record found"
	Iticr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Iticr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Iticr404ApplicationJSON struct {
	Error            *Iticr404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Iticr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Iticr500ApplicationJSONErrorEnum string

const (
	Iticr500ApplicationJSONErrorEnumInternalServerError Iticr500ApplicationJSONErrorEnum = "internal_server_error"
)

type Iticr500ApplicationJSONErrorDescriptionEnum string

const (
	Iticr500ApplicationJSONErrorDescriptionEnumInternalServerError Iticr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Iticr500ApplicationJSON struct {
	Error            *Iticr500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Iticr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Iticr502ApplicationJSONErrorEnum string

const (
	Iticr502ApplicationJSONErrorEnumBadGatewy Iticr502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Iticr502ApplicationJSONErrorDescriptionEnum string

const (
	Iticr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Iticr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Iticr502ApplicationJSON struct {
	Error            *Iticr502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Iticr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Iticr503ApplicationJSONErrorEnum string

const (
	Iticr503ApplicationJSONErrorEnumServiceUnavailable Iticr503ApplicationJSONErrorEnum = "service_unavailable"
)

type Iticr503ApplicationJSONErrorDescriptionEnum string

const (
	Iticr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Iticr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Iticr503ApplicationJSON struct {
	Error            *Iticr503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Iticr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Iticr504ApplicationJSONErrorEnum string

const (
	Iticr504ApplicationJSONErrorEnumGatewayTimeout Iticr504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Iticr504ApplicationJSONErrorDescriptionEnum string

const (
	Iticr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Iticr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Iticr504ApplicationJSON struct {
	Error            *Iticr504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Iticr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type IticrResponse struct {
	ContentType                   string
	StatusCode                    int64
	Iticr400ApplicationJSONObject *Iticr400ApplicationJSON
	Iticr401ApplicationJSONObject *Iticr401ApplicationJSON
	Iticr404ApplicationJSONObject *Iticr404ApplicationJSON
	Iticr500ApplicationJSONObject *Iticr500ApplicationJSON
	Iticr502ApplicationJSONObject *Iticr502ApplicationJSON
	Iticr503ApplicationJSONObject *Iticr503ApplicationJSON
	Iticr504ApplicationJSONObject *Iticr504ApplicationJSON
}

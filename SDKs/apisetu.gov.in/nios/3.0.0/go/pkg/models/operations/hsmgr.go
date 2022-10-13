package operations

import (
	"openapi/pkg/models/shared"
)

type HsmgrRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rroll    string `json:"RROLL"`
	Year     string `json:"YEAR"`
}

type HsmgrRequestBodyFormatEnum string

const (
	HsmgrRequestBodyFormatEnumPdf HsmgrRequestBodyFormatEnum = "pdf"
)

type HsmgrRequestBody struct {
	CertificateParameters *HsmgrRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                HsmgrRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type HsmgrSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type HsmgrRequest struct {
	Request  *HsmgrRequestBody `request:"mediaType=application/json"`
	Security HsmgrSecurity
}

type Hsmgr400ApplicationJSONErrorEnum string

const (
	Hsmgr400ApplicationJSONErrorEnumMissingParameter Hsmgr400ApplicationJSONErrorEnum = "missing_parameter"
	Hsmgr400ApplicationJSONErrorEnumInvalidParameter Hsmgr400ApplicationJSONErrorEnum = "invalid_parameter"
	Hsmgr400ApplicationJSONErrorEnumInvalidFormat    Hsmgr400ApplicationJSONErrorEnum = "invalid_format"
	Hsmgr400ApplicationJSONErrorEnumInvalidTxnid     Hsmgr400ApplicationJSONErrorEnum = "invalid_txnid"
	Hsmgr400ApplicationJSONErrorEnumInvalidConsentid Hsmgr400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Hsmgr400ApplicationJSONErrorDescriptionEnum string

const (
	Hsmgr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Hsmgr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Hsmgr400ApplicationJSONErrorDescriptionEnumBadRequest                              Hsmgr400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Hsmgr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Hsmgr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Hsmgr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Hsmgr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Hsmgr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Hsmgr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Hsmgr400ApplicationJSON struct {
	Error            *Hsmgr400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hsmgr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hsmgr401ApplicationJSONErrorEnum string

const (
	Hsmgr401ApplicationJSONErrorEnumInvalidAuthentication Hsmgr401ApplicationJSONErrorEnum = "invalid_authentication"
	Hsmgr401ApplicationJSONErrorEnumInvalidAuthorization  Hsmgr401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Hsmgr401ApplicationJSONErrorDescriptionEnum string

const (
	Hsmgr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Hsmgr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Hsmgr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Hsmgr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Hsmgr401ApplicationJSON struct {
	Error            *Hsmgr401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hsmgr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hsmgr404ApplicationJSONErrorEnum string

const (
	Hsmgr404ApplicationJSONErrorEnumRecordNotFound Hsmgr404ApplicationJSONErrorEnum = "record_not_found"
	Hsmgr404ApplicationJSONErrorEnumURLNotFound    Hsmgr404ApplicationJSONErrorEnum = "url_not_found"
)

type Hsmgr404ApplicationJSONErrorDescriptionEnum string

const (
	Hsmgr404ApplicationJSONErrorDescriptionEnumNoRecordFound               Hsmgr404ApplicationJSONErrorDescriptionEnum = "No record found"
	Hsmgr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Hsmgr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Hsmgr404ApplicationJSON struct {
	Error            *Hsmgr404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hsmgr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hsmgr500ApplicationJSONErrorEnum string

const (
	Hsmgr500ApplicationJSONErrorEnumInternalServerError Hsmgr500ApplicationJSONErrorEnum = "internal_server_error"
)

type Hsmgr500ApplicationJSONErrorDescriptionEnum string

const (
	Hsmgr500ApplicationJSONErrorDescriptionEnumInternalServerError Hsmgr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Hsmgr500ApplicationJSON struct {
	Error            *Hsmgr500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hsmgr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hsmgr502ApplicationJSONErrorEnum string

const (
	Hsmgr502ApplicationJSONErrorEnumBadGatewy Hsmgr502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Hsmgr502ApplicationJSONErrorDescriptionEnum string

const (
	Hsmgr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Hsmgr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Hsmgr502ApplicationJSON struct {
	Error            *Hsmgr502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hsmgr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hsmgr503ApplicationJSONErrorEnum string

const (
	Hsmgr503ApplicationJSONErrorEnumServiceUnavailable Hsmgr503ApplicationJSONErrorEnum = "service_unavailable"
)

type Hsmgr503ApplicationJSONErrorDescriptionEnum string

const (
	Hsmgr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Hsmgr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Hsmgr503ApplicationJSON struct {
	Error            *Hsmgr503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hsmgr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Hsmgr504ApplicationJSONErrorEnum string

const (
	Hsmgr504ApplicationJSONErrorEnumGatewayTimeout Hsmgr504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Hsmgr504ApplicationJSONErrorDescriptionEnum string

const (
	Hsmgr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Hsmgr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Hsmgr504ApplicationJSON struct {
	Error            *Hsmgr504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Hsmgr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type HsmgrResponse struct {
	ContentType                   string
	StatusCode                    int64
	Hsmgr400ApplicationJSONObject *Hsmgr400ApplicationJSON
	Hsmgr401ApplicationJSONObject *Hsmgr401ApplicationJSON
	Hsmgr404ApplicationJSONObject *Hsmgr404ApplicationJSON
	Hsmgr500ApplicationJSONObject *Hsmgr500ApplicationJSON
	Hsmgr502ApplicationJSONObject *Hsmgr502ApplicationJSON
	Hsmgr503ApplicationJSONObject *Hsmgr503ApplicationJSON
	Hsmgr504ApplicationJSONObject *Hsmgr504ApplicationJSON
}

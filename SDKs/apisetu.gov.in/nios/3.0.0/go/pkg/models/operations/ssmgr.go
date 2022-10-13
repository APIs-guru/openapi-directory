package operations

import (
	"openapi/pkg/models/shared"
)

type SsmgrRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rroll    string `json:"RROLL"`
	Year     string `json:"YEAR"`
}

type SsmgrRequestBodyFormatEnum string

const (
	SsmgrRequestBodyFormatEnumPdf SsmgrRequestBodyFormatEnum = "pdf"
)

type SsmgrRequestBody struct {
	CertificateParameters *SsmgrRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                SsmgrRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type SsmgrSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type SsmgrRequest struct {
	Request  *SsmgrRequestBody `request:"mediaType=application/json"`
	Security SsmgrSecurity
}

type Ssmgr400ApplicationJSONErrorEnum string

const (
	Ssmgr400ApplicationJSONErrorEnumMissingParameter Ssmgr400ApplicationJSONErrorEnum = "missing_parameter"
	Ssmgr400ApplicationJSONErrorEnumInvalidParameter Ssmgr400ApplicationJSONErrorEnum = "invalid_parameter"
	Ssmgr400ApplicationJSONErrorEnumInvalidFormat    Ssmgr400ApplicationJSONErrorEnum = "invalid_format"
	Ssmgr400ApplicationJSONErrorEnumInvalidTxnid     Ssmgr400ApplicationJSONErrorEnum = "invalid_txnid"
	Ssmgr400ApplicationJSONErrorEnumInvalidConsentid Ssmgr400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Ssmgr400ApplicationJSONErrorDescriptionEnum string

const (
	Ssmgr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ssmgr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ssmgr400ApplicationJSONErrorDescriptionEnumBadRequest                              Ssmgr400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ssmgr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ssmgr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ssmgr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ssmgr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ssmgr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ssmgr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Ssmgr400ApplicationJSON struct {
	Error            *Ssmgr400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ssmgr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ssmgr401ApplicationJSONErrorEnum string

const (
	Ssmgr401ApplicationJSONErrorEnumInvalidAuthentication Ssmgr401ApplicationJSONErrorEnum = "invalid_authentication"
	Ssmgr401ApplicationJSONErrorEnumInvalidAuthorization  Ssmgr401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Ssmgr401ApplicationJSONErrorDescriptionEnum string

const (
	Ssmgr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ssmgr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ssmgr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ssmgr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Ssmgr401ApplicationJSON struct {
	Error            *Ssmgr401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ssmgr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ssmgr404ApplicationJSONErrorEnum string

const (
	Ssmgr404ApplicationJSONErrorEnumRecordNotFound Ssmgr404ApplicationJSONErrorEnum = "record_not_found"
	Ssmgr404ApplicationJSONErrorEnumURLNotFound    Ssmgr404ApplicationJSONErrorEnum = "url_not_found"
)

type Ssmgr404ApplicationJSONErrorDescriptionEnum string

const (
	Ssmgr404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ssmgr404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ssmgr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ssmgr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Ssmgr404ApplicationJSON struct {
	Error            *Ssmgr404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ssmgr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ssmgr500ApplicationJSONErrorEnum string

const (
	Ssmgr500ApplicationJSONErrorEnumInternalServerError Ssmgr500ApplicationJSONErrorEnum = "internal_server_error"
)

type Ssmgr500ApplicationJSONErrorDescriptionEnum string

const (
	Ssmgr500ApplicationJSONErrorDescriptionEnumInternalServerError Ssmgr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Ssmgr500ApplicationJSON struct {
	Error            *Ssmgr500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ssmgr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ssmgr502ApplicationJSONErrorEnum string

const (
	Ssmgr502ApplicationJSONErrorEnumBadGatewy Ssmgr502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Ssmgr502ApplicationJSONErrorDescriptionEnum string

const (
	Ssmgr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ssmgr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Ssmgr502ApplicationJSON struct {
	Error            *Ssmgr502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ssmgr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ssmgr503ApplicationJSONErrorEnum string

const (
	Ssmgr503ApplicationJSONErrorEnumServiceUnavailable Ssmgr503ApplicationJSONErrorEnum = "service_unavailable"
)

type Ssmgr503ApplicationJSONErrorDescriptionEnum string

const (
	Ssmgr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ssmgr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Ssmgr503ApplicationJSON struct {
	Error            *Ssmgr503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ssmgr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ssmgr504ApplicationJSONErrorEnum string

const (
	Ssmgr504ApplicationJSONErrorEnumGatewayTimeout Ssmgr504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Ssmgr504ApplicationJSONErrorDescriptionEnum string

const (
	Ssmgr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ssmgr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Ssmgr504ApplicationJSON struct {
	Error            *Ssmgr504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ssmgr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type SsmgrResponse struct {
	ContentType                   string
	StatusCode                    int64
	Ssmgr400ApplicationJSONObject *Ssmgr400ApplicationJSON
	Ssmgr401ApplicationJSONObject *Ssmgr401ApplicationJSON
	Ssmgr404ApplicationJSONObject *Ssmgr404ApplicationJSON
	Ssmgr500ApplicationJSONObject *Ssmgr500ApplicationJSON
	Ssmgr502ApplicationJSONObject *Ssmgr502ApplicationJSON
	Ssmgr503ApplicationJSONObject *Ssmgr503ApplicationJSON
	Ssmgr504ApplicationJSONObject *Ssmgr504ApplicationJSON
}

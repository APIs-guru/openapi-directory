package operations

import (
	"openapi/pkg/models/shared"
)

type CemstRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	UID      string `json:"UID"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type CemstRequestBodyFormatEnum string

const (
	CemstRequestBodyFormatEnumPdf CemstRequestBodyFormatEnum = "pdf"
)

type CemstRequestBody struct {
	CertificateParameters *CemstRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                CemstRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type CemstSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type CemstRequest struct {
	Request  *CemstRequestBody `request:"mediaType=application/json"`
	Security CemstSecurity
}

type Cemst400ApplicationJSONErrorEnum string

const (
	Cemst400ApplicationJSONErrorEnumMissingParameter Cemst400ApplicationJSONErrorEnum = "missing_parameter"
	Cemst400ApplicationJSONErrorEnumInvalidParameter Cemst400ApplicationJSONErrorEnum = "invalid_parameter"
	Cemst400ApplicationJSONErrorEnumInvalidFormat    Cemst400ApplicationJSONErrorEnum = "invalid_format"
	Cemst400ApplicationJSONErrorEnumInvalidTxnid     Cemst400ApplicationJSONErrorEnum = "invalid_txnid"
	Cemst400ApplicationJSONErrorEnumInvalidConsentid Cemst400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Cemst400ApplicationJSONErrorDescriptionEnum string

const (
	Cemst400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Cemst400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Cemst400ApplicationJSONErrorDescriptionEnumBadRequest                              Cemst400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Cemst400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Cemst400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Cemst400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Cemst400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Cemst400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Cemst400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Cemst400ApplicationJSON struct {
	Error            *Cemst400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cemst400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cemst401ApplicationJSONErrorEnum string

const (
	Cemst401ApplicationJSONErrorEnumInvalidAuthentication Cemst401ApplicationJSONErrorEnum = "invalid_authentication"
	Cemst401ApplicationJSONErrorEnumInvalidAuthorization  Cemst401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Cemst401ApplicationJSONErrorDescriptionEnum string

const (
	Cemst401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Cemst401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Cemst401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Cemst401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Cemst401ApplicationJSON struct {
	Error            *Cemst401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cemst401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cemst404ApplicationJSONErrorEnum string

const (
	Cemst404ApplicationJSONErrorEnumRecordNotFound Cemst404ApplicationJSONErrorEnum = "record_not_found"
	Cemst404ApplicationJSONErrorEnumURLNotFound    Cemst404ApplicationJSONErrorEnum = "url_not_found"
)

type Cemst404ApplicationJSONErrorDescriptionEnum string

const (
	Cemst404ApplicationJSONErrorDescriptionEnumNoRecordFound               Cemst404ApplicationJSONErrorDescriptionEnum = "No record found"
	Cemst404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Cemst404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Cemst404ApplicationJSON struct {
	Error            *Cemst404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cemst404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cemst500ApplicationJSONErrorEnum string

const (
	Cemst500ApplicationJSONErrorEnumInternalServerError Cemst500ApplicationJSONErrorEnum = "internal_server_error"
)

type Cemst500ApplicationJSONErrorDescriptionEnum string

const (
	Cemst500ApplicationJSONErrorDescriptionEnumInternalServerError Cemst500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Cemst500ApplicationJSON struct {
	Error            *Cemst500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cemst500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cemst502ApplicationJSONErrorEnum string

const (
	Cemst502ApplicationJSONErrorEnumBadGatewy Cemst502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Cemst502ApplicationJSONErrorDescriptionEnum string

const (
	Cemst502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Cemst502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Cemst502ApplicationJSON struct {
	Error            *Cemst502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cemst502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cemst503ApplicationJSONErrorEnum string

const (
	Cemst503ApplicationJSONErrorEnumServiceUnavailable Cemst503ApplicationJSONErrorEnum = "service_unavailable"
)

type Cemst503ApplicationJSONErrorDescriptionEnum string

const (
	Cemst503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Cemst503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Cemst503ApplicationJSON struct {
	Error            *Cemst503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cemst503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Cemst504ApplicationJSONErrorEnum string

const (
	Cemst504ApplicationJSONErrorEnumGatewayTimeout Cemst504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Cemst504ApplicationJSONErrorDescriptionEnum string

const (
	Cemst504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Cemst504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Cemst504ApplicationJSON struct {
	Error            *Cemst504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Cemst504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type CemstResponse struct {
	ContentType                   string
	StatusCode                    int64
	Cemst400ApplicationJSONObject *Cemst400ApplicationJSON
	Cemst401ApplicationJSONObject *Cemst401ApplicationJSON
	Cemst404ApplicationJSONObject *Cemst404ApplicationJSON
	Cemst500ApplicationJSONObject *Cemst500ApplicationJSON
	Cemst502ApplicationJSONObject *Cemst502ApplicationJSON
	Cemst503ApplicationJSONObject *Cemst503ApplicationJSON
	Cemst504ApplicationJSONObject *Cemst504ApplicationJSON
}

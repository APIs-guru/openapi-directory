package operations

import (
	"openapi/pkg/models/shared"
)

type DgmstRequestBodyCertificateParameters struct {
	Dob          string `json:"DOB"`
	EnrollmentNo string `json:"EnrollmentNo"`
	FullName     string `json:"FullName"`
	RollNo       string `json:"RollNo"`
	UID          string `json:"UID"`
	Year         string `json:"Year"`
}

type DgmstRequestBodyFormatEnum string

const (
	DgmstRequestBodyFormatEnumPdf DgmstRequestBodyFormatEnum = "pdf"
)

type DgmstRequestBody struct {
	CertificateParameters *DgmstRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                DgmstRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type DgmstSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type DgmstRequest struct {
	Request  *DgmstRequestBody `request:"mediaType=application/json"`
	Security DgmstSecurity
}

type Dgmst400ApplicationJSONErrorEnum string

const (
	Dgmst400ApplicationJSONErrorEnumMissingParameter Dgmst400ApplicationJSONErrorEnum = "missing_parameter"
	Dgmst400ApplicationJSONErrorEnumInvalidParameter Dgmst400ApplicationJSONErrorEnum = "invalid_parameter"
	Dgmst400ApplicationJSONErrorEnumInvalidFormat    Dgmst400ApplicationJSONErrorEnum = "invalid_format"
	Dgmst400ApplicationJSONErrorEnumInvalidTxnid     Dgmst400ApplicationJSONErrorEnum = "invalid_txnid"
	Dgmst400ApplicationJSONErrorEnumInvalidConsentid Dgmst400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Dgmst400ApplicationJSONErrorDescriptionEnum string

const (
	Dgmst400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Dgmst400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Dgmst400ApplicationJSONErrorDescriptionEnumBadRequest                              Dgmst400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Dgmst400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Dgmst400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Dgmst400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Dgmst400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Dgmst400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Dgmst400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Dgmst400ApplicationJSON struct {
	Error            *Dgmst400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dgmst400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dgmst401ApplicationJSONErrorEnum string

const (
	Dgmst401ApplicationJSONErrorEnumInvalidAuthentication Dgmst401ApplicationJSONErrorEnum = "invalid_authentication"
	Dgmst401ApplicationJSONErrorEnumInvalidAuthorization  Dgmst401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Dgmst401ApplicationJSONErrorDescriptionEnum string

const (
	Dgmst401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Dgmst401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Dgmst401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Dgmst401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Dgmst401ApplicationJSON struct {
	Error            *Dgmst401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dgmst401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dgmst404ApplicationJSONErrorEnum string

const (
	Dgmst404ApplicationJSONErrorEnumRecordNotFound Dgmst404ApplicationJSONErrorEnum = "record_not_found"
	Dgmst404ApplicationJSONErrorEnumURLNotFound    Dgmst404ApplicationJSONErrorEnum = "url_not_found"
)

type Dgmst404ApplicationJSONErrorDescriptionEnum string

const (
	Dgmst404ApplicationJSONErrorDescriptionEnumNoRecordFound               Dgmst404ApplicationJSONErrorDescriptionEnum = "No record found"
	Dgmst404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Dgmst404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Dgmst404ApplicationJSON struct {
	Error            *Dgmst404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dgmst404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dgmst500ApplicationJSONErrorEnum string

const (
	Dgmst500ApplicationJSONErrorEnumInternalServerError Dgmst500ApplicationJSONErrorEnum = "internal_server_error"
)

type Dgmst500ApplicationJSONErrorDescriptionEnum string

const (
	Dgmst500ApplicationJSONErrorDescriptionEnumInternalServerError Dgmst500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Dgmst500ApplicationJSON struct {
	Error            *Dgmst500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dgmst500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dgmst502ApplicationJSONErrorEnum string

const (
	Dgmst502ApplicationJSONErrorEnumBadGatewy Dgmst502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Dgmst502ApplicationJSONErrorDescriptionEnum string

const (
	Dgmst502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Dgmst502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Dgmst502ApplicationJSON struct {
	Error            *Dgmst502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dgmst502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dgmst503ApplicationJSONErrorEnum string

const (
	Dgmst503ApplicationJSONErrorEnumServiceUnavailable Dgmst503ApplicationJSONErrorEnum = "service_unavailable"
)

type Dgmst503ApplicationJSONErrorDescriptionEnum string

const (
	Dgmst503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Dgmst503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Dgmst503ApplicationJSON struct {
	Error            *Dgmst503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dgmst503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dgmst504ApplicationJSONErrorEnum string

const (
	Dgmst504ApplicationJSONErrorEnumGatewayTimeout Dgmst504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Dgmst504ApplicationJSONErrorDescriptionEnum string

const (
	Dgmst504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Dgmst504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Dgmst504ApplicationJSON struct {
	Error            *Dgmst504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dgmst504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type DgmstResponse struct {
	ContentType                   string
	StatusCode                    int64
	Dgmst400ApplicationJSONObject *Dgmst400ApplicationJSON
	Dgmst401ApplicationJSONObject *Dgmst401ApplicationJSON
	Dgmst404ApplicationJSONObject *Dgmst404ApplicationJSON
	Dgmst500ApplicationJSONObject *Dgmst500ApplicationJSON
	Dgmst502ApplicationJSONObject *Dgmst502ApplicationJSON
	Dgmst503ApplicationJSONObject *Dgmst503ApplicationJSON
	Dgmst504ApplicationJSONObject *Dgmst504ApplicationJSON
}

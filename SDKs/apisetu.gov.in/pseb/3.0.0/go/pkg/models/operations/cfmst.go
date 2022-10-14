package operations

import (
	"openapi/pkg/models/shared"
)

type CfmstRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	UID      string `json:"UID"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type CfmstRequestBodyFormatEnum string

const (
	CfmstRequestBodyFormatEnumPdf CfmstRequestBodyFormatEnum = "pdf"
)

type CfmstRequestBody struct {
	CertificateParameters *CfmstRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                CfmstRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type CfmstSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type CfmstRequest struct {
	Request  *CfmstRequestBody `request:"mediaType=application/json"`
	Security CfmstSecurity
}

type Cfmst400ApplicationJSONErrorEnum string

const (
	Cfmst400ApplicationJSONErrorEnumMissingParameter Cfmst400ApplicationJSONErrorEnum = "missing_parameter"
	Cfmst400ApplicationJSONErrorEnumInvalidParameter Cfmst400ApplicationJSONErrorEnum = "invalid_parameter"
	Cfmst400ApplicationJSONErrorEnumInvalidFormat    Cfmst400ApplicationJSONErrorEnum = "invalid_format"
	Cfmst400ApplicationJSONErrorEnumInvalidTxnid     Cfmst400ApplicationJSONErrorEnum = "invalid_txnid"
	Cfmst400ApplicationJSONErrorEnumInvalidConsentid Cfmst400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Cfmst400ApplicationJSONErrorDescriptionEnum string

const (
	Cfmst400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Cfmst400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Cfmst400ApplicationJSONErrorDescriptionEnumBadRequest                              Cfmst400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Cfmst400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Cfmst400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Cfmst400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Cfmst400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Cfmst400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Cfmst400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Cfmst400ApplicationJSON struct {
	Error            *Cfmst400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cfmst400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cfmst401ApplicationJSONErrorEnum string

const (
	Cfmst401ApplicationJSONErrorEnumInvalidAuthentication Cfmst401ApplicationJSONErrorEnum = "invalid_authentication"
	Cfmst401ApplicationJSONErrorEnumInvalidAuthorization  Cfmst401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Cfmst401ApplicationJSONErrorDescriptionEnum string

const (
	Cfmst401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Cfmst401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Cfmst401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Cfmst401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Cfmst401ApplicationJSON struct {
	Error            *Cfmst401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cfmst401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cfmst404ApplicationJSONErrorEnum string

const (
	Cfmst404ApplicationJSONErrorEnumRecordNotFound Cfmst404ApplicationJSONErrorEnum = "record_not_found"
	Cfmst404ApplicationJSONErrorEnumURLNotFound    Cfmst404ApplicationJSONErrorEnum = "url_not_found"
)

type Cfmst404ApplicationJSONErrorDescriptionEnum string

const (
	Cfmst404ApplicationJSONErrorDescriptionEnumNoRecordFound               Cfmst404ApplicationJSONErrorDescriptionEnum = "No record found"
	Cfmst404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Cfmst404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Cfmst404ApplicationJSON struct {
	Error            *Cfmst404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cfmst404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cfmst500ApplicationJSONErrorEnum string

const (
	Cfmst500ApplicationJSONErrorEnumInternalServerError Cfmst500ApplicationJSONErrorEnum = "internal_server_error"
)

type Cfmst500ApplicationJSONErrorDescriptionEnum string

const (
	Cfmst500ApplicationJSONErrorDescriptionEnumInternalServerError Cfmst500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Cfmst500ApplicationJSON struct {
	Error            *Cfmst500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cfmst500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cfmst502ApplicationJSONErrorEnum string

const (
	Cfmst502ApplicationJSONErrorEnumBadGatewy Cfmst502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Cfmst502ApplicationJSONErrorDescriptionEnum string

const (
	Cfmst502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Cfmst502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Cfmst502ApplicationJSON struct {
	Error            *Cfmst502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cfmst502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cfmst503ApplicationJSONErrorEnum string

const (
	Cfmst503ApplicationJSONErrorEnumServiceUnavailable Cfmst503ApplicationJSONErrorEnum = "service_unavailable"
)

type Cfmst503ApplicationJSONErrorDescriptionEnum string

const (
	Cfmst503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Cfmst503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Cfmst503ApplicationJSON struct {
	Error            *Cfmst503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cfmst503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cfmst504ApplicationJSONErrorEnum string

const (
	Cfmst504ApplicationJSONErrorEnumGatewayTimeout Cfmst504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Cfmst504ApplicationJSONErrorDescriptionEnum string

const (
	Cfmst504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Cfmst504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Cfmst504ApplicationJSON struct {
	Error            *Cfmst504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cfmst504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type CfmstResponse struct {
	ContentType                   string
	StatusCode                    int64
	Cfmst400ApplicationJSONObject *Cfmst400ApplicationJSON
	Cfmst401ApplicationJSONObject *Cfmst401ApplicationJSON
	Cfmst404ApplicationJSONObject *Cfmst404ApplicationJSON
	Cfmst500ApplicationJSONObject *Cfmst500ApplicationJSON
	Cfmst502ApplicationJSONObject *Cfmst502ApplicationJSON
	Cfmst503ApplicationJSONObject *Cfmst503ApplicationJSON
	Cfmst504ApplicationJSONObject *Cfmst504ApplicationJSON
}

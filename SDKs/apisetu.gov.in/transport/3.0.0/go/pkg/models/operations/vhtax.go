package operations

import (
	"openapi/pkg/models/shared"
)

type VhtaxRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	UID      string `json:"UID"`
	ChasisNo string `json:"chasis_no"`
	RegNo    string `json:"reg_no"`
	SwdName  string `json:"swd_name"`
}

type VhtaxRequestBodyFormatEnum string

const (
	VhtaxRequestBodyFormatEnumPdf VhtaxRequestBodyFormatEnum = "pdf"
)

type VhtaxRequestBody struct {
	CertificateParameters *VhtaxRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                VhtaxRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type VhtaxSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type VhtaxRequest struct {
	Request  *VhtaxRequestBody `request:"mediaType=application/json"`
	Security VhtaxSecurity
}

type Vhtax400ApplicationJSONErrorEnum string

const (
	Vhtax400ApplicationJSONErrorEnumMissingParameter Vhtax400ApplicationJSONErrorEnum = "missing_parameter"
	Vhtax400ApplicationJSONErrorEnumInvalidParameter Vhtax400ApplicationJSONErrorEnum = "invalid_parameter"
	Vhtax400ApplicationJSONErrorEnumInvalidFormat    Vhtax400ApplicationJSONErrorEnum = "invalid_format"
	Vhtax400ApplicationJSONErrorEnumInvalidTxnid     Vhtax400ApplicationJSONErrorEnum = "invalid_txnid"
	Vhtax400ApplicationJSONErrorEnumInvalidConsentid Vhtax400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Vhtax400ApplicationJSONErrorDescriptionEnum string

const (
	Vhtax400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Vhtax400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Vhtax400ApplicationJSONErrorDescriptionEnumBadRequest                              Vhtax400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Vhtax400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Vhtax400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Vhtax400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Vhtax400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Vhtax400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Vhtax400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Vhtax400ApplicationJSON struct {
	Error            *Vhtax400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vhtax400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vhtax401ApplicationJSONErrorEnum string

const (
	Vhtax401ApplicationJSONErrorEnumInvalidAuthentication Vhtax401ApplicationJSONErrorEnum = "invalid_authentication"
	Vhtax401ApplicationJSONErrorEnumInvalidAuthorization  Vhtax401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Vhtax401ApplicationJSONErrorDescriptionEnum string

const (
	Vhtax401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Vhtax401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Vhtax401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Vhtax401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Vhtax401ApplicationJSON struct {
	Error            *Vhtax401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vhtax401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vhtax404ApplicationJSONErrorEnum string

const (
	Vhtax404ApplicationJSONErrorEnumRecordNotFound Vhtax404ApplicationJSONErrorEnum = "record_not_found"
	Vhtax404ApplicationJSONErrorEnumURLNotFound    Vhtax404ApplicationJSONErrorEnum = "url_not_found"
)

type Vhtax404ApplicationJSONErrorDescriptionEnum string

const (
	Vhtax404ApplicationJSONErrorDescriptionEnumNoRecordFound               Vhtax404ApplicationJSONErrorDescriptionEnum = "No record found"
	Vhtax404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Vhtax404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Vhtax404ApplicationJSON struct {
	Error            *Vhtax404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vhtax404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vhtax500ApplicationJSONErrorEnum string

const (
	Vhtax500ApplicationJSONErrorEnumInternalServerError Vhtax500ApplicationJSONErrorEnum = "internal_server_error"
)

type Vhtax500ApplicationJSONErrorDescriptionEnum string

const (
	Vhtax500ApplicationJSONErrorDescriptionEnumInternalServerError Vhtax500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Vhtax500ApplicationJSON struct {
	Error            *Vhtax500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vhtax500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vhtax502ApplicationJSONErrorEnum string

const (
	Vhtax502ApplicationJSONErrorEnumBadGatewy Vhtax502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Vhtax502ApplicationJSONErrorDescriptionEnum string

const (
	Vhtax502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Vhtax502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Vhtax502ApplicationJSON struct {
	Error            *Vhtax502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vhtax502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vhtax503ApplicationJSONErrorEnum string

const (
	Vhtax503ApplicationJSONErrorEnumServiceUnavailable Vhtax503ApplicationJSONErrorEnum = "service_unavailable"
)

type Vhtax503ApplicationJSONErrorDescriptionEnum string

const (
	Vhtax503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Vhtax503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Vhtax503ApplicationJSON struct {
	Error            *Vhtax503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vhtax503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vhtax504ApplicationJSONErrorEnum string

const (
	Vhtax504ApplicationJSONErrorEnumGatewayTimeout Vhtax504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Vhtax504ApplicationJSONErrorDescriptionEnum string

const (
	Vhtax504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Vhtax504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Vhtax504ApplicationJSON struct {
	Error            *Vhtax504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vhtax504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type VhtaxResponse struct {
	ContentType                   string
	StatusCode                    int64
	Vhtax400ApplicationJSONObject *Vhtax400ApplicationJSON
	Vhtax401ApplicationJSONObject *Vhtax401ApplicationJSON
	Vhtax404ApplicationJSONObject *Vhtax404ApplicationJSON
	Vhtax500ApplicationJSONObject *Vhtax500ApplicationJSON
	Vhtax502ApplicationJSONObject *Vhtax502ApplicationJSON
	Vhtax503ApplicationJSONObject *Vhtax503ApplicationJSON
	Vhtax504ApplicationJSONObject *Vhtax504ApplicationJSON
}

package operations

import (
	"openapi/pkg/models/shared"
)

type SocerRequestBodyCertificateParameters struct {
	ApplNo   string `json:"APPL_NO"`
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	Session  string `json:"SESSION"`
}

type SocerRequestBodyFormatEnum string

const (
	SocerRequestBodyFormatEnumPdf SocerRequestBodyFormatEnum = "pdf"
)

type SocerRequestBody struct {
	CertificateParameters *SocerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                SocerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type SocerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type SocerRequest struct {
	Request  *SocerRequestBody `request:"mediaType=application/json"`
	Security SocerSecurity
}

type Socer400ApplicationJSONErrorEnum string

const (
	Socer400ApplicationJSONErrorEnumMissingParameter Socer400ApplicationJSONErrorEnum = "missing_parameter"
	Socer400ApplicationJSONErrorEnumInvalidParameter Socer400ApplicationJSONErrorEnum = "invalid_parameter"
	Socer400ApplicationJSONErrorEnumInvalidFormat    Socer400ApplicationJSONErrorEnum = "invalid_format"
	Socer400ApplicationJSONErrorEnumInvalidTxnid     Socer400ApplicationJSONErrorEnum = "invalid_txnid"
	Socer400ApplicationJSONErrorEnumInvalidConsentid Socer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Socer400ApplicationJSONErrorDescriptionEnum string

const (
	Socer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Socer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Socer400ApplicationJSONErrorDescriptionEnumBadRequest                              Socer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Socer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Socer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Socer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Socer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Socer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Socer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Socer400ApplicationJSON struct {
	Error            *Socer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Socer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Socer401ApplicationJSONErrorEnum string

const (
	Socer401ApplicationJSONErrorEnumInvalidAuthentication Socer401ApplicationJSONErrorEnum = "invalid_authentication"
	Socer401ApplicationJSONErrorEnumInvalidAuthorization  Socer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Socer401ApplicationJSONErrorDescriptionEnum string

const (
	Socer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Socer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Socer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Socer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Socer401ApplicationJSON struct {
	Error            *Socer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Socer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Socer404ApplicationJSONErrorEnum string

const (
	Socer404ApplicationJSONErrorEnumRecordNotFound Socer404ApplicationJSONErrorEnum = "record_not_found"
	Socer404ApplicationJSONErrorEnumURLNotFound    Socer404ApplicationJSONErrorEnum = "url_not_found"
)

type Socer404ApplicationJSONErrorDescriptionEnum string

const (
	Socer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Socer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Socer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Socer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Socer404ApplicationJSON struct {
	Error            *Socer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Socer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Socer500ApplicationJSONErrorEnum string

const (
	Socer500ApplicationJSONErrorEnumInternalServerError Socer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Socer500ApplicationJSONErrorDescriptionEnum string

const (
	Socer500ApplicationJSONErrorDescriptionEnumInternalServerError Socer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Socer500ApplicationJSON struct {
	Error            *Socer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Socer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Socer502ApplicationJSONErrorEnum string

const (
	Socer502ApplicationJSONErrorEnumBadGatewy Socer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Socer502ApplicationJSONErrorDescriptionEnum string

const (
	Socer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Socer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Socer502ApplicationJSON struct {
	Error            *Socer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Socer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Socer503ApplicationJSONErrorEnum string

const (
	Socer503ApplicationJSONErrorEnumServiceUnavailable Socer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Socer503ApplicationJSONErrorDescriptionEnum string

const (
	Socer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Socer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Socer503ApplicationJSON struct {
	Error            *Socer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Socer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Socer504ApplicationJSONErrorEnum string

const (
	Socer504ApplicationJSONErrorEnumGatewayTimeout Socer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Socer504ApplicationJSONErrorDescriptionEnum string

const (
	Socer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Socer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Socer504ApplicationJSON struct {
	Error            *Socer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Socer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type SocerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Socer400ApplicationJSONObject *Socer400ApplicationJSON
	Socer401ApplicationJSONObject *Socer401ApplicationJSON
	Socer404ApplicationJSONObject *Socer404ApplicationJSON
	Socer500ApplicationJSONObject *Socer500ApplicationJSON
	Socer502ApplicationJSONObject *Socer502ApplicationJSON
	Socer503ApplicationJSONObject *Socer503ApplicationJSON
	Socer504ApplicationJSONObject *Socer504ApplicationJSON
}

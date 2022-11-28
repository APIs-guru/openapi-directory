package operations

import (
	"openapi/pkg/models/shared"
)

type VlcerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type VlcerRequestBodyFormatEnum string

const (
	VlcerRequestBodyFormatEnumPdf VlcerRequestBodyFormatEnum = "pdf"
)

type VlcerRequestBody struct {
	CertificateParameters *VlcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                VlcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type VlcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Vlcer400ApplicationJSONErrorEnum string

const (
	Vlcer400ApplicationJSONErrorEnumMissingParameter Vlcer400ApplicationJSONErrorEnum = "missing_parameter"
	Vlcer400ApplicationJSONErrorEnumInvalidParameter Vlcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Vlcer400ApplicationJSONErrorEnumInvalidFormat    Vlcer400ApplicationJSONErrorEnum = "invalid_format"
	Vlcer400ApplicationJSONErrorEnumInvalidTxnid     Vlcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Vlcer400ApplicationJSONErrorEnumInvalidConsentid Vlcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Vlcer400ApplicationJSONErrorDescriptionEnum string

const (
	Vlcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Vlcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Vlcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Vlcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Vlcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Vlcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Vlcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Vlcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Vlcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Vlcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Vlcer400ApplicationJSON struct {
	Error            *Vlcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vlcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vlcer401ApplicationJSONErrorEnum string

const (
	Vlcer401ApplicationJSONErrorEnumInvalidAuthentication Vlcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Vlcer401ApplicationJSONErrorEnumInvalidAuthorization  Vlcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Vlcer401ApplicationJSONErrorDescriptionEnum string

const (
	Vlcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Vlcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Vlcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Vlcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Vlcer401ApplicationJSON struct {
	Error            *Vlcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vlcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vlcer404ApplicationJSONErrorEnum string

const (
	Vlcer404ApplicationJSONErrorEnumRecordNotFound Vlcer404ApplicationJSONErrorEnum = "record_not_found"
	Vlcer404ApplicationJSONErrorEnumURLNotFound    Vlcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Vlcer404ApplicationJSONErrorDescriptionEnum string

const (
	Vlcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Vlcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Vlcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Vlcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Vlcer404ApplicationJSON struct {
	Error            *Vlcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vlcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vlcer500ApplicationJSONErrorEnum string

const (
	Vlcer500ApplicationJSONErrorEnumInternalServerError Vlcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Vlcer500ApplicationJSONErrorDescriptionEnum string

const (
	Vlcer500ApplicationJSONErrorDescriptionEnumInternalServerError Vlcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Vlcer500ApplicationJSON struct {
	Error            *Vlcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vlcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vlcer502ApplicationJSONErrorEnum string

const (
	Vlcer502ApplicationJSONErrorEnumBadGatewy Vlcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Vlcer502ApplicationJSONErrorDescriptionEnum string

const (
	Vlcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Vlcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Vlcer502ApplicationJSON struct {
	Error            *Vlcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vlcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vlcer503ApplicationJSONErrorEnum string

const (
	Vlcer503ApplicationJSONErrorEnumServiceUnavailable Vlcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Vlcer503ApplicationJSONErrorDescriptionEnum string

const (
	Vlcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Vlcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Vlcer503ApplicationJSON struct {
	Error            *Vlcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vlcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Vlcer504ApplicationJSONErrorEnum string

const (
	Vlcer504ApplicationJSONErrorEnumGatewayTimeout Vlcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Vlcer504ApplicationJSONErrorDescriptionEnum string

const (
	Vlcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Vlcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Vlcer504ApplicationJSON struct {
	Error            *Vlcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Vlcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type VlcerRequest struct {
	Request  *VlcerRequestBody `request:"mediaType=application/json"`
	Security VlcerSecurity
}

type VlcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Vlcer400ApplicationJSONObject *Vlcer400ApplicationJSON
	Vlcer401ApplicationJSONObject *Vlcer401ApplicationJSON
	Vlcer404ApplicationJSONObject *Vlcer404ApplicationJSON
	Vlcer500ApplicationJSONObject *Vlcer500ApplicationJSON
	Vlcer502ApplicationJSONObject *Vlcer502ApplicationJSON
	Vlcer503ApplicationJSONObject *Vlcer503ApplicationJSON
	Vlcer504ApplicationJSONObject *Vlcer504ApplicationJSON
}

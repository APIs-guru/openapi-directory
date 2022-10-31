package operations

import (
	"openapi/pkg/models/shared"
)

type CmcerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type CmcerRequestBodyFormatEnum string

const (
	CmcerRequestBodyFormatEnumPdf CmcerRequestBodyFormatEnum = "pdf"
)

type CmcerRequestBody struct {
	CertificateParameters *CmcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                CmcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type CmcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type CmcerRequest struct {
	Request  *CmcerRequestBody `request:"mediaType=application/json"`
	Security CmcerSecurity
}

type Cmcer400ApplicationJSONErrorEnum string

const (
	Cmcer400ApplicationJSONErrorEnumMissingParameter Cmcer400ApplicationJSONErrorEnum = "missing_parameter"
	Cmcer400ApplicationJSONErrorEnumInvalidParameter Cmcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Cmcer400ApplicationJSONErrorEnumInvalidFormat    Cmcer400ApplicationJSONErrorEnum = "invalid_format"
	Cmcer400ApplicationJSONErrorEnumInvalidTxnid     Cmcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Cmcer400ApplicationJSONErrorEnumInvalidConsentid Cmcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Cmcer400ApplicationJSONErrorDescriptionEnum string

const (
	Cmcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Cmcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Cmcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Cmcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Cmcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Cmcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Cmcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Cmcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Cmcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Cmcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Cmcer400ApplicationJSON struct {
	Error            *Cmcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cmcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cmcer401ApplicationJSONErrorEnum string

const (
	Cmcer401ApplicationJSONErrorEnumInvalidAuthentication Cmcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Cmcer401ApplicationJSONErrorEnumInvalidAuthorization  Cmcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Cmcer401ApplicationJSONErrorDescriptionEnum string

const (
	Cmcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Cmcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Cmcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Cmcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Cmcer401ApplicationJSON struct {
	Error            *Cmcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cmcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cmcer404ApplicationJSONErrorEnum string

const (
	Cmcer404ApplicationJSONErrorEnumRecordNotFound Cmcer404ApplicationJSONErrorEnum = "record_not_found"
	Cmcer404ApplicationJSONErrorEnumURLNotFound    Cmcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Cmcer404ApplicationJSONErrorDescriptionEnum string

const (
	Cmcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Cmcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Cmcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Cmcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Cmcer404ApplicationJSON struct {
	Error            *Cmcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cmcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cmcer500ApplicationJSONErrorEnum string

const (
	Cmcer500ApplicationJSONErrorEnumInternalServerError Cmcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Cmcer500ApplicationJSONErrorDescriptionEnum string

const (
	Cmcer500ApplicationJSONErrorDescriptionEnumInternalServerError Cmcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Cmcer500ApplicationJSON struct {
	Error            *Cmcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cmcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cmcer502ApplicationJSONErrorEnum string

const (
	Cmcer502ApplicationJSONErrorEnumBadGatewy Cmcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Cmcer502ApplicationJSONErrorDescriptionEnum string

const (
	Cmcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Cmcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Cmcer502ApplicationJSON struct {
	Error            *Cmcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cmcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cmcer503ApplicationJSONErrorEnum string

const (
	Cmcer503ApplicationJSONErrorEnumServiceUnavailable Cmcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Cmcer503ApplicationJSONErrorDescriptionEnum string

const (
	Cmcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Cmcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Cmcer503ApplicationJSON struct {
	Error            *Cmcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cmcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cmcer504ApplicationJSONErrorEnum string

const (
	Cmcer504ApplicationJSONErrorEnumGatewayTimeout Cmcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Cmcer504ApplicationJSONErrorDescriptionEnum string

const (
	Cmcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Cmcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Cmcer504ApplicationJSON struct {
	Error            *Cmcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cmcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type CmcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Cmcer400ApplicationJSONObject *Cmcer400ApplicationJSON
	Cmcer401ApplicationJSONObject *Cmcer401ApplicationJSON
	Cmcer404ApplicationJSONObject *Cmcer404ApplicationJSON
	Cmcer500ApplicationJSONObject *Cmcer500ApplicationJSON
	Cmcer502ApplicationJSONObject *Cmcer502ApplicationJSON
	Cmcer503ApplicationJSONObject *Cmcer503ApplicationJSON
	Cmcer504ApplicationJSONObject *Cmcer504ApplicationJSON
}

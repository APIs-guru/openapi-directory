package operations

import (
	"openapi/pkg/models/shared"
)

type DpcerRequestBodyCertificateParameters struct {
	Aplno  string `json:"aplno"`
	Certno string `json:"certno"`
	Sccd   string `json:"sccd"`
}

type DpcerRequestBodyFormatEnum string

const (
	DpcerRequestBodyFormatEnumPdf DpcerRequestBodyFormatEnum = "pdf"
)

type DpcerRequestBody struct {
	CertificateParameters *DpcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                DpcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type DpcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type DpcerRequest struct {
	Request  *DpcerRequestBody `request:"mediaType=application/json"`
	Security DpcerSecurity
}

type Dpcer400ApplicationJSONErrorEnum string

const (
	Dpcer400ApplicationJSONErrorEnumMissingParameter Dpcer400ApplicationJSONErrorEnum = "missing_parameter"
	Dpcer400ApplicationJSONErrorEnumInvalidParameter Dpcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Dpcer400ApplicationJSONErrorEnumInvalidFormat    Dpcer400ApplicationJSONErrorEnum = "invalid_format"
	Dpcer400ApplicationJSONErrorEnumInvalidTxnid     Dpcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Dpcer400ApplicationJSONErrorEnumInvalidConsentid Dpcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Dpcer400ApplicationJSONErrorDescriptionEnum string

const (
	Dpcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Dpcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Dpcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Dpcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Dpcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Dpcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Dpcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Dpcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Dpcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Dpcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Dpcer400ApplicationJSON struct {
	Error            *Dpcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dpcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dpcer401ApplicationJSONErrorEnum string

const (
	Dpcer401ApplicationJSONErrorEnumInvalidAuthentication Dpcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Dpcer401ApplicationJSONErrorEnumInvalidAuthorization  Dpcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Dpcer401ApplicationJSONErrorDescriptionEnum string

const (
	Dpcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Dpcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Dpcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Dpcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Dpcer401ApplicationJSON struct {
	Error            *Dpcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dpcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dpcer404ApplicationJSONErrorEnum string

const (
	Dpcer404ApplicationJSONErrorEnumRecordNotFound Dpcer404ApplicationJSONErrorEnum = "record_not_found"
	Dpcer404ApplicationJSONErrorEnumURLNotFound    Dpcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Dpcer404ApplicationJSONErrorDescriptionEnum string

const (
	Dpcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Dpcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Dpcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Dpcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Dpcer404ApplicationJSON struct {
	Error            *Dpcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dpcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dpcer500ApplicationJSONErrorEnum string

const (
	Dpcer500ApplicationJSONErrorEnumInternalServerError Dpcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Dpcer500ApplicationJSONErrorDescriptionEnum string

const (
	Dpcer500ApplicationJSONErrorDescriptionEnumInternalServerError Dpcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Dpcer500ApplicationJSON struct {
	Error            *Dpcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dpcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dpcer502ApplicationJSONErrorEnum string

const (
	Dpcer502ApplicationJSONErrorEnumBadGatewy Dpcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Dpcer502ApplicationJSONErrorDescriptionEnum string

const (
	Dpcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Dpcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Dpcer502ApplicationJSON struct {
	Error            *Dpcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dpcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dpcer503ApplicationJSONErrorEnum string

const (
	Dpcer503ApplicationJSONErrorEnumServiceUnavailable Dpcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Dpcer503ApplicationJSONErrorDescriptionEnum string

const (
	Dpcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Dpcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Dpcer503ApplicationJSON struct {
	Error            *Dpcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dpcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Dpcer504ApplicationJSONErrorEnum string

const (
	Dpcer504ApplicationJSONErrorEnumGatewayTimeout Dpcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Dpcer504ApplicationJSONErrorDescriptionEnum string

const (
	Dpcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Dpcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Dpcer504ApplicationJSON struct {
	Error            *Dpcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Dpcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type DpcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Dpcer400ApplicationJSONObject *Dpcer400ApplicationJSON
	Dpcer401ApplicationJSONObject *Dpcer401ApplicationJSON
	Dpcer404ApplicationJSONObject *Dpcer404ApplicationJSON
	Dpcer500ApplicationJSONObject *Dpcer500ApplicationJSON
	Dpcer502ApplicationJSONObject *Dpcer502ApplicationJSON
	Dpcer503ApplicationJSONObject *Dpcer503ApplicationJSON
	Dpcer504ApplicationJSONObject *Dpcer504ApplicationJSON
}

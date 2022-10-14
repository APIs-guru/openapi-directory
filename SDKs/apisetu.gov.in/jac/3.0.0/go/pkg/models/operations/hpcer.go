package operations

import (
	"openapi/pkg/models/shared"
)

type HpcerRequestBodyCertificateParameters struct {
	FullName string `json:"FullName"`
	Rollcode string `json:"rollcode"`
	Rollno   string `json:"rollno"`
	Year     string `json:"year"`
}

type HpcerRequestBodyFormatEnum string

const (
	HpcerRequestBodyFormatEnumPdf HpcerRequestBodyFormatEnum = "pdf"
)

type HpcerRequestBody struct {
	CertificateParameters *HpcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                HpcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type HpcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type HpcerRequest struct {
	Request  *HpcerRequestBody `request:"mediaType=application/json"`
	Security HpcerSecurity
}

type Hpcer400ApplicationJSONErrorEnum string

const (
	Hpcer400ApplicationJSONErrorEnumMissingParameter Hpcer400ApplicationJSONErrorEnum = "missing_parameter"
	Hpcer400ApplicationJSONErrorEnumInvalidParameter Hpcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Hpcer400ApplicationJSONErrorEnumInvalidFormat    Hpcer400ApplicationJSONErrorEnum = "invalid_format"
	Hpcer400ApplicationJSONErrorEnumInvalidTxnid     Hpcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Hpcer400ApplicationJSONErrorEnumInvalidConsentid Hpcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Hpcer400ApplicationJSONErrorDescriptionEnum string

const (
	Hpcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Hpcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Hpcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Hpcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Hpcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Hpcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Hpcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Hpcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Hpcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Hpcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Hpcer400ApplicationJSON struct {
	Error            *Hpcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hpcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hpcer401ApplicationJSONErrorEnum string

const (
	Hpcer401ApplicationJSONErrorEnumInvalidAuthentication Hpcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Hpcer401ApplicationJSONErrorEnumInvalidAuthorization  Hpcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Hpcer401ApplicationJSONErrorDescriptionEnum string

const (
	Hpcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Hpcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Hpcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Hpcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Hpcer401ApplicationJSON struct {
	Error            *Hpcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hpcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hpcer404ApplicationJSONErrorEnum string

const (
	Hpcer404ApplicationJSONErrorEnumRecordNotFound Hpcer404ApplicationJSONErrorEnum = "record_not_found"
	Hpcer404ApplicationJSONErrorEnumURLNotFound    Hpcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Hpcer404ApplicationJSONErrorDescriptionEnum string

const (
	Hpcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Hpcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Hpcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Hpcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Hpcer404ApplicationJSON struct {
	Error            *Hpcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hpcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hpcer500ApplicationJSONErrorEnum string

const (
	Hpcer500ApplicationJSONErrorEnumInternalServerError Hpcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Hpcer500ApplicationJSONErrorDescriptionEnum string

const (
	Hpcer500ApplicationJSONErrorDescriptionEnumInternalServerError Hpcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Hpcer500ApplicationJSON struct {
	Error            *Hpcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hpcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hpcer502ApplicationJSONErrorEnum string

const (
	Hpcer502ApplicationJSONErrorEnumBadGatewy Hpcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Hpcer502ApplicationJSONErrorDescriptionEnum string

const (
	Hpcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Hpcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Hpcer502ApplicationJSON struct {
	Error            *Hpcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hpcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hpcer503ApplicationJSONErrorEnum string

const (
	Hpcer503ApplicationJSONErrorEnumServiceUnavailable Hpcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Hpcer503ApplicationJSONErrorDescriptionEnum string

const (
	Hpcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Hpcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Hpcer503ApplicationJSON struct {
	Error            *Hpcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hpcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Hpcer504ApplicationJSONErrorEnum string

const (
	Hpcer504ApplicationJSONErrorEnumGatewayTimeout Hpcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Hpcer504ApplicationJSONErrorDescriptionEnum string

const (
	Hpcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Hpcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Hpcer504ApplicationJSON struct {
	Error            *Hpcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Hpcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type HpcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Hpcer400ApplicationJSONObject *Hpcer400ApplicationJSON
	Hpcer401ApplicationJSONObject *Hpcer401ApplicationJSON
	Hpcer404ApplicationJSONObject *Hpcer404ApplicationJSON
	Hpcer500ApplicationJSONObject *Hpcer500ApplicationJSON
	Hpcer502ApplicationJSONObject *Hpcer502ApplicationJSON
	Hpcer503ApplicationJSONObject *Hpcer503ApplicationJSON
	Hpcer504ApplicationJSONObject *Hpcer504ApplicationJSON
}

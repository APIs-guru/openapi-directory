package operations

import (
	"openapi/pkg/models/shared"
)

type BpcerRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	RegNum   string `json:"RegNum"`
	UID      string `json:"UID"`
}

type BpcerRequestBodyFormatEnum string

const (
	BpcerRequestBodyFormatEnumPdf BpcerRequestBodyFormatEnum = "pdf"
)

type BpcerRequestBody struct {
	CertificateParameters *BpcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                BpcerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type BpcerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type BpcerRequest struct {
	Request  *BpcerRequestBody `request:"mediaType=application/json"`
	Security BpcerSecurity
}

type Bpcer400ApplicationJSONErrorEnum string

const (
	Bpcer400ApplicationJSONErrorEnumMissingParameter Bpcer400ApplicationJSONErrorEnum = "missing_parameter"
	Bpcer400ApplicationJSONErrorEnumInvalidParameter Bpcer400ApplicationJSONErrorEnum = "invalid_parameter"
	Bpcer400ApplicationJSONErrorEnumInvalidFormat    Bpcer400ApplicationJSONErrorEnum = "invalid_format"
	Bpcer400ApplicationJSONErrorEnumInvalidTxnid     Bpcer400ApplicationJSONErrorEnum = "invalid_txnid"
	Bpcer400ApplicationJSONErrorEnumInvalidConsentid Bpcer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Bpcer400ApplicationJSONErrorDescriptionEnum string

const (
	Bpcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Bpcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Bpcer400ApplicationJSONErrorDescriptionEnumBadRequest                              Bpcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Bpcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Bpcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Bpcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Bpcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Bpcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Bpcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Bpcer400ApplicationJSON struct {
	Error            *Bpcer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bpcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bpcer401ApplicationJSONErrorEnum string

const (
	Bpcer401ApplicationJSONErrorEnumInvalidAuthentication Bpcer401ApplicationJSONErrorEnum = "invalid_authentication"
	Bpcer401ApplicationJSONErrorEnumInvalidAuthorization  Bpcer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Bpcer401ApplicationJSONErrorDescriptionEnum string

const (
	Bpcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Bpcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Bpcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Bpcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Bpcer401ApplicationJSON struct {
	Error            *Bpcer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bpcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bpcer404ApplicationJSONErrorEnum string

const (
	Bpcer404ApplicationJSONErrorEnumRecordNotFound Bpcer404ApplicationJSONErrorEnum = "record_not_found"
	Bpcer404ApplicationJSONErrorEnumURLNotFound    Bpcer404ApplicationJSONErrorEnum = "url_not_found"
)

type Bpcer404ApplicationJSONErrorDescriptionEnum string

const (
	Bpcer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Bpcer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Bpcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Bpcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Bpcer404ApplicationJSON struct {
	Error            *Bpcer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bpcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bpcer500ApplicationJSONErrorEnum string

const (
	Bpcer500ApplicationJSONErrorEnumInternalServerError Bpcer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Bpcer500ApplicationJSONErrorDescriptionEnum string

const (
	Bpcer500ApplicationJSONErrorDescriptionEnumInternalServerError Bpcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Bpcer500ApplicationJSON struct {
	Error            *Bpcer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bpcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bpcer502ApplicationJSONErrorEnum string

const (
	Bpcer502ApplicationJSONErrorEnumBadGatewy Bpcer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Bpcer502ApplicationJSONErrorDescriptionEnum string

const (
	Bpcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Bpcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Bpcer502ApplicationJSON struct {
	Error            *Bpcer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bpcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bpcer503ApplicationJSONErrorEnum string

const (
	Bpcer503ApplicationJSONErrorEnumServiceUnavailable Bpcer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Bpcer503ApplicationJSONErrorDescriptionEnum string

const (
	Bpcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Bpcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Bpcer503ApplicationJSON struct {
	Error            *Bpcer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bpcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bpcer504ApplicationJSONErrorEnum string

const (
	Bpcer504ApplicationJSONErrorEnumGatewayTimeout Bpcer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Bpcer504ApplicationJSONErrorDescriptionEnum string

const (
	Bpcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Bpcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Bpcer504ApplicationJSON struct {
	Error            *Bpcer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bpcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type BpcerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Bpcer400ApplicationJSONObject *Bpcer400ApplicationJSON
	Bpcer401ApplicationJSONObject *Bpcer401ApplicationJSON
	Bpcer404ApplicationJSONObject *Bpcer404ApplicationJSON
	Bpcer500ApplicationJSONObject *Bpcer500ApplicationJSON
	Bpcer502ApplicationJSONObject *Bpcer502ApplicationJSON
	Bpcer503ApplicationJSONObject *Bpcer503ApplicationJSON
	Bpcer504ApplicationJSONObject *Bpcer504ApplicationJSON
}

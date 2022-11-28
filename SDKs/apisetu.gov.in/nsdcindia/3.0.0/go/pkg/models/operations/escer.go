package operations

import (
	"openapi/pkg/models/shared"
)

type EscerRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	Docid    string `json:"DOCID"`
	FullName string `json:"FullName"`
}

type EscerRequestBodyFormatEnum string

const (
	EscerRequestBodyFormatEnumPdf EscerRequestBodyFormatEnum = "pdf"
)

type EscerRequestBody struct {
	CertificateParameters *EscerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                EscerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type EscerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Escer400ApplicationJSONErrorEnum string

const (
	Escer400ApplicationJSONErrorEnumMissingParameter Escer400ApplicationJSONErrorEnum = "missing_parameter"
	Escer400ApplicationJSONErrorEnumInvalidParameter Escer400ApplicationJSONErrorEnum = "invalid_parameter"
	Escer400ApplicationJSONErrorEnumInvalidFormat    Escer400ApplicationJSONErrorEnum = "invalid_format"
	Escer400ApplicationJSONErrorEnumInvalidTxnid     Escer400ApplicationJSONErrorEnum = "invalid_txnid"
	Escer400ApplicationJSONErrorEnumInvalidConsentid Escer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Escer400ApplicationJSONErrorDescriptionEnum string

const (
	Escer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Escer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Escer400ApplicationJSONErrorDescriptionEnumBadRequest                              Escer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Escer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Escer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Escer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Escer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Escer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Escer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Escer400ApplicationJSON struct {
	Error            *Escer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Escer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Escer401ApplicationJSONErrorEnum string

const (
	Escer401ApplicationJSONErrorEnumInvalidAuthentication Escer401ApplicationJSONErrorEnum = "invalid_authentication"
	Escer401ApplicationJSONErrorEnumInvalidAuthorization  Escer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Escer401ApplicationJSONErrorDescriptionEnum string

const (
	Escer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Escer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Escer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Escer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Escer401ApplicationJSON struct {
	Error            *Escer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Escer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Escer404ApplicationJSONErrorEnum string

const (
	Escer404ApplicationJSONErrorEnumRecordNotFound Escer404ApplicationJSONErrorEnum = "record_not_found"
	Escer404ApplicationJSONErrorEnumURLNotFound    Escer404ApplicationJSONErrorEnum = "url_not_found"
)

type Escer404ApplicationJSONErrorDescriptionEnum string

const (
	Escer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Escer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Escer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Escer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Escer404ApplicationJSON struct {
	Error            *Escer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Escer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Escer500ApplicationJSONErrorEnum string

const (
	Escer500ApplicationJSONErrorEnumInternalServerError Escer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Escer500ApplicationJSONErrorDescriptionEnum string

const (
	Escer500ApplicationJSONErrorDescriptionEnumInternalServerError Escer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Escer500ApplicationJSON struct {
	Error            *Escer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Escer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Escer502ApplicationJSONErrorEnum string

const (
	Escer502ApplicationJSONErrorEnumBadGatewy Escer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Escer502ApplicationJSONErrorDescriptionEnum string

const (
	Escer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Escer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Escer502ApplicationJSON struct {
	Error            *Escer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Escer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Escer503ApplicationJSONErrorEnum string

const (
	Escer503ApplicationJSONErrorEnumServiceUnavailable Escer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Escer503ApplicationJSONErrorDescriptionEnum string

const (
	Escer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Escer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Escer503ApplicationJSON struct {
	Error            *Escer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Escer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Escer504ApplicationJSONErrorEnum string

const (
	Escer504ApplicationJSONErrorEnumGatewayTimeout Escer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Escer504ApplicationJSONErrorDescriptionEnum string

const (
	Escer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Escer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Escer504ApplicationJSON struct {
	Error            *Escer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Escer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type EscerRequest struct {
	Request  *EscerRequestBody `request:"mediaType=application/json"`
	Security EscerSecurity
}

type EscerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Escer400ApplicationJSONObject *Escer400ApplicationJSON
	Escer401ApplicationJSONObject *Escer401ApplicationJSON
	Escer404ApplicationJSONObject *Escer404ApplicationJSON
	Escer500ApplicationJSONObject *Escer500ApplicationJSON
	Escer502ApplicationJSONObject *Escer502ApplicationJSON
	Escer503ApplicationJSONObject *Escer503ApplicationJSON
	Escer504ApplicationJSONObject *Escer504ApplicationJSON
}

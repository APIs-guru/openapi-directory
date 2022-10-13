package operations

import (
	"openapi/pkg/models/shared"
)

type EgipcRequestBodyCertificateParameters struct {
	CustomerID      string `json:"customer_Id"`
	PolicyNumber    string `json:"policy_Number"`
	PolicyStartDate string `json:"policy_StartDate"`
}

type EgipcRequestBodyFormatEnum string

const (
	EgipcRequestBodyFormatEnumPdf EgipcRequestBodyFormatEnum = "pdf"
)

type EgipcRequestBody struct {
	CertificateParameters *EgipcRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                EgipcRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type EgipcSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type EgipcRequest struct {
	Request  *EgipcRequestBody `request:"mediaType=application/json"`
	Security EgipcSecurity
}

type Egipc400ApplicationJSONErrorEnum string

const (
	Egipc400ApplicationJSONErrorEnumMissingParameter Egipc400ApplicationJSONErrorEnum = "missing_parameter"
	Egipc400ApplicationJSONErrorEnumInvalidParameter Egipc400ApplicationJSONErrorEnum = "invalid_parameter"
	Egipc400ApplicationJSONErrorEnumInvalidFormat    Egipc400ApplicationJSONErrorEnum = "invalid_format"
	Egipc400ApplicationJSONErrorEnumInvalidTxnid     Egipc400ApplicationJSONErrorEnum = "invalid_txnid"
	Egipc400ApplicationJSONErrorEnumInvalidConsentid Egipc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Egipc400ApplicationJSONErrorDescriptionEnum string

const (
	Egipc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Egipc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Egipc400ApplicationJSONErrorDescriptionEnumBadRequest                              Egipc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Egipc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Egipc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Egipc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Egipc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Egipc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Egipc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Egipc400ApplicationJSON struct {
	Error            *Egipc400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Egipc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Egipc401ApplicationJSONErrorEnum string

const (
	Egipc401ApplicationJSONErrorEnumInvalidAuthentication Egipc401ApplicationJSONErrorEnum = "invalid_authentication"
	Egipc401ApplicationJSONErrorEnumInvalidAuthorization  Egipc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Egipc401ApplicationJSONErrorDescriptionEnum string

const (
	Egipc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Egipc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Egipc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Egipc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Egipc401ApplicationJSON struct {
	Error            *Egipc401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Egipc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Egipc404ApplicationJSONErrorEnum string

const (
	Egipc404ApplicationJSONErrorEnumRecordNotFound Egipc404ApplicationJSONErrorEnum = "record_not_found"
	Egipc404ApplicationJSONErrorEnumURLNotFound    Egipc404ApplicationJSONErrorEnum = "url_not_found"
)

type Egipc404ApplicationJSONErrorDescriptionEnum string

const (
	Egipc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Egipc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Egipc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Egipc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Egipc404ApplicationJSON struct {
	Error            *Egipc404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Egipc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Egipc500ApplicationJSONErrorEnum string

const (
	Egipc500ApplicationJSONErrorEnumInternalServerError Egipc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Egipc500ApplicationJSONErrorDescriptionEnum string

const (
	Egipc500ApplicationJSONErrorDescriptionEnumInternalServerError Egipc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Egipc500ApplicationJSON struct {
	Error            *Egipc500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Egipc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Egipc502ApplicationJSONErrorEnum string

const (
	Egipc502ApplicationJSONErrorEnumBadGatewy Egipc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Egipc502ApplicationJSONErrorDescriptionEnum string

const (
	Egipc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Egipc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Egipc502ApplicationJSON struct {
	Error            *Egipc502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Egipc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Egipc503ApplicationJSONErrorEnum string

const (
	Egipc503ApplicationJSONErrorEnumServiceUnavailable Egipc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Egipc503ApplicationJSONErrorDescriptionEnum string

const (
	Egipc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Egipc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Egipc503ApplicationJSON struct {
	Error            *Egipc503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Egipc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Egipc504ApplicationJSONErrorEnum string

const (
	Egipc504ApplicationJSONErrorEnumGatewayTimeout Egipc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Egipc504ApplicationJSONErrorDescriptionEnum string

const (
	Egipc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Egipc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Egipc504ApplicationJSON struct {
	Error            *Egipc504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Egipc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type EgipcResponse struct {
	ContentType                   string
	StatusCode                    int64
	Egipc400ApplicationJSONObject *Egipc400ApplicationJSON
	Egipc401ApplicationJSONObject *Egipc401ApplicationJSON
	Egipc404ApplicationJSONObject *Egipc404ApplicationJSON
	Egipc500ApplicationJSONObject *Egipc500ApplicationJSON
	Egipc502ApplicationJSONObject *Egipc502ApplicationJSON
	Egipc503ApplicationJSONObject *Egipc503ApplicationJSON
	Egipc504ApplicationJSONObject *Egipc504ApplicationJSON
}

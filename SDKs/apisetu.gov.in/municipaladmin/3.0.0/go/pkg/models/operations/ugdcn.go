package operations

import (
	"openapi/pkg/models/shared"
)

type UgdcnRequestBodyCertificateParameters struct {
	DocumentNumber string `json:"DocumentNumber"`
}

type UgdcnRequestBodyFormatEnum string

const (
	UgdcnRequestBodyFormatEnumPdf UgdcnRequestBodyFormatEnum = "pdf"
)

type UgdcnRequestBody struct {
	CertificateParameters *UgdcnRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                UgdcnRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type UgdcnSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type UgdcnRequest struct {
	Request  *UgdcnRequestBody `request:"mediaType=application/json"`
	Security UgdcnSecurity
}

type Ugdcn400ApplicationJSONErrorEnum string

const (
	Ugdcn400ApplicationJSONErrorEnumMissingParameter Ugdcn400ApplicationJSONErrorEnum = "missing_parameter"
	Ugdcn400ApplicationJSONErrorEnumInvalidParameter Ugdcn400ApplicationJSONErrorEnum = "invalid_parameter"
	Ugdcn400ApplicationJSONErrorEnumInvalidFormat    Ugdcn400ApplicationJSONErrorEnum = "invalid_format"
	Ugdcn400ApplicationJSONErrorEnumInvalidTxnid     Ugdcn400ApplicationJSONErrorEnum = "invalid_txnid"
	Ugdcn400ApplicationJSONErrorEnumInvalidConsentid Ugdcn400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Ugdcn400ApplicationJSONErrorDescriptionEnum string

const (
	Ugdcn400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Ugdcn400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Ugdcn400ApplicationJSONErrorDescriptionEnumBadRequest                              Ugdcn400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Ugdcn400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Ugdcn400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Ugdcn400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Ugdcn400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Ugdcn400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ugdcn400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Ugdcn400ApplicationJSON struct {
	Error            *Ugdcn400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ugdcn400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ugdcn401ApplicationJSONErrorEnum string

const (
	Ugdcn401ApplicationJSONErrorEnumInvalidAuthentication Ugdcn401ApplicationJSONErrorEnum = "invalid_authentication"
	Ugdcn401ApplicationJSONErrorEnumInvalidAuthorization  Ugdcn401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Ugdcn401ApplicationJSONErrorDescriptionEnum string

const (
	Ugdcn401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Ugdcn401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Ugdcn401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ugdcn401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Ugdcn401ApplicationJSON struct {
	Error            *Ugdcn401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ugdcn401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ugdcn404ApplicationJSONErrorEnum string

const (
	Ugdcn404ApplicationJSONErrorEnumRecordNotFound Ugdcn404ApplicationJSONErrorEnum = "record_not_found"
	Ugdcn404ApplicationJSONErrorEnumURLNotFound    Ugdcn404ApplicationJSONErrorEnum = "url_not_found"
)

type Ugdcn404ApplicationJSONErrorDescriptionEnum string

const (
	Ugdcn404ApplicationJSONErrorDescriptionEnumNoRecordFound               Ugdcn404ApplicationJSONErrorDescriptionEnum = "No record found"
	Ugdcn404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ugdcn404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Ugdcn404ApplicationJSON struct {
	Error            *Ugdcn404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ugdcn404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ugdcn500ApplicationJSONErrorEnum string

const (
	Ugdcn500ApplicationJSONErrorEnumInternalServerError Ugdcn500ApplicationJSONErrorEnum = "internal_server_error"
)

type Ugdcn500ApplicationJSONErrorDescriptionEnum string

const (
	Ugdcn500ApplicationJSONErrorDescriptionEnumInternalServerError Ugdcn500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Ugdcn500ApplicationJSON struct {
	Error            *Ugdcn500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ugdcn500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ugdcn502ApplicationJSONErrorEnum string

const (
	Ugdcn502ApplicationJSONErrorEnumBadGatewy Ugdcn502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Ugdcn502ApplicationJSONErrorDescriptionEnum string

const (
	Ugdcn502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ugdcn502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Ugdcn502ApplicationJSON struct {
	Error            *Ugdcn502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ugdcn502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ugdcn503ApplicationJSONErrorEnum string

const (
	Ugdcn503ApplicationJSONErrorEnumServiceUnavailable Ugdcn503ApplicationJSONErrorEnum = "service_unavailable"
)

type Ugdcn503ApplicationJSONErrorDescriptionEnum string

const (
	Ugdcn503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ugdcn503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Ugdcn503ApplicationJSON struct {
	Error            *Ugdcn503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ugdcn503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Ugdcn504ApplicationJSONErrorEnum string

const (
	Ugdcn504ApplicationJSONErrorEnumGatewayTimeout Ugdcn504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Ugdcn504ApplicationJSONErrorDescriptionEnum string

const (
	Ugdcn504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ugdcn504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Ugdcn504ApplicationJSON struct {
	Error            *Ugdcn504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Ugdcn504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type UgdcnResponse struct {
	ContentType                   string
	StatusCode                    int64
	Ugdcn400ApplicationJSONObject *Ugdcn400ApplicationJSON
	Ugdcn401ApplicationJSONObject *Ugdcn401ApplicationJSON
	Ugdcn404ApplicationJSONObject *Ugdcn404ApplicationJSON
	Ugdcn500ApplicationJSONObject *Ugdcn500ApplicationJSON
	Ugdcn502ApplicationJSONObject *Ugdcn502ApplicationJSON
	Ugdcn503ApplicationJSONObject *Ugdcn503ApplicationJSON
	Ugdcn504ApplicationJSONObject *Ugdcn504ApplicationJSON
}

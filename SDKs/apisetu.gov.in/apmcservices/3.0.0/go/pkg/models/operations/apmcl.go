package operations

import (
	"openapi/pkg/models/shared"
)

type ApmclRequestBodyCertificateParameters struct {
	DocumentNumber string `json:"DocumentNumber"`
}

type ApmclRequestBodyFormatEnum string

const (
	ApmclRequestBodyFormatEnumPdf ApmclRequestBodyFormatEnum = "pdf"
)

type ApmclRequestBody struct {
	CertificateParameters *ApmclRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                ApmclRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type ApmclSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type ApmclRequest struct {
	Request  *ApmclRequestBody `request:"mediaType=application/json"`
	Security ApmclSecurity
}

type Apmcl400ApplicationJSONErrorEnum string

const (
	Apmcl400ApplicationJSONErrorEnumMissingParameter Apmcl400ApplicationJSONErrorEnum = "missing_parameter"
	Apmcl400ApplicationJSONErrorEnumInvalidParameter Apmcl400ApplicationJSONErrorEnum = "invalid_parameter"
	Apmcl400ApplicationJSONErrorEnumInvalidFormat    Apmcl400ApplicationJSONErrorEnum = "invalid_format"
	Apmcl400ApplicationJSONErrorEnumInvalidTxnid     Apmcl400ApplicationJSONErrorEnum = "invalid_txnid"
	Apmcl400ApplicationJSONErrorEnumInvalidConsentid Apmcl400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Apmcl400ApplicationJSONErrorDescriptionEnum string

const (
	Apmcl400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Apmcl400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Apmcl400ApplicationJSONErrorDescriptionEnumBadRequest                              Apmcl400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Apmcl400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Apmcl400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Apmcl400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Apmcl400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Apmcl400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Apmcl400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Apmcl400ApplicationJSON struct {
	Error            *Apmcl400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Apmcl400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Apmcl401ApplicationJSONErrorEnum string

const (
	Apmcl401ApplicationJSONErrorEnumInvalidAuthentication Apmcl401ApplicationJSONErrorEnum = "invalid_authentication"
	Apmcl401ApplicationJSONErrorEnumInvalidAuthorization  Apmcl401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Apmcl401ApplicationJSONErrorDescriptionEnum string

const (
	Apmcl401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Apmcl401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Apmcl401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Apmcl401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Apmcl401ApplicationJSON struct {
	Error            *Apmcl401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Apmcl401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Apmcl404ApplicationJSONErrorEnum string

const (
	Apmcl404ApplicationJSONErrorEnumRecordNotFound Apmcl404ApplicationJSONErrorEnum = "record_not_found"
	Apmcl404ApplicationJSONErrorEnumURLNotFound    Apmcl404ApplicationJSONErrorEnum = "url_not_found"
)

type Apmcl404ApplicationJSONErrorDescriptionEnum string

const (
	Apmcl404ApplicationJSONErrorDescriptionEnumNoRecordFound               Apmcl404ApplicationJSONErrorDescriptionEnum = "No record found"
	Apmcl404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Apmcl404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Apmcl404ApplicationJSON struct {
	Error            *Apmcl404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Apmcl404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Apmcl500ApplicationJSONErrorEnum string

const (
	Apmcl500ApplicationJSONErrorEnumInternalServerError Apmcl500ApplicationJSONErrorEnum = "internal_server_error"
)

type Apmcl500ApplicationJSONErrorDescriptionEnum string

const (
	Apmcl500ApplicationJSONErrorDescriptionEnumInternalServerError Apmcl500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Apmcl500ApplicationJSON struct {
	Error            *Apmcl500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Apmcl500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Apmcl502ApplicationJSONErrorEnum string

const (
	Apmcl502ApplicationJSONErrorEnumBadGatewy Apmcl502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Apmcl502ApplicationJSONErrorDescriptionEnum string

const (
	Apmcl502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Apmcl502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Apmcl502ApplicationJSON struct {
	Error            *Apmcl502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Apmcl502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Apmcl503ApplicationJSONErrorEnum string

const (
	Apmcl503ApplicationJSONErrorEnumServiceUnavailable Apmcl503ApplicationJSONErrorEnum = "service_unavailable"
)

type Apmcl503ApplicationJSONErrorDescriptionEnum string

const (
	Apmcl503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Apmcl503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Apmcl503ApplicationJSON struct {
	Error            *Apmcl503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Apmcl503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Apmcl504ApplicationJSONErrorEnum string

const (
	Apmcl504ApplicationJSONErrorEnumGatewayTimeout Apmcl504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Apmcl504ApplicationJSONErrorDescriptionEnum string

const (
	Apmcl504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Apmcl504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Apmcl504ApplicationJSON struct {
	Error            *Apmcl504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Apmcl504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type ApmclResponse struct {
	ContentType                   string
	StatusCode                    int64
	Apmcl400ApplicationJSONObject *Apmcl400ApplicationJSON
	Apmcl401ApplicationJSONObject *Apmcl401ApplicationJSON
	Apmcl404ApplicationJSONObject *Apmcl404ApplicationJSON
	Apmcl500ApplicationJSONObject *Apmcl500ApplicationJSON
	Apmcl502ApplicationJSONObject *Apmcl502ApplicationJSON
	Apmcl503ApplicationJSONObject *Apmcl503ApplicationJSON
	Apmcl504ApplicationJSONObject *Apmcl504ApplicationJSON
}

package operations

import (
	"openapi/pkg/models/shared"
)

type CoprgRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type CoprgRequestBodyFormatEnum string

const (
	CoprgRequestBodyFormatEnumPdf CoprgRequestBodyFormatEnum = "pdf"
)

type CoprgRequestBody struct {
	CertificateParameters *CoprgRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                CoprgRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type CoprgSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type CoprgRequest struct {
	Request  *CoprgRequestBody `request:"mediaType=application/json"`
	Security CoprgSecurity
}

type Coprg400ApplicationJSONErrorEnum string

const (
	Coprg400ApplicationJSONErrorEnumMissingParameter Coprg400ApplicationJSONErrorEnum = "missing_parameter"
	Coprg400ApplicationJSONErrorEnumInvalidParameter Coprg400ApplicationJSONErrorEnum = "invalid_parameter"
	Coprg400ApplicationJSONErrorEnumInvalidFormat    Coprg400ApplicationJSONErrorEnum = "invalid_format"
	Coprg400ApplicationJSONErrorEnumInvalidTxnid     Coprg400ApplicationJSONErrorEnum = "invalid_txnid"
	Coprg400ApplicationJSONErrorEnumInvalidConsentid Coprg400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Coprg400ApplicationJSONErrorDescriptionEnum string

const (
	Coprg400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Coprg400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Coprg400ApplicationJSONErrorDescriptionEnumBadRequest                              Coprg400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Coprg400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Coprg400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Coprg400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Coprg400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Coprg400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Coprg400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Coprg400ApplicationJSON struct {
	Error            *Coprg400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Coprg400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Coprg401ApplicationJSONErrorEnum string

const (
	Coprg401ApplicationJSONErrorEnumInvalidAuthentication Coprg401ApplicationJSONErrorEnum = "invalid_authentication"
	Coprg401ApplicationJSONErrorEnumInvalidAuthorization  Coprg401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Coprg401ApplicationJSONErrorDescriptionEnum string

const (
	Coprg401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Coprg401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Coprg401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Coprg401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Coprg401ApplicationJSON struct {
	Error            *Coprg401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Coprg401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Coprg404ApplicationJSONErrorEnum string

const (
	Coprg404ApplicationJSONErrorEnumRecordNotFound Coprg404ApplicationJSONErrorEnum = "record_not_found"
	Coprg404ApplicationJSONErrorEnumURLNotFound    Coprg404ApplicationJSONErrorEnum = "url_not_found"
)

type Coprg404ApplicationJSONErrorDescriptionEnum string

const (
	Coprg404ApplicationJSONErrorDescriptionEnumNoRecordFound               Coprg404ApplicationJSONErrorDescriptionEnum = "No record found"
	Coprg404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Coprg404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Coprg404ApplicationJSON struct {
	Error            *Coprg404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Coprg404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Coprg500ApplicationJSONErrorEnum string

const (
	Coprg500ApplicationJSONErrorEnumInternalServerError Coprg500ApplicationJSONErrorEnum = "internal_server_error"
)

type Coprg500ApplicationJSONErrorDescriptionEnum string

const (
	Coprg500ApplicationJSONErrorDescriptionEnumInternalServerError Coprg500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Coprg500ApplicationJSON struct {
	Error            *Coprg500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Coprg500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Coprg502ApplicationJSONErrorEnum string

const (
	Coprg502ApplicationJSONErrorEnumBadGatewy Coprg502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Coprg502ApplicationJSONErrorDescriptionEnum string

const (
	Coprg502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Coprg502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Coprg502ApplicationJSON struct {
	Error            *Coprg502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Coprg502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Coprg503ApplicationJSONErrorEnum string

const (
	Coprg503ApplicationJSONErrorEnumServiceUnavailable Coprg503ApplicationJSONErrorEnum = "service_unavailable"
)

type Coprg503ApplicationJSONErrorDescriptionEnum string

const (
	Coprg503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Coprg503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Coprg503ApplicationJSON struct {
	Error            *Coprg503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Coprg503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Coprg504ApplicationJSONErrorEnum string

const (
	Coprg504ApplicationJSONErrorEnumGatewayTimeout Coprg504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Coprg504ApplicationJSONErrorDescriptionEnum string

const (
	Coprg504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Coprg504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Coprg504ApplicationJSON struct {
	Error            *Coprg504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Coprg504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type CoprgResponse struct {
	ContentType                   string
	StatusCode                    int64
	Coprg400ApplicationJSONObject *Coprg400ApplicationJSON
	Coprg401ApplicationJSONObject *Coprg401ApplicationJSON
	Coprg404ApplicationJSONObject *Coprg404ApplicationJSON
	Coprg500ApplicationJSONObject *Coprg500ApplicationJSON
	Coprg502ApplicationJSONObject *Coprg502ApplicationJSON
	Coprg503ApplicationJSONObject *Coprg503ApplicationJSON
	Coprg504ApplicationJSONObject *Coprg504ApplicationJSON
}

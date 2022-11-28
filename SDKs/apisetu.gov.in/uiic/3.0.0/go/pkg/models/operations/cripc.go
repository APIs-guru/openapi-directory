package operations

import (
	"openapi/pkg/models/shared"
)

type CripcRequestBodyCertificateParameters struct {
	Dob      string `json:"DOB"`
	FullName string `json:"FullName"`
	Udf1     string `json:"UDF1"`
	Udf2     string `json:"UDF2"`
	Udf3     string `json:"UDF3"`
	UID      string `json:"UID"`
}

type CripcRequestBodyFormatEnum string

const (
	CripcRequestBodyFormatEnumPdf CripcRequestBodyFormatEnum = "pdf"
)

type CripcRequestBody struct {
	CertificateParameters *CripcRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                CripcRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type CripcSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Cripc400ApplicationJSONErrorEnum string

const (
	Cripc400ApplicationJSONErrorEnumMissingParameter Cripc400ApplicationJSONErrorEnum = "missing_parameter"
	Cripc400ApplicationJSONErrorEnumInvalidParameter Cripc400ApplicationJSONErrorEnum = "invalid_parameter"
	Cripc400ApplicationJSONErrorEnumInvalidFormat    Cripc400ApplicationJSONErrorEnum = "invalid_format"
	Cripc400ApplicationJSONErrorEnumInvalidTxnid     Cripc400ApplicationJSONErrorEnum = "invalid_txnid"
	Cripc400ApplicationJSONErrorEnumInvalidConsentid Cripc400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Cripc400ApplicationJSONErrorDescriptionEnum string

const (
	Cripc400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Cripc400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Cripc400ApplicationJSONErrorDescriptionEnumBadRequest                              Cripc400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Cripc400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Cripc400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Cripc400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Cripc400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Cripc400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Cripc400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Cripc400ApplicationJSON struct {
	Error            *Cripc400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cripc400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cripc401ApplicationJSONErrorEnum string

const (
	Cripc401ApplicationJSONErrorEnumInvalidAuthentication Cripc401ApplicationJSONErrorEnum = "invalid_authentication"
	Cripc401ApplicationJSONErrorEnumInvalidAuthorization  Cripc401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Cripc401ApplicationJSONErrorDescriptionEnum string

const (
	Cripc401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Cripc401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Cripc401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Cripc401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Cripc401ApplicationJSON struct {
	Error            *Cripc401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cripc401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cripc404ApplicationJSONErrorEnum string

const (
	Cripc404ApplicationJSONErrorEnumRecordNotFound Cripc404ApplicationJSONErrorEnum = "record_not_found"
	Cripc404ApplicationJSONErrorEnumURLNotFound    Cripc404ApplicationJSONErrorEnum = "url_not_found"
)

type Cripc404ApplicationJSONErrorDescriptionEnum string

const (
	Cripc404ApplicationJSONErrorDescriptionEnumNoRecordFound               Cripc404ApplicationJSONErrorDescriptionEnum = "No record found"
	Cripc404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Cripc404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Cripc404ApplicationJSON struct {
	Error            *Cripc404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cripc404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cripc500ApplicationJSONErrorEnum string

const (
	Cripc500ApplicationJSONErrorEnumInternalServerError Cripc500ApplicationJSONErrorEnum = "internal_server_error"
)

type Cripc500ApplicationJSONErrorDescriptionEnum string

const (
	Cripc500ApplicationJSONErrorDescriptionEnumInternalServerError Cripc500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Cripc500ApplicationJSON struct {
	Error            *Cripc500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cripc500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cripc502ApplicationJSONErrorEnum string

const (
	Cripc502ApplicationJSONErrorEnumBadGatewy Cripc502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Cripc502ApplicationJSONErrorDescriptionEnum string

const (
	Cripc502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Cripc502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Cripc502ApplicationJSON struct {
	Error            *Cripc502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cripc502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cripc503ApplicationJSONErrorEnum string

const (
	Cripc503ApplicationJSONErrorEnumServiceUnavailable Cripc503ApplicationJSONErrorEnum = "service_unavailable"
)

type Cripc503ApplicationJSONErrorDescriptionEnum string

const (
	Cripc503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Cripc503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Cripc503ApplicationJSON struct {
	Error            *Cripc503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cripc503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Cripc504ApplicationJSONErrorEnum string

const (
	Cripc504ApplicationJSONErrorEnumGatewayTimeout Cripc504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Cripc504ApplicationJSONErrorDescriptionEnum string

const (
	Cripc504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Cripc504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Cripc504ApplicationJSON struct {
	Error            *Cripc504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Cripc504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type CripcRequest struct {
	Request  *CripcRequestBody `request:"mediaType=application/json"`
	Security CripcSecurity
}

type CripcResponse struct {
	ContentType                   string
	StatusCode                    int64
	Cripc400ApplicationJSONObject *Cripc400ApplicationJSON
	Cripc401ApplicationJSONObject *Cripc401ApplicationJSON
	Cripc404ApplicationJSONObject *Cripc404ApplicationJSON
	Cripc500ApplicationJSONObject *Cripc500ApplicationJSON
	Cripc502ApplicationJSONObject *Cripc502ApplicationJSON
	Cripc503ApplicationJSONObject *Cripc503ApplicationJSON
	Cripc504ApplicationJSONObject *Cripc504ApplicationJSON
}

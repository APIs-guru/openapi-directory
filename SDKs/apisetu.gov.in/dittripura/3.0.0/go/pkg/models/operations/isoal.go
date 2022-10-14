package operations

import (
	"openapi/pkg/models/shared"
)

type IsoalRequestBodyCertificateParameters struct {
	RefNo   string `json:"RefNo"`
	TokenNo string `json:"TokenNo"`
}

type IsoalRequestBodyFormatEnum string

const (
	IsoalRequestBodyFormatEnumPdf IsoalRequestBodyFormatEnum = "pdf"
)

type IsoalRequestBody struct {
	CertificateParameters *IsoalRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                IsoalRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type IsoalSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type IsoalRequest struct {
	Request  *IsoalRequestBody `request:"mediaType=application/json"`
	Security IsoalSecurity
}

type Isoal400ApplicationJSONErrorEnum string

const (
	Isoal400ApplicationJSONErrorEnumMissingParameter Isoal400ApplicationJSONErrorEnum = "missing_parameter"
	Isoal400ApplicationJSONErrorEnumInvalidParameter Isoal400ApplicationJSONErrorEnum = "invalid_parameter"
	Isoal400ApplicationJSONErrorEnumInvalidFormat    Isoal400ApplicationJSONErrorEnum = "invalid_format"
	Isoal400ApplicationJSONErrorEnumInvalidTxnid     Isoal400ApplicationJSONErrorEnum = "invalid_txnid"
	Isoal400ApplicationJSONErrorEnumInvalidConsentid Isoal400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Isoal400ApplicationJSONErrorDescriptionEnum string

const (
	Isoal400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Isoal400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Isoal400ApplicationJSONErrorDescriptionEnumBadRequest                              Isoal400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Isoal400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Isoal400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Isoal400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Isoal400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Isoal400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Isoal400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Isoal400ApplicationJSON struct {
	Error            *Isoal400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Isoal400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Isoal401ApplicationJSONErrorEnum string

const (
	Isoal401ApplicationJSONErrorEnumInvalidAuthentication Isoal401ApplicationJSONErrorEnum = "invalid_authentication"
	Isoal401ApplicationJSONErrorEnumInvalidAuthorization  Isoal401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Isoal401ApplicationJSONErrorDescriptionEnum string

const (
	Isoal401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Isoal401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Isoal401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Isoal401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Isoal401ApplicationJSON struct {
	Error            *Isoal401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Isoal401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Isoal404ApplicationJSONErrorEnum string

const (
	Isoal404ApplicationJSONErrorEnumRecordNotFound Isoal404ApplicationJSONErrorEnum = "record_not_found"
	Isoal404ApplicationJSONErrorEnumURLNotFound    Isoal404ApplicationJSONErrorEnum = "url_not_found"
)

type Isoal404ApplicationJSONErrorDescriptionEnum string

const (
	Isoal404ApplicationJSONErrorDescriptionEnumNoRecordFound               Isoal404ApplicationJSONErrorDescriptionEnum = "No record found"
	Isoal404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Isoal404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Isoal404ApplicationJSON struct {
	Error            *Isoal404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Isoal404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Isoal500ApplicationJSONErrorEnum string

const (
	Isoal500ApplicationJSONErrorEnumInternalServerError Isoal500ApplicationJSONErrorEnum = "internal_server_error"
)

type Isoal500ApplicationJSONErrorDescriptionEnum string

const (
	Isoal500ApplicationJSONErrorDescriptionEnumInternalServerError Isoal500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Isoal500ApplicationJSON struct {
	Error            *Isoal500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Isoal500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Isoal502ApplicationJSONErrorEnum string

const (
	Isoal502ApplicationJSONErrorEnumBadGatewy Isoal502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Isoal502ApplicationJSONErrorDescriptionEnum string

const (
	Isoal502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Isoal502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Isoal502ApplicationJSON struct {
	Error            *Isoal502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Isoal502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Isoal503ApplicationJSONErrorEnum string

const (
	Isoal503ApplicationJSONErrorEnumServiceUnavailable Isoal503ApplicationJSONErrorEnum = "service_unavailable"
)

type Isoal503ApplicationJSONErrorDescriptionEnum string

const (
	Isoal503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Isoal503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Isoal503ApplicationJSON struct {
	Error            *Isoal503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Isoal503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Isoal504ApplicationJSONErrorEnum string

const (
	Isoal504ApplicationJSONErrorEnumGatewayTimeout Isoal504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Isoal504ApplicationJSONErrorDescriptionEnum string

const (
	Isoal504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Isoal504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Isoal504ApplicationJSON struct {
	Error            *Isoal504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Isoal504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type IsoalResponse struct {
	ContentType                   string
	StatusCode                    int64
	Isoal400ApplicationJSONObject *Isoal400ApplicationJSON
	Isoal401ApplicationJSONObject *Isoal401ApplicationJSON
	Isoal404ApplicationJSONObject *Isoal404ApplicationJSON
	Isoal500ApplicationJSONObject *Isoal500ApplicationJSON
	Isoal502ApplicationJSONObject *Isoal502ApplicationJSON
	Isoal503ApplicationJSONObject *Isoal503ApplicationJSON
	Isoal504ApplicationJSONObject *Isoal504ApplicationJSON
}

package operations

import (
	"openapi/pkg/models/shared"
)

type UncrdRequestBodyCertificateParameters struct {
	Dob string `json:"DOB"`
	Uan string `json:"UAN"`
}

type UncrdRequestBodyFormatEnum string

const (
	UncrdRequestBodyFormatEnumPdf UncrdRequestBodyFormatEnum = "pdf"
)

type UncrdRequestBody struct {
	CertificateParameters *UncrdRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                UncrdRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type UncrdSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Uncrd400ApplicationJSONErrorEnum string

const (
	Uncrd400ApplicationJSONErrorEnumMissingParameter Uncrd400ApplicationJSONErrorEnum = "missing_parameter"
	Uncrd400ApplicationJSONErrorEnumInvalidParameter Uncrd400ApplicationJSONErrorEnum = "invalid_parameter"
	Uncrd400ApplicationJSONErrorEnumInvalidFormat    Uncrd400ApplicationJSONErrorEnum = "invalid_format"
	Uncrd400ApplicationJSONErrorEnumInvalidTxnid     Uncrd400ApplicationJSONErrorEnum = "invalid_txnid"
	Uncrd400ApplicationJSONErrorEnumInvalidConsentid Uncrd400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Uncrd400ApplicationJSONErrorDescriptionEnum string

const (
	Uncrd400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Uncrd400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Uncrd400ApplicationJSONErrorDescriptionEnumBadRequest                              Uncrd400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Uncrd400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Uncrd400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Uncrd400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Uncrd400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Uncrd400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Uncrd400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Uncrd400ApplicationJSON struct {
	Error            *Uncrd400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Uncrd400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Uncrd401ApplicationJSONErrorEnum string

const (
	Uncrd401ApplicationJSONErrorEnumInvalidAuthentication Uncrd401ApplicationJSONErrorEnum = "invalid_authentication"
	Uncrd401ApplicationJSONErrorEnumInvalidAuthorization  Uncrd401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Uncrd401ApplicationJSONErrorDescriptionEnum string

const (
	Uncrd401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Uncrd401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Uncrd401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Uncrd401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Uncrd401ApplicationJSON struct {
	Error            *Uncrd401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Uncrd401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Uncrd404ApplicationJSONErrorEnum string

const (
	Uncrd404ApplicationJSONErrorEnumRecordNotFound Uncrd404ApplicationJSONErrorEnum = "record_not_found"
	Uncrd404ApplicationJSONErrorEnumURLNotFound    Uncrd404ApplicationJSONErrorEnum = "url_not_found"
)

type Uncrd404ApplicationJSONErrorDescriptionEnum string

const (
	Uncrd404ApplicationJSONErrorDescriptionEnumNoRecordFound               Uncrd404ApplicationJSONErrorDescriptionEnum = "No record found"
	Uncrd404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Uncrd404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Uncrd404ApplicationJSON struct {
	Error            *Uncrd404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Uncrd404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Uncrd500ApplicationJSONErrorEnum string

const (
	Uncrd500ApplicationJSONErrorEnumInternalServerError Uncrd500ApplicationJSONErrorEnum = "internal_server_error"
)

type Uncrd500ApplicationJSONErrorDescriptionEnum string

const (
	Uncrd500ApplicationJSONErrorDescriptionEnumInternalServerError Uncrd500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Uncrd500ApplicationJSON struct {
	Error            *Uncrd500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Uncrd500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Uncrd502ApplicationJSONErrorEnum string

const (
	Uncrd502ApplicationJSONErrorEnumBadGatewy Uncrd502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Uncrd502ApplicationJSONErrorDescriptionEnum string

const (
	Uncrd502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Uncrd502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Uncrd502ApplicationJSON struct {
	Error            *Uncrd502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Uncrd502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Uncrd503ApplicationJSONErrorEnum string

const (
	Uncrd503ApplicationJSONErrorEnumServiceUnavailable Uncrd503ApplicationJSONErrorEnum = "service_unavailable"
)

type Uncrd503ApplicationJSONErrorDescriptionEnum string

const (
	Uncrd503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Uncrd503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Uncrd503ApplicationJSON struct {
	Error            *Uncrd503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Uncrd503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Uncrd504ApplicationJSONErrorEnum string

const (
	Uncrd504ApplicationJSONErrorEnumGatewayTimeout Uncrd504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Uncrd504ApplicationJSONErrorDescriptionEnum string

const (
	Uncrd504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Uncrd504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Uncrd504ApplicationJSON struct {
	Error            *Uncrd504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Uncrd504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type UncrdRequest struct {
	Request  *UncrdRequestBody `request:"mediaType=application/json"`
	Security UncrdSecurity
}

type UncrdResponse struct {
	ContentType                   string
	StatusCode                    int64
	Uncrd400ApplicationJSONObject *Uncrd400ApplicationJSON
	Uncrd401ApplicationJSONObject *Uncrd401ApplicationJSON
	Uncrd404ApplicationJSONObject *Uncrd404ApplicationJSON
	Uncrd500ApplicationJSONObject *Uncrd500ApplicationJSON
	Uncrd502ApplicationJSONObject *Uncrd502ApplicationJSON
	Uncrd503ApplicationJSONObject *Uncrd503ApplicationJSON
	Uncrd504ApplicationJSONObject *Uncrd504ApplicationJSON
}

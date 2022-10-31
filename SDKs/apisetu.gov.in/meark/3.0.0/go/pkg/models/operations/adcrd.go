package operations

import (
	"openapi/pkg/models/shared"
)

type AdcrdRequestBodyCertificateParameters struct {
	Dob       string `json:"DOB"`
	PrnNo     string `json:"PrnNo"`
	RequestID string `json:"RequestId"`
}

type AdcrdRequestBodyFormatEnum string

const (
	AdcrdRequestBodyFormatEnumXML AdcrdRequestBodyFormatEnum = "xml"
	AdcrdRequestBodyFormatEnumPdf AdcrdRequestBodyFormatEnum = "pdf"
)

type AdcrdRequestBody struct {
	CertificateParameters *AdcrdRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                AdcrdRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type AdcrdSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type AdcrdRequest struct {
	Request  *AdcrdRequestBody `request:"mediaType=application/json"`
	Security AdcrdSecurity
}

type Adcrd400ApplicationJSONErrorEnum string

const (
	Adcrd400ApplicationJSONErrorEnumMissingParameter Adcrd400ApplicationJSONErrorEnum = "missing_parameter"
	Adcrd400ApplicationJSONErrorEnumInvalidParameter Adcrd400ApplicationJSONErrorEnum = "invalid_parameter"
	Adcrd400ApplicationJSONErrorEnumInvalidFormat    Adcrd400ApplicationJSONErrorEnum = "invalid_format"
	Adcrd400ApplicationJSONErrorEnumInvalidTxnid     Adcrd400ApplicationJSONErrorEnum = "invalid_txnid"
	Adcrd400ApplicationJSONErrorEnumInvalidConsentid Adcrd400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Adcrd400ApplicationJSONErrorDescriptionEnum string

const (
	Adcrd400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Adcrd400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Adcrd400ApplicationJSONErrorDescriptionEnumBadRequest                              Adcrd400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Adcrd400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Adcrd400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Adcrd400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Adcrd400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Adcrd400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Adcrd400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Adcrd400ApplicationJSON struct {
	Error            *Adcrd400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Adcrd400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Adcrd401ApplicationJSONErrorEnum string

const (
	Adcrd401ApplicationJSONErrorEnumInvalidAuthentication Adcrd401ApplicationJSONErrorEnum = "invalid_authentication"
	Adcrd401ApplicationJSONErrorEnumInvalidAuthorization  Adcrd401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Adcrd401ApplicationJSONErrorDescriptionEnum string

const (
	Adcrd401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Adcrd401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Adcrd401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Adcrd401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Adcrd401ApplicationJSON struct {
	Error            *Adcrd401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Adcrd401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Adcrd404ApplicationJSONErrorEnum string

const (
	Adcrd404ApplicationJSONErrorEnumRecordNotFound Adcrd404ApplicationJSONErrorEnum = "record_not_found"
	Adcrd404ApplicationJSONErrorEnumURLNotFound    Adcrd404ApplicationJSONErrorEnum = "url_not_found"
)

type Adcrd404ApplicationJSONErrorDescriptionEnum string

const (
	Adcrd404ApplicationJSONErrorDescriptionEnumNoRecordFound               Adcrd404ApplicationJSONErrorDescriptionEnum = "No record found"
	Adcrd404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Adcrd404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Adcrd404ApplicationJSON struct {
	Error            *Adcrd404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Adcrd404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Adcrd500ApplicationJSONErrorEnum string

const (
	Adcrd500ApplicationJSONErrorEnumInternalServerError Adcrd500ApplicationJSONErrorEnum = "internal_server_error"
)

type Adcrd500ApplicationJSONErrorDescriptionEnum string

const (
	Adcrd500ApplicationJSONErrorDescriptionEnumInternalServerError Adcrd500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Adcrd500ApplicationJSON struct {
	Error            *Adcrd500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Adcrd500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Adcrd502ApplicationJSONErrorEnum string

const (
	Adcrd502ApplicationJSONErrorEnumBadGatewy Adcrd502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Adcrd502ApplicationJSONErrorDescriptionEnum string

const (
	Adcrd502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Adcrd502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Adcrd502ApplicationJSON struct {
	Error            *Adcrd502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Adcrd502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Adcrd503ApplicationJSONErrorEnum string

const (
	Adcrd503ApplicationJSONErrorEnumServiceUnavailable Adcrd503ApplicationJSONErrorEnum = "service_unavailable"
)

type Adcrd503ApplicationJSONErrorDescriptionEnum string

const (
	Adcrd503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Adcrd503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Adcrd503ApplicationJSON struct {
	Error            *Adcrd503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Adcrd503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Adcrd504ApplicationJSONErrorEnum string

const (
	Adcrd504ApplicationJSONErrorEnumGatewayTimeout Adcrd504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Adcrd504ApplicationJSONErrorDescriptionEnum string

const (
	Adcrd504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Adcrd504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Adcrd504ApplicationJSON struct {
	Error            *Adcrd504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Adcrd504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type AdcrdResponse struct {
	Body                          []byte
	ContentType                   string
	StatusCode                    int64
	Adcrd400ApplicationJSONObject *Adcrd400ApplicationJSON
	Adcrd401ApplicationJSONObject *Adcrd401ApplicationJSON
	Adcrd404ApplicationJSONObject *Adcrd404ApplicationJSON
	Adcrd500ApplicationJSONObject *Adcrd500ApplicationJSON
	Adcrd502ApplicationJSONObject *Adcrd502ApplicationJSON
	Adcrd503ApplicationJSONObject *Adcrd503ApplicationJSON
	Adcrd504ApplicationJSONObject *Adcrd504ApplicationJSON
}

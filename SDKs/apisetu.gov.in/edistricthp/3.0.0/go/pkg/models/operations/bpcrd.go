package operations

import (
	"openapi/pkg/models/shared"
)

type BpcrdRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type BpcrdRequestBodyFormatEnum string

const (
	BpcrdRequestBodyFormatEnumPdf BpcrdRequestBodyFormatEnum = "pdf"
)

type BpcrdRequestBody struct {
	CertificateParameters *BpcrdRequestBodyCertificateParameters `json:"certificateParameters"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact"`
	Format                BpcrdRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type BpcrdSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type BpcrdRequest struct {
	Request  *BpcrdRequestBody `request:"mediaType=application/json"`
	Security BpcrdSecurity
}

type Bpcrd400ApplicationJSONErrorEnum string

const (
	Bpcrd400ApplicationJSONErrorEnumMissingParameter Bpcrd400ApplicationJSONErrorEnum = "missing_parameter"
	Bpcrd400ApplicationJSONErrorEnumInvalidParameter Bpcrd400ApplicationJSONErrorEnum = "invalid_parameter"
	Bpcrd400ApplicationJSONErrorEnumInvalidFormat    Bpcrd400ApplicationJSONErrorEnum = "invalid_format"
	Bpcrd400ApplicationJSONErrorEnumInvalidTxnid     Bpcrd400ApplicationJSONErrorEnum = "invalid_txnid"
	Bpcrd400ApplicationJSONErrorEnumInvalidConsentid Bpcrd400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Bpcrd400ApplicationJSONErrorDescriptionEnum string

const (
	Bpcrd400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Bpcrd400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Bpcrd400ApplicationJSONErrorDescriptionEnumBadRequest                              Bpcrd400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Bpcrd400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Bpcrd400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Bpcrd400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Bpcrd400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Bpcrd400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Bpcrd400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Bpcrd400ApplicationJSON struct {
	Error            *Bpcrd400ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Bpcrd400ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Bpcrd401ApplicationJSONErrorEnum string

const (
	Bpcrd401ApplicationJSONErrorEnumInvalidAuthentication Bpcrd401ApplicationJSONErrorEnum = "invalid_authentication"
	Bpcrd401ApplicationJSONErrorEnumInvalidAuthorization  Bpcrd401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Bpcrd401ApplicationJSONErrorDescriptionEnum string

const (
	Bpcrd401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Bpcrd401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Bpcrd401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Bpcrd401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Bpcrd401ApplicationJSON struct {
	Error            *Bpcrd401ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Bpcrd401ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Bpcrd404ApplicationJSONErrorEnum string

const (
	Bpcrd404ApplicationJSONErrorEnumRecordNotFound Bpcrd404ApplicationJSONErrorEnum = "record_not_found"
	Bpcrd404ApplicationJSONErrorEnumURLNotFound    Bpcrd404ApplicationJSONErrorEnum = "url_not_found"
)

type Bpcrd404ApplicationJSONErrorDescriptionEnum string

const (
	Bpcrd404ApplicationJSONErrorDescriptionEnumNoRecordFound               Bpcrd404ApplicationJSONErrorDescriptionEnum = "No record found"
	Bpcrd404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Bpcrd404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Bpcrd404ApplicationJSON struct {
	Error            *Bpcrd404ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Bpcrd404ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Bpcrd500ApplicationJSONErrorEnum string

const (
	Bpcrd500ApplicationJSONErrorEnumInternalServerError Bpcrd500ApplicationJSONErrorEnum = "internal_server_error"
)

type Bpcrd500ApplicationJSONErrorDescriptionEnum string

const (
	Bpcrd500ApplicationJSONErrorDescriptionEnumInternalServerError Bpcrd500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Bpcrd500ApplicationJSON struct {
	Error            *Bpcrd500ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Bpcrd500ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Bpcrd502ApplicationJSONErrorEnum string

const (
	Bpcrd502ApplicationJSONErrorEnumBadGatewy Bpcrd502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Bpcrd502ApplicationJSONErrorDescriptionEnum string

const (
	Bpcrd502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Bpcrd502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Bpcrd502ApplicationJSON struct {
	Error            *Bpcrd502ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Bpcrd502ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Bpcrd503ApplicationJSONErrorEnum string

const (
	Bpcrd503ApplicationJSONErrorEnumServiceUnavailable Bpcrd503ApplicationJSONErrorEnum = "service_unavailable"
)

type Bpcrd503ApplicationJSONErrorDescriptionEnum string

const (
	Bpcrd503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Bpcrd503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Bpcrd503ApplicationJSON struct {
	Error            *Bpcrd503ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Bpcrd503ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type Bpcrd504ApplicationJSONErrorEnum string

const (
	Bpcrd504ApplicationJSONErrorEnumGatewayTimeout Bpcrd504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Bpcrd504ApplicationJSONErrorDescriptionEnum string

const (
	Bpcrd504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Bpcrd504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Bpcrd504ApplicationJSON struct {
	Error            *Bpcrd504ApplicationJSONErrorEnum            `json:"error"`
	ErrorDescription *Bpcrd504ApplicationJSONErrorDescriptionEnum `json:"errorDescription"`
}

type BpcrdResponse struct {
	ContentType                   string
	StatusCode                    int64
	Bpcrd400ApplicationJSONObject *Bpcrd400ApplicationJSON
	Bpcrd401ApplicationJSONObject *Bpcrd401ApplicationJSON
	Bpcrd404ApplicationJSONObject *Bpcrd404ApplicationJSON
	Bpcrd500ApplicationJSONObject *Bpcrd500ApplicationJSON
	Bpcrd502ApplicationJSONObject *Bpcrd502ApplicationJSON
	Bpcrd503ApplicationJSONObject *Bpcrd503ApplicationJSON
	Bpcrd504ApplicationJSONObject *Bpcrd504ApplicationJSON
}

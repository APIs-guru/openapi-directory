package operations

import (
	"openapi/pkg/models/shared"
)

type PrfndRequestBodyCertificateParameters struct {
	AcNo string `json:"AC_NO"`
	Dob  string `json:"DOB"`
}

type PrfndRequestBodyFormatEnum string

const (
	PrfndRequestBodyFormatEnumPdf PrfndRequestBodyFormatEnum = "pdf"
)

type PrfndRequestBody struct {
	CertificateParameters *PrfndRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                PrfndRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type PrfndSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Prfnd400ApplicationJSONErrorEnum string

const (
	Prfnd400ApplicationJSONErrorEnumMissingParameter Prfnd400ApplicationJSONErrorEnum = "missing_parameter"
	Prfnd400ApplicationJSONErrorEnumInvalidParameter Prfnd400ApplicationJSONErrorEnum = "invalid_parameter"
	Prfnd400ApplicationJSONErrorEnumInvalidFormat    Prfnd400ApplicationJSONErrorEnum = "invalid_format"
	Prfnd400ApplicationJSONErrorEnumInvalidTxnid     Prfnd400ApplicationJSONErrorEnum = "invalid_txnid"
	Prfnd400ApplicationJSONErrorEnumInvalidConsentid Prfnd400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Prfnd400ApplicationJSONErrorDescriptionEnum string

const (
	Prfnd400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Prfnd400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Prfnd400ApplicationJSONErrorDescriptionEnumBadRequest                              Prfnd400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Prfnd400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Prfnd400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Prfnd400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Prfnd400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Prfnd400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Prfnd400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Prfnd400ApplicationJSON struct {
	Error            *Prfnd400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prfnd400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prfnd401ApplicationJSONErrorEnum string

const (
	Prfnd401ApplicationJSONErrorEnumInvalidAuthentication Prfnd401ApplicationJSONErrorEnum = "invalid_authentication"
	Prfnd401ApplicationJSONErrorEnumInvalidAuthorization  Prfnd401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Prfnd401ApplicationJSONErrorDescriptionEnum string

const (
	Prfnd401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Prfnd401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Prfnd401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Prfnd401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Prfnd401ApplicationJSON struct {
	Error            *Prfnd401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prfnd401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prfnd404ApplicationJSONErrorEnum string

const (
	Prfnd404ApplicationJSONErrorEnumRecordNotFound Prfnd404ApplicationJSONErrorEnum = "record_not_found"
	Prfnd404ApplicationJSONErrorEnumURLNotFound    Prfnd404ApplicationJSONErrorEnum = "url_not_found"
)

type Prfnd404ApplicationJSONErrorDescriptionEnum string

const (
	Prfnd404ApplicationJSONErrorDescriptionEnumNoRecordFound               Prfnd404ApplicationJSONErrorDescriptionEnum = "No record found"
	Prfnd404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Prfnd404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Prfnd404ApplicationJSON struct {
	Error            *Prfnd404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prfnd404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prfnd500ApplicationJSONErrorEnum string

const (
	Prfnd500ApplicationJSONErrorEnumInternalServerError Prfnd500ApplicationJSONErrorEnum = "internal_server_error"
)

type Prfnd500ApplicationJSONErrorDescriptionEnum string

const (
	Prfnd500ApplicationJSONErrorDescriptionEnumInternalServerError Prfnd500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Prfnd500ApplicationJSON struct {
	Error            *Prfnd500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prfnd500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prfnd502ApplicationJSONErrorEnum string

const (
	Prfnd502ApplicationJSONErrorEnumBadGatewy Prfnd502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Prfnd502ApplicationJSONErrorDescriptionEnum string

const (
	Prfnd502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Prfnd502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Prfnd502ApplicationJSON struct {
	Error            *Prfnd502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prfnd502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prfnd503ApplicationJSONErrorEnum string

const (
	Prfnd503ApplicationJSONErrorEnumServiceUnavailable Prfnd503ApplicationJSONErrorEnum = "service_unavailable"
)

type Prfnd503ApplicationJSONErrorDescriptionEnum string

const (
	Prfnd503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Prfnd503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Prfnd503ApplicationJSON struct {
	Error            *Prfnd503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prfnd503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Prfnd504ApplicationJSONErrorEnum string

const (
	Prfnd504ApplicationJSONErrorEnumGatewayTimeout Prfnd504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Prfnd504ApplicationJSONErrorDescriptionEnum string

const (
	Prfnd504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Prfnd504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Prfnd504ApplicationJSON struct {
	Error            *Prfnd504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Prfnd504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type PrfndRequest struct {
	Request  *PrfndRequestBody `request:"mediaType=application/json"`
	Security PrfndSecurity
}

type PrfndResponse struct {
	ContentType                   string
	StatusCode                    int64
	Prfnd400ApplicationJSONObject *Prfnd400ApplicationJSON
	Prfnd401ApplicationJSONObject *Prfnd401ApplicationJSON
	Prfnd404ApplicationJSONObject *Prfnd404ApplicationJSON
	Prfnd500ApplicationJSONObject *Prfnd500ApplicationJSON
	Prfnd502ApplicationJSONObject *Prfnd502ApplicationJSON
	Prfnd503ApplicationJSONObject *Prfnd503ApplicationJSON
	Prfnd504ApplicationJSONObject *Prfnd504ApplicationJSON
}

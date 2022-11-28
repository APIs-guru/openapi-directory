package operations

import (
	"openapi/pkg/models/shared"
)

type BacerRequestBodyCertificateParameters struct {
	Udf1 string `json:"UDF1"`
}

type BacerRequestBodyFormatEnum string

const (
	BacerRequestBodyFormatEnumPdf BacerRequestBodyFormatEnum = "pdf"
)

type BacerRequestBody struct {
	CertificateParameters *BacerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
	ConsentArtifact       *interface{}                           `json:"consentArtifact,omitempty"`
	Format                BacerRequestBodyFormatEnum             `json:"format"`
	TxnID                 string                                 `json:"txnId"`
}

type BacerSecurity struct {
	APIKey   shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type Bacer400ApplicationJSONErrorEnum string

const (
	Bacer400ApplicationJSONErrorEnumMissingParameter Bacer400ApplicationJSONErrorEnum = "missing_parameter"
	Bacer400ApplicationJSONErrorEnumInvalidParameter Bacer400ApplicationJSONErrorEnum = "invalid_parameter"
	Bacer400ApplicationJSONErrorEnumInvalidFormat    Bacer400ApplicationJSONErrorEnum = "invalid_format"
	Bacer400ApplicationJSONErrorEnumInvalidTxnid     Bacer400ApplicationJSONErrorEnum = "invalid_txnid"
	Bacer400ApplicationJSONErrorEnumInvalidConsentid Bacer400ApplicationJSONErrorEnum = "invalid_consentid"
)

type Bacer400ApplicationJSONErrorDescriptionEnum string

const (
	Bacer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters     Bacer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
	Bacer400ApplicationJSONErrorDescriptionEnumBadRequest                              Bacer400ApplicationJSONErrorDescriptionEnum = "Bad request"
	Bacer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid             Bacer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
	Bacer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat     Bacer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
	Bacer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Bacer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)

type Bacer400ApplicationJSON struct {
	Error            *Bacer400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bacer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bacer401ApplicationJSONErrorEnum string

const (
	Bacer401ApplicationJSONErrorEnumInvalidAuthentication Bacer401ApplicationJSONErrorEnum = "invalid_authentication"
	Bacer401ApplicationJSONErrorEnumInvalidAuthorization  Bacer401ApplicationJSONErrorEnum = "invalid_authorization"
)

type Bacer401ApplicationJSONErrorDescriptionEnum string

const (
	Bacer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            Bacer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	Bacer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Bacer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type Bacer401ApplicationJSON struct {
	Error            *Bacer401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bacer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bacer404ApplicationJSONErrorEnum string

const (
	Bacer404ApplicationJSONErrorEnumRecordNotFound Bacer404ApplicationJSONErrorEnum = "record_not_found"
	Bacer404ApplicationJSONErrorEnumURLNotFound    Bacer404ApplicationJSONErrorEnum = "url_not_found"
)

type Bacer404ApplicationJSONErrorDescriptionEnum string

const (
	Bacer404ApplicationJSONErrorDescriptionEnumNoRecordFound               Bacer404ApplicationJSONErrorDescriptionEnum = "No record found"
	Bacer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Bacer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)

type Bacer404ApplicationJSON struct {
	Error            *Bacer404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bacer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bacer500ApplicationJSONErrorEnum string

const (
	Bacer500ApplicationJSONErrorEnumInternalServerError Bacer500ApplicationJSONErrorEnum = "internal_server_error"
)

type Bacer500ApplicationJSONErrorDescriptionEnum string

const (
	Bacer500ApplicationJSONErrorDescriptionEnumInternalServerError Bacer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type Bacer500ApplicationJSON struct {
	Error            *Bacer500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bacer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bacer502ApplicationJSONErrorEnum string

const (
	Bacer502ApplicationJSONErrorEnumBadGatewy Bacer502ApplicationJSONErrorEnum = "bad_gatewy"
)

type Bacer502ApplicationJSONErrorDescriptionEnum string

const (
	Bacer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Bacer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)

type Bacer502ApplicationJSON struct {
	Error            *Bacer502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bacer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bacer503ApplicationJSONErrorEnum string

const (
	Bacer503ApplicationJSONErrorEnumServiceUnavailable Bacer503ApplicationJSONErrorEnum = "service_unavailable"
)

type Bacer503ApplicationJSONErrorDescriptionEnum string

const (
	Bacer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Bacer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type Bacer503ApplicationJSON struct {
	Error            *Bacer503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bacer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type Bacer504ApplicationJSONErrorEnum string

const (
	Bacer504ApplicationJSONErrorEnumGatewayTimeout Bacer504ApplicationJSONErrorEnum = "gateway_timeout"
)

type Bacer504ApplicationJSONErrorDescriptionEnum string

const (
	Bacer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Bacer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type Bacer504ApplicationJSON struct {
	Error            *Bacer504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *Bacer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type BacerRequest struct {
	Request  *BacerRequestBody `request:"mediaType=application/json"`
	Security BacerSecurity
}

type BacerResponse struct {
	ContentType                   string
	StatusCode                    int64
	Bacer400ApplicationJSONObject *Bacer400ApplicationJSON
	Bacer401ApplicationJSONObject *Bacer401ApplicationJSON
	Bacer404ApplicationJSONObject *Bacer404ApplicationJSON
	Bacer500ApplicationJSONObject *Bacer500ApplicationJSON
	Bacer502ApplicationJSONObject *Bacer502ApplicationJSON
	Bacer503ApplicationJSONObject *Bacer503ApplicationJSON
	Bacer504ApplicationJSONObject *Bacer504ApplicationJSON
}

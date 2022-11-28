package operations

import (
	"openapi/pkg/models/shared"
	"time"
)

type ImporterExporterCodeVerificationAPIPathParams struct {
	Iec string `pathParam:"style=simple,explode=false,name=iec"`
}

type ImporterExporterCodeVerificationAPISecurity struct {
	APIKey   *shared.SchemeAPIKey   `security:"scheme,type=apiKey,subtype=header"`
	ClientID *shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
}

type ImporterExporterCodeVerificationAPI200ApplicationJSON struct {
	AddressLine1        string        `json:"addressLine1"`
	AddressLine2        string        `json:"addressLine2"`
	Branch              []interface{} `json:"branch"`
	City                string        `json:"city"`
	DataAsOn            time.Time     `json:"dataAsOn"`
	Directors           []interface{} `json:"directors"`
	EntityName          string        `json:"entityName"`
	ExporterType        string        `json:"exporterType"`
	Iec                 string        `json:"iec"`
	IecIssueDate        string        `json:"iecIssueDate"`
	IecModificationDate string        `json:"iecModificationDate"`
	IecStatus           string        `json:"iecStatus"`
	NatureOfConcern     string        `json:"natureOfConcern"`
	Pan                 string        `json:"pan"`
	Pin                 string        `json:"pin"`
	State               string        `json:"state"`
}

type ImporterExporterCodeVerificationAPI400ApplicationJSONErrorEnum string

const (
	ImporterExporterCodeVerificationAPI400ApplicationJSONErrorEnumInvalidParameter ImporterExporterCodeVerificationAPI400ApplicationJSONErrorEnum = "invalid parameter"
	ImporterExporterCodeVerificationAPI400ApplicationJSONErrorEnumMissingParameter ImporterExporterCodeVerificationAPI400ApplicationJSONErrorEnum = "missing parameter"
)

type ImporterExporterCodeVerificationAPI400ApplicationJSONErrorDescriptionEnum string

const (
	ImporterExporterCodeVerificationAPI400ApplicationJSONErrorDescriptionEnumBadRequest                          ImporterExporterCodeVerificationAPI400ApplicationJSONErrorDescriptionEnum = "Bad request"
	ImporterExporterCodeVerificationAPI400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters ImporterExporterCodeVerificationAPI400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters."
)

type ImporterExporterCodeVerificationAPI400ApplicationJSON struct {
	Error            *ImporterExporterCodeVerificationAPI400ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *ImporterExporterCodeVerificationAPI400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ImporterExporterCodeVerificationAPI401ApplicationJSONErrorEnum string

const (
	ImporterExporterCodeVerificationAPI401ApplicationJSONErrorEnumInvalidAuthentication ImporterExporterCodeVerificationAPI401ApplicationJSONErrorEnum = "invalid_authentication"
	ImporterExporterCodeVerificationAPI401ApplicationJSONErrorEnumInvalidAuthorization  ImporterExporterCodeVerificationAPI401ApplicationJSONErrorEnum = "invalid_authorization"
)

type ImporterExporterCodeVerificationAPI401ApplicationJSONErrorDescriptionEnum string

const (
	ImporterExporterCodeVerificationAPI401ApplicationJSONErrorDescriptionEnumAuthenticationFailed            ImporterExporterCodeVerificationAPI401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
	ImporterExporterCodeVerificationAPI401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI ImporterExporterCodeVerificationAPI401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)

type ImporterExporterCodeVerificationAPI401ApplicationJSON struct {
	Error            *ImporterExporterCodeVerificationAPI401ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *ImporterExporterCodeVerificationAPI401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ImporterExporterCodeVerificationAPI404ApplicationJSONErrorEnum string

const (
	ImporterExporterCodeVerificationAPI404ApplicationJSONErrorEnumRecordNotFound ImporterExporterCodeVerificationAPI404ApplicationJSONErrorEnum = "record_not_found"
	ImporterExporterCodeVerificationAPI404ApplicationJSONErrorEnumURLNotFound    ImporterExporterCodeVerificationAPI404ApplicationJSONErrorEnum = "Url not found"
)

type ImporterExporterCodeVerificationAPI404ApplicationJSONErrorDescriptionEnum string

const (
	ImporterExporterCodeVerificationAPI404ApplicationJSONErrorDescriptionEnumNoRecordFound               ImporterExporterCodeVerificationAPI404ApplicationJSONErrorDescriptionEnum = "No record found"
	ImporterExporterCodeVerificationAPI404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect ImporterExporterCodeVerificationAPI404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect."
)

type ImporterExporterCodeVerificationAPI404ApplicationJSON struct {
	Error            *ImporterExporterCodeVerificationAPI404ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *ImporterExporterCodeVerificationAPI404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ImporterExporterCodeVerificationAPI500ApplicationJSONErrorEnum string

const (
	ImporterExporterCodeVerificationAPI500ApplicationJSONErrorEnumInternalServerError ImporterExporterCodeVerificationAPI500ApplicationJSONErrorEnum = "internal_server_error"
)

type ImporterExporterCodeVerificationAPI500ApplicationJSONErrorDescriptionEnum string

const (
	ImporterExporterCodeVerificationAPI500ApplicationJSONErrorDescriptionEnumInternalServerError ImporterExporterCodeVerificationAPI500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)

type ImporterExporterCodeVerificationAPI500ApplicationJSON struct {
	Error            *ImporterExporterCodeVerificationAPI500ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *ImporterExporterCodeVerificationAPI500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ImporterExporterCodeVerificationAPI502ApplicationJSONErrorEnum string

const (
	ImporterExporterCodeVerificationAPI502ApplicationJSONErrorEnumBadGateway ImporterExporterCodeVerificationAPI502ApplicationJSONErrorEnum = "bad gateway"
)

type ImporterExporterCodeVerificationAPI502ApplicationJSONErrorDescriptionEnum string

const (
	ImporterExporterCodeVerificationAPI502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse ImporterExporterCodeVerificationAPI502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response."
)

type ImporterExporterCodeVerificationAPI502ApplicationJSON struct {
	Error            *ImporterExporterCodeVerificationAPI502ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *ImporterExporterCodeVerificationAPI502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ImporterExporterCodeVerificationAPI503ApplicationJSONErrorEnum string

const (
	ImporterExporterCodeVerificationAPI503ApplicationJSONErrorEnumServiceUnavailable ImporterExporterCodeVerificationAPI503ApplicationJSONErrorEnum = "service_unavailable"
)

type ImporterExporterCodeVerificationAPI503ApplicationJSONErrorDescriptionEnum string

const (
	ImporterExporterCodeVerificationAPI503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable ImporterExporterCodeVerificationAPI503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)

type ImporterExporterCodeVerificationAPI503ApplicationJSON struct {
	Error            *ImporterExporterCodeVerificationAPI503ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *ImporterExporterCodeVerificationAPI503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ImporterExporterCodeVerificationAPI504ApplicationJSONErrorEnum string

const (
	ImporterExporterCodeVerificationAPI504ApplicationJSONErrorEnumGatewayTimeout ImporterExporterCodeVerificationAPI504ApplicationJSONErrorEnum = "gateway_timeout"
)

type ImporterExporterCodeVerificationAPI504ApplicationJSONErrorDescriptionEnum string

const (
	ImporterExporterCodeVerificationAPI504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime ImporterExporterCodeVerificationAPI504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)

type ImporterExporterCodeVerificationAPI504ApplicationJSON struct {
	Error            *ImporterExporterCodeVerificationAPI504ApplicationJSONErrorEnum            `json:"error,omitempty"`
	ErrorDescription *ImporterExporterCodeVerificationAPI504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
}

type ImporterExporterCodeVerificationAPIRequest struct {
	PathParams ImporterExporterCodeVerificationAPIPathParams
	Security   ImporterExporterCodeVerificationAPISecurity
}

type ImporterExporterCodeVerificationAPIResponse struct {
	ContentType                                                 string
	ImporterExporterCodeVerificationAPI200ApplicationJSONObject *ImporterExporterCodeVerificationAPI200ApplicationJSON
	ImporterExporterCodeVerificationAPI400ApplicationJSONObject *ImporterExporterCodeVerificationAPI400ApplicationJSON
	ImporterExporterCodeVerificationAPI401ApplicationJSONObject *ImporterExporterCodeVerificationAPI401ApplicationJSON
	ImporterExporterCodeVerificationAPI404ApplicationJSONObject *ImporterExporterCodeVerificationAPI404ApplicationJSON
	ImporterExporterCodeVerificationAPI500ApplicationJSONObject *ImporterExporterCodeVerificationAPI500ApplicationJSON
	ImporterExporterCodeVerificationAPI502ApplicationJSONObject *ImporterExporterCodeVerificationAPI502ApplicationJSON
	ImporterExporterCodeVerificationAPI503ApplicationJSONObject *ImporterExporterCodeVerificationAPI503ApplicationJSON
	ImporterExporterCodeVerificationAPI504ApplicationJSONObject *ImporterExporterCodeVerificationAPI504ApplicationJSON
	StatusCode                                                  int64
}

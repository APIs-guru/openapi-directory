package operations

import (
"openapi/pkg/models/shared")

type SslcrRequestBodyCertificateParameters struct {
    Dob string `json:"DOB"`
    FullName string `json:"FullName"`
    UID string `json:"UID"`
    Regno string `json:"regno"`
    Year string `json:"year"`
    
}


type SslcrRequestBodyFormatEnum string

const (
    SslcrRequestBodyFormatEnumPdf SslcrRequestBodyFormatEnum = "pdf"
)


type SslcrRequestBody struct {
    CertificateParameters *SslcrRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format SslcrRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type SslcrSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type SslcrRequest struct {
    Request *SslcrRequestBody `request:"mediaType=application/json"`
    Security SslcrSecurity 
    
}


type Sslcr400ApplicationJSONErrorEnum string

const (
    Sslcr400ApplicationJSONErrorEnumMissingParameter Sslcr400ApplicationJSONErrorEnum = "missing_parameter"
Sslcr400ApplicationJSONErrorEnumInvalidParameter Sslcr400ApplicationJSONErrorEnum = "invalid_parameter"
Sslcr400ApplicationJSONErrorEnumInvalidFormat Sslcr400ApplicationJSONErrorEnum = "invalid_format"
Sslcr400ApplicationJSONErrorEnumInvalidTxnid Sslcr400ApplicationJSONErrorEnum = "invalid_txnid"
Sslcr400ApplicationJSONErrorEnumInvalidConsentid Sslcr400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Sslcr400ApplicationJSONErrorDescriptionEnum string

const (
    Sslcr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Sslcr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Sslcr400ApplicationJSONErrorDescriptionEnumBadRequest Sslcr400ApplicationJSONErrorDescriptionEnum = "Bad request"
Sslcr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Sslcr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Sslcr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Sslcr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Sslcr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Sslcr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Sslcr400ApplicationJSON struct {
    Error *Sslcr400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sslcr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sslcr401ApplicationJSONErrorEnum string

const (
    Sslcr401ApplicationJSONErrorEnumInvalidAuthentication Sslcr401ApplicationJSONErrorEnum = "invalid_authentication"
Sslcr401ApplicationJSONErrorEnumInvalidAuthorization Sslcr401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Sslcr401ApplicationJSONErrorDescriptionEnum string

const (
    Sslcr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Sslcr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Sslcr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Sslcr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Sslcr401ApplicationJSON struct {
    Error *Sslcr401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sslcr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sslcr404ApplicationJSONErrorEnum string

const (
    Sslcr404ApplicationJSONErrorEnumRecordNotFound Sslcr404ApplicationJSONErrorEnum = "record_not_found"
Sslcr404ApplicationJSONErrorEnumURLNotFound Sslcr404ApplicationJSONErrorEnum = "url_not_found"
)



type Sslcr404ApplicationJSONErrorDescriptionEnum string

const (
    Sslcr404ApplicationJSONErrorDescriptionEnumNoRecordFound Sslcr404ApplicationJSONErrorDescriptionEnum = "No record found"
Sslcr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Sslcr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Sslcr404ApplicationJSON struct {
    Error *Sslcr404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sslcr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sslcr500ApplicationJSONErrorEnum string

const (
    Sslcr500ApplicationJSONErrorEnumInternalServerError Sslcr500ApplicationJSONErrorEnum = "internal_server_error"
)



type Sslcr500ApplicationJSONErrorDescriptionEnum string

const (
    Sslcr500ApplicationJSONErrorDescriptionEnumInternalServerError Sslcr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Sslcr500ApplicationJSON struct {
    Error *Sslcr500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sslcr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sslcr502ApplicationJSONErrorEnum string

const (
    Sslcr502ApplicationJSONErrorEnumBadGatewy Sslcr502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Sslcr502ApplicationJSONErrorDescriptionEnum string

const (
    Sslcr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Sslcr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Sslcr502ApplicationJSON struct {
    Error *Sslcr502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sslcr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sslcr503ApplicationJSONErrorEnum string

const (
    Sslcr503ApplicationJSONErrorEnumServiceUnavailable Sslcr503ApplicationJSONErrorEnum = "service_unavailable"
)



type Sslcr503ApplicationJSONErrorDescriptionEnum string

const (
    Sslcr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Sslcr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Sslcr503ApplicationJSON struct {
    Error *Sslcr503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sslcr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Sslcr504ApplicationJSONErrorEnum string

const (
    Sslcr504ApplicationJSONErrorEnumGatewayTimeout Sslcr504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Sslcr504ApplicationJSONErrorDescriptionEnum string

const (
    Sslcr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Sslcr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Sslcr504ApplicationJSON struct {
    Error *Sslcr504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Sslcr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type SslcrResponse struct {
    ContentType string 
    StatusCode int64 
    Sslcr400ApplicationJSONObject *Sslcr400ApplicationJSON 
    Sslcr401ApplicationJSONObject *Sslcr401ApplicationJSON 
    Sslcr404ApplicationJSONObject *Sslcr404ApplicationJSON 
    Sslcr500ApplicationJSONObject *Sslcr500ApplicationJSON 
    Sslcr502ApplicationJSONObject *Sslcr502ApplicationJSON 
    Sslcr503ApplicationJSONObject *Sslcr503ApplicationJSON 
    Sslcr504ApplicationJSONObject *Sslcr504ApplicationJSON 
    
}


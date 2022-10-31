package operations

import (
"openapi/pkg/models/shared")

type AlsblRequestBodyCertificateParameters struct {
    RefNo string `json:"RefNo"`
    TokenNo string `json:"TokenNo"`
    
}


type AlsblRequestBodyFormatEnum string

const (
    AlsblRequestBodyFormatEnumPdf AlsblRequestBodyFormatEnum = "pdf"
)


type AlsblRequestBody struct {
    CertificateParameters *AlsblRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format AlsblRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type AlsblSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type AlsblRequest struct {
    Request *AlsblRequestBody `request:"mediaType=application/json"`
    Security AlsblSecurity 
    
}


type Alsbl400ApplicationJSONErrorEnum string

const (
    Alsbl400ApplicationJSONErrorEnumMissingParameter Alsbl400ApplicationJSONErrorEnum = "missing_parameter"
Alsbl400ApplicationJSONErrorEnumInvalidParameter Alsbl400ApplicationJSONErrorEnum = "invalid_parameter"
Alsbl400ApplicationJSONErrorEnumInvalidFormat Alsbl400ApplicationJSONErrorEnum = "invalid_format"
Alsbl400ApplicationJSONErrorEnumInvalidTxnid Alsbl400ApplicationJSONErrorEnum = "invalid_txnid"
Alsbl400ApplicationJSONErrorEnumInvalidConsentid Alsbl400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Alsbl400ApplicationJSONErrorDescriptionEnum string

const (
    Alsbl400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Alsbl400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Alsbl400ApplicationJSONErrorDescriptionEnumBadRequest Alsbl400ApplicationJSONErrorDescriptionEnum = "Bad request"
Alsbl400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Alsbl400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Alsbl400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Alsbl400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Alsbl400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Alsbl400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Alsbl400ApplicationJSON struct {
    Error *Alsbl400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Alsbl400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Alsbl401ApplicationJSONErrorEnum string

const (
    Alsbl401ApplicationJSONErrorEnumInvalidAuthentication Alsbl401ApplicationJSONErrorEnum = "invalid_authentication"
Alsbl401ApplicationJSONErrorEnumInvalidAuthorization Alsbl401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Alsbl401ApplicationJSONErrorDescriptionEnum string

const (
    Alsbl401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Alsbl401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Alsbl401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Alsbl401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Alsbl401ApplicationJSON struct {
    Error *Alsbl401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Alsbl401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Alsbl404ApplicationJSONErrorEnum string

const (
    Alsbl404ApplicationJSONErrorEnumRecordNotFound Alsbl404ApplicationJSONErrorEnum = "record_not_found"
Alsbl404ApplicationJSONErrorEnumURLNotFound Alsbl404ApplicationJSONErrorEnum = "url_not_found"
)



type Alsbl404ApplicationJSONErrorDescriptionEnum string

const (
    Alsbl404ApplicationJSONErrorDescriptionEnumNoRecordFound Alsbl404ApplicationJSONErrorDescriptionEnum = "No record found"
Alsbl404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Alsbl404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Alsbl404ApplicationJSON struct {
    Error *Alsbl404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Alsbl404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Alsbl500ApplicationJSONErrorEnum string

const (
    Alsbl500ApplicationJSONErrorEnumInternalServerError Alsbl500ApplicationJSONErrorEnum = "internal_server_error"
)



type Alsbl500ApplicationJSONErrorDescriptionEnum string

const (
    Alsbl500ApplicationJSONErrorDescriptionEnumInternalServerError Alsbl500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Alsbl500ApplicationJSON struct {
    Error *Alsbl500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Alsbl500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Alsbl502ApplicationJSONErrorEnum string

const (
    Alsbl502ApplicationJSONErrorEnumBadGatewy Alsbl502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Alsbl502ApplicationJSONErrorDescriptionEnum string

const (
    Alsbl502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Alsbl502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Alsbl502ApplicationJSON struct {
    Error *Alsbl502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Alsbl502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Alsbl503ApplicationJSONErrorEnum string

const (
    Alsbl503ApplicationJSONErrorEnumServiceUnavailable Alsbl503ApplicationJSONErrorEnum = "service_unavailable"
)



type Alsbl503ApplicationJSONErrorDescriptionEnum string

const (
    Alsbl503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Alsbl503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Alsbl503ApplicationJSON struct {
    Error *Alsbl503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Alsbl503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Alsbl504ApplicationJSONErrorEnum string

const (
    Alsbl504ApplicationJSONErrorEnumGatewayTimeout Alsbl504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Alsbl504ApplicationJSONErrorDescriptionEnum string

const (
    Alsbl504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Alsbl504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Alsbl504ApplicationJSON struct {
    Error *Alsbl504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Alsbl504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type AlsblResponse struct {
    ContentType string 
    StatusCode int64 
    Alsbl400ApplicationJSONObject *Alsbl400ApplicationJSON 
    Alsbl401ApplicationJSONObject *Alsbl401ApplicationJSON 
    Alsbl404ApplicationJSONObject *Alsbl404ApplicationJSON 
    Alsbl500ApplicationJSONObject *Alsbl500ApplicationJSON 
    Alsbl502ApplicationJSONObject *Alsbl502ApplicationJSON 
    Alsbl503ApplicationJSONObject *Alsbl503ApplicationJSON 
    Alsbl504ApplicationJSONObject *Alsbl504ApplicationJSON 
    
}


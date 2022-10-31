package operations

import (
"openapi/pkg/models/shared")

type MalcsRequestBodyCertificateParameters struct {
    ApplicationNo string `json:"applicationNo"`
    LicenseNo string `json:"licenseNo"`
    
}


type MalcsRequestBodyFormatEnum string

const (
    MalcsRequestBodyFormatEnumPdf MalcsRequestBodyFormatEnum = "pdf"
)


type MalcsRequestBody struct {
    CertificateParameters *MalcsRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format MalcsRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type MalcsSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type MalcsRequest struct {
    Request *MalcsRequestBody `request:"mediaType=application/json"`
    Security MalcsSecurity 
    
}


type Malcs400ApplicationJSONErrorEnum string

const (
    Malcs400ApplicationJSONErrorEnumMissingParameter Malcs400ApplicationJSONErrorEnum = "missing_parameter"
Malcs400ApplicationJSONErrorEnumInvalidParameter Malcs400ApplicationJSONErrorEnum = "invalid_parameter"
Malcs400ApplicationJSONErrorEnumInvalidFormat Malcs400ApplicationJSONErrorEnum = "invalid_format"
Malcs400ApplicationJSONErrorEnumInvalidTxnid Malcs400ApplicationJSONErrorEnum = "invalid_txnid"
Malcs400ApplicationJSONErrorEnumInvalidConsentid Malcs400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Malcs400ApplicationJSONErrorDescriptionEnum string

const (
    Malcs400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Malcs400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Malcs400ApplicationJSONErrorDescriptionEnumBadRequest Malcs400ApplicationJSONErrorDescriptionEnum = "Bad request"
Malcs400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Malcs400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Malcs400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Malcs400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Malcs400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Malcs400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Malcs400ApplicationJSON struct {
    Error *Malcs400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Malcs400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Malcs401ApplicationJSONErrorEnum string

const (
    Malcs401ApplicationJSONErrorEnumInvalidAuthentication Malcs401ApplicationJSONErrorEnum = "invalid_authentication"
Malcs401ApplicationJSONErrorEnumInvalidAuthorization Malcs401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Malcs401ApplicationJSONErrorDescriptionEnum string

const (
    Malcs401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Malcs401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Malcs401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Malcs401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Malcs401ApplicationJSON struct {
    Error *Malcs401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Malcs401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Malcs404ApplicationJSONErrorEnum string

const (
    Malcs404ApplicationJSONErrorEnumRecordNotFound Malcs404ApplicationJSONErrorEnum = "record_not_found"
Malcs404ApplicationJSONErrorEnumURLNotFound Malcs404ApplicationJSONErrorEnum = "url_not_found"
)



type Malcs404ApplicationJSONErrorDescriptionEnum string

const (
    Malcs404ApplicationJSONErrorDescriptionEnumNoRecordFound Malcs404ApplicationJSONErrorDescriptionEnum = "No record found"
Malcs404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Malcs404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Malcs404ApplicationJSON struct {
    Error *Malcs404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Malcs404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Malcs500ApplicationJSONErrorEnum string

const (
    Malcs500ApplicationJSONErrorEnumInternalServerError Malcs500ApplicationJSONErrorEnum = "internal_server_error"
)



type Malcs500ApplicationJSONErrorDescriptionEnum string

const (
    Malcs500ApplicationJSONErrorDescriptionEnumInternalServerError Malcs500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Malcs500ApplicationJSON struct {
    Error *Malcs500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Malcs500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Malcs502ApplicationJSONErrorEnum string

const (
    Malcs502ApplicationJSONErrorEnumBadGatewy Malcs502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Malcs502ApplicationJSONErrorDescriptionEnum string

const (
    Malcs502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Malcs502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Malcs502ApplicationJSON struct {
    Error *Malcs502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Malcs502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Malcs503ApplicationJSONErrorEnum string

const (
    Malcs503ApplicationJSONErrorEnumServiceUnavailable Malcs503ApplicationJSONErrorEnum = "service_unavailable"
)



type Malcs503ApplicationJSONErrorDescriptionEnum string

const (
    Malcs503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Malcs503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Malcs503ApplicationJSON struct {
    Error *Malcs503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Malcs503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Malcs504ApplicationJSONErrorEnum string

const (
    Malcs504ApplicationJSONErrorEnumGatewayTimeout Malcs504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Malcs504ApplicationJSONErrorDescriptionEnum string

const (
    Malcs504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Malcs504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Malcs504ApplicationJSON struct {
    Error *Malcs504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Malcs504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type MalcsResponse struct {
    ContentType string 
    StatusCode int64 
    Malcs400ApplicationJSONObject *Malcs400ApplicationJSON 
    Malcs401ApplicationJSONObject *Malcs401ApplicationJSON 
    Malcs404ApplicationJSONObject *Malcs404ApplicationJSON 
    Malcs500ApplicationJSONObject *Malcs500ApplicationJSON 
    Malcs502ApplicationJSONObject *Malcs502ApplicationJSON 
    Malcs503ApplicationJSONObject *Malcs503ApplicationJSON 
    Malcs504ApplicationJSONObject *Malcs504ApplicationJSON 
    
}


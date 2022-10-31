package operations

import (
"openapi/pkg/models/shared")

type DelcsRequestBodyCertificateParameters struct {
    ApplicationNo string `json:"applicationNo"`
    LicenseNo string `json:"licenseNo"`
    
}


type DelcsRequestBodyFormatEnum string

const (
    DelcsRequestBodyFormatEnumPdf DelcsRequestBodyFormatEnum = "pdf"
)


type DelcsRequestBody struct {
    CertificateParameters *DelcsRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format DelcsRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type DelcsSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type DelcsRequest struct {
    Request *DelcsRequestBody `request:"mediaType=application/json"`
    Security DelcsSecurity 
    
}


type Delcs400ApplicationJSONErrorEnum string

const (
    Delcs400ApplicationJSONErrorEnumMissingParameter Delcs400ApplicationJSONErrorEnum = "missing_parameter"
Delcs400ApplicationJSONErrorEnumInvalidParameter Delcs400ApplicationJSONErrorEnum = "invalid_parameter"
Delcs400ApplicationJSONErrorEnumInvalidFormat Delcs400ApplicationJSONErrorEnum = "invalid_format"
Delcs400ApplicationJSONErrorEnumInvalidTxnid Delcs400ApplicationJSONErrorEnum = "invalid_txnid"
Delcs400ApplicationJSONErrorEnumInvalidConsentid Delcs400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Delcs400ApplicationJSONErrorDescriptionEnum string

const (
    Delcs400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Delcs400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Delcs400ApplicationJSONErrorDescriptionEnumBadRequest Delcs400ApplicationJSONErrorDescriptionEnum = "Bad request"
Delcs400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Delcs400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Delcs400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Delcs400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Delcs400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Delcs400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Delcs400ApplicationJSON struct {
    Error *Delcs400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Delcs400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Delcs401ApplicationJSONErrorEnum string

const (
    Delcs401ApplicationJSONErrorEnumInvalidAuthentication Delcs401ApplicationJSONErrorEnum = "invalid_authentication"
Delcs401ApplicationJSONErrorEnumInvalidAuthorization Delcs401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Delcs401ApplicationJSONErrorDescriptionEnum string

const (
    Delcs401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Delcs401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Delcs401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Delcs401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Delcs401ApplicationJSON struct {
    Error *Delcs401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Delcs401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Delcs404ApplicationJSONErrorEnum string

const (
    Delcs404ApplicationJSONErrorEnumRecordNotFound Delcs404ApplicationJSONErrorEnum = "record_not_found"
Delcs404ApplicationJSONErrorEnumURLNotFound Delcs404ApplicationJSONErrorEnum = "url_not_found"
)



type Delcs404ApplicationJSONErrorDescriptionEnum string

const (
    Delcs404ApplicationJSONErrorDescriptionEnumNoRecordFound Delcs404ApplicationJSONErrorDescriptionEnum = "No record found"
Delcs404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Delcs404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Delcs404ApplicationJSON struct {
    Error *Delcs404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Delcs404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Delcs500ApplicationJSONErrorEnum string

const (
    Delcs500ApplicationJSONErrorEnumInternalServerError Delcs500ApplicationJSONErrorEnum = "internal_server_error"
)



type Delcs500ApplicationJSONErrorDescriptionEnum string

const (
    Delcs500ApplicationJSONErrorDescriptionEnumInternalServerError Delcs500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Delcs500ApplicationJSON struct {
    Error *Delcs500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Delcs500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Delcs502ApplicationJSONErrorEnum string

const (
    Delcs502ApplicationJSONErrorEnumBadGatewy Delcs502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Delcs502ApplicationJSONErrorDescriptionEnum string

const (
    Delcs502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Delcs502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Delcs502ApplicationJSON struct {
    Error *Delcs502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Delcs502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Delcs503ApplicationJSONErrorEnum string

const (
    Delcs503ApplicationJSONErrorEnumServiceUnavailable Delcs503ApplicationJSONErrorEnum = "service_unavailable"
)



type Delcs503ApplicationJSONErrorDescriptionEnum string

const (
    Delcs503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Delcs503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Delcs503ApplicationJSON struct {
    Error *Delcs503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Delcs503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Delcs504ApplicationJSONErrorEnum string

const (
    Delcs504ApplicationJSONErrorEnumGatewayTimeout Delcs504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Delcs504ApplicationJSONErrorDescriptionEnum string

const (
    Delcs504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Delcs504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Delcs504ApplicationJSON struct {
    Error *Delcs504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Delcs504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type DelcsResponse struct {
    ContentType string 
    StatusCode int64 
    Delcs400ApplicationJSONObject *Delcs400ApplicationJSON 
    Delcs401ApplicationJSONObject *Delcs401ApplicationJSON 
    Delcs404ApplicationJSONObject *Delcs404ApplicationJSON 
    Delcs500ApplicationJSONObject *Delcs500ApplicationJSON 
    Delcs502ApplicationJSONObject *Delcs502ApplicationJSON 
    Delcs503ApplicationJSONObject *Delcs503ApplicationJSON 
    Delcs504ApplicationJSONObject *Delcs504ApplicationJSON 
    
}


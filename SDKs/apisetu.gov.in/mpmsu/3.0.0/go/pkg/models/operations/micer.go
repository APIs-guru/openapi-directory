package operations

import (
"openapi/pkg/models/shared")

type MicerRequestBodyCertificateParameters struct {
    Appno string `json:"APPNO"`
    DateOfBirth string `json:"Date_Of_Birth"`
    Enrolno string `json:"ENROLNO"`
    Rollno string `json:"ROLLNO"`
    
}


type MicerRequestBodyFormatEnum string

const (
    MicerRequestBodyFormatEnumPdf MicerRequestBodyFormatEnum = "pdf"
)


type MicerRequestBody struct {
    CertificateParameters *MicerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format MicerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type MicerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type MicerRequest struct {
    Request *MicerRequestBody `request:"mediaType=application/json"`
    Security MicerSecurity 
    
}


type Micer400ApplicationJSONErrorEnum string

const (
    Micer400ApplicationJSONErrorEnumMissingParameter Micer400ApplicationJSONErrorEnum = "missing_parameter"
Micer400ApplicationJSONErrorEnumInvalidParameter Micer400ApplicationJSONErrorEnum = "invalid_parameter"
Micer400ApplicationJSONErrorEnumInvalidFormat Micer400ApplicationJSONErrorEnum = "invalid_format"
Micer400ApplicationJSONErrorEnumInvalidTxnid Micer400ApplicationJSONErrorEnum = "invalid_txnid"
Micer400ApplicationJSONErrorEnumInvalidConsentid Micer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Micer400ApplicationJSONErrorDescriptionEnum string

const (
    Micer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Micer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Micer400ApplicationJSONErrorDescriptionEnumBadRequest Micer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Micer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Micer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Micer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Micer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Micer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Micer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Micer400ApplicationJSON struct {
    Error *Micer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Micer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Micer401ApplicationJSONErrorEnum string

const (
    Micer401ApplicationJSONErrorEnumInvalidAuthentication Micer401ApplicationJSONErrorEnum = "invalid_authentication"
Micer401ApplicationJSONErrorEnumInvalidAuthorization Micer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Micer401ApplicationJSONErrorDescriptionEnum string

const (
    Micer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Micer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Micer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Micer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Micer401ApplicationJSON struct {
    Error *Micer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Micer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Micer404ApplicationJSONErrorEnum string

const (
    Micer404ApplicationJSONErrorEnumRecordNotFound Micer404ApplicationJSONErrorEnum = "record_not_found"
Micer404ApplicationJSONErrorEnumURLNotFound Micer404ApplicationJSONErrorEnum = "url_not_found"
)



type Micer404ApplicationJSONErrorDescriptionEnum string

const (
    Micer404ApplicationJSONErrorDescriptionEnumNoRecordFound Micer404ApplicationJSONErrorDescriptionEnum = "No record found"
Micer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Micer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Micer404ApplicationJSON struct {
    Error *Micer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Micer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Micer500ApplicationJSONErrorEnum string

const (
    Micer500ApplicationJSONErrorEnumInternalServerError Micer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Micer500ApplicationJSONErrorDescriptionEnum string

const (
    Micer500ApplicationJSONErrorDescriptionEnumInternalServerError Micer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Micer500ApplicationJSON struct {
    Error *Micer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Micer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Micer502ApplicationJSONErrorEnum string

const (
    Micer502ApplicationJSONErrorEnumBadGatewy Micer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Micer502ApplicationJSONErrorDescriptionEnum string

const (
    Micer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Micer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Micer502ApplicationJSON struct {
    Error *Micer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Micer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Micer503ApplicationJSONErrorEnum string

const (
    Micer503ApplicationJSONErrorEnumServiceUnavailable Micer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Micer503ApplicationJSONErrorDescriptionEnum string

const (
    Micer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Micer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Micer503ApplicationJSON struct {
    Error *Micer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Micer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Micer504ApplicationJSONErrorEnum string

const (
    Micer504ApplicationJSONErrorEnumGatewayTimeout Micer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Micer504ApplicationJSONErrorDescriptionEnum string

const (
    Micer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Micer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Micer504ApplicationJSON struct {
    Error *Micer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Micer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type MicerResponse struct {
    ContentType string 
    StatusCode int64 
    Micer400ApplicationJSONObject *Micer400ApplicationJSON 
    Micer401ApplicationJSONObject *Micer401ApplicationJSON 
    Micer404ApplicationJSONObject *Micer404ApplicationJSON 
    Micer500ApplicationJSONObject *Micer500ApplicationJSON 
    Micer502ApplicationJSONObject *Micer502ApplicationJSON 
    Micer503ApplicationJSONObject *Micer503ApplicationJSON 
    Micer504ApplicationJSONObject *Micer504ApplicationJSON 
    
}


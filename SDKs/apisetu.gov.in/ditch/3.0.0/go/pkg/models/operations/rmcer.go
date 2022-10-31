package operations

import (
"openapi/pkg/models/shared")

type RmcerRequestBodyCertificateParameters struct {
    Appno string `json:"APPNO"`
    Certno string `json:"CERTNO"`
    
}


type RmcerRequestBodyFormatEnum string

const (
    RmcerRequestBodyFormatEnumPdf RmcerRequestBodyFormatEnum = "pdf"
)


type RmcerRequestBody struct {
    CertificateParameters *RmcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format RmcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type RmcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type RmcerRequest struct {
    Request *RmcerRequestBody `request:"mediaType=application/json"`
    Security RmcerSecurity 
    
}


type Rmcer400ApplicationJSONErrorEnum string

const (
    Rmcer400ApplicationJSONErrorEnumMissingParameter Rmcer400ApplicationJSONErrorEnum = "missing_parameter"
Rmcer400ApplicationJSONErrorEnumInvalidParameter Rmcer400ApplicationJSONErrorEnum = "invalid_parameter"
Rmcer400ApplicationJSONErrorEnumInvalidFormat Rmcer400ApplicationJSONErrorEnum = "invalid_format"
Rmcer400ApplicationJSONErrorEnumInvalidTxnid Rmcer400ApplicationJSONErrorEnum = "invalid_txnid"
Rmcer400ApplicationJSONErrorEnumInvalidConsentid Rmcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Rmcer400ApplicationJSONErrorDescriptionEnum string

const (
    Rmcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Rmcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Rmcer400ApplicationJSONErrorDescriptionEnumBadRequest Rmcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Rmcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Rmcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Rmcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Rmcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Rmcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Rmcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Rmcer400ApplicationJSON struct {
    Error *Rmcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rmcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rmcer401ApplicationJSONErrorEnum string

const (
    Rmcer401ApplicationJSONErrorEnumInvalidAuthentication Rmcer401ApplicationJSONErrorEnum = "invalid_authentication"
Rmcer401ApplicationJSONErrorEnumInvalidAuthorization Rmcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Rmcer401ApplicationJSONErrorDescriptionEnum string

const (
    Rmcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Rmcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Rmcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Rmcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Rmcer401ApplicationJSON struct {
    Error *Rmcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rmcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rmcer404ApplicationJSONErrorEnum string

const (
    Rmcer404ApplicationJSONErrorEnumRecordNotFound Rmcer404ApplicationJSONErrorEnum = "record_not_found"
Rmcer404ApplicationJSONErrorEnumURLNotFound Rmcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Rmcer404ApplicationJSONErrorDescriptionEnum string

const (
    Rmcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Rmcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Rmcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Rmcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Rmcer404ApplicationJSON struct {
    Error *Rmcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rmcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rmcer500ApplicationJSONErrorEnum string

const (
    Rmcer500ApplicationJSONErrorEnumInternalServerError Rmcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Rmcer500ApplicationJSONErrorDescriptionEnum string

const (
    Rmcer500ApplicationJSONErrorDescriptionEnumInternalServerError Rmcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Rmcer500ApplicationJSON struct {
    Error *Rmcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rmcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rmcer502ApplicationJSONErrorEnum string

const (
    Rmcer502ApplicationJSONErrorEnumBadGatewy Rmcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Rmcer502ApplicationJSONErrorDescriptionEnum string

const (
    Rmcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Rmcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Rmcer502ApplicationJSON struct {
    Error *Rmcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rmcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rmcer503ApplicationJSONErrorEnum string

const (
    Rmcer503ApplicationJSONErrorEnumServiceUnavailable Rmcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Rmcer503ApplicationJSONErrorDescriptionEnum string

const (
    Rmcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Rmcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Rmcer503ApplicationJSON struct {
    Error *Rmcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rmcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rmcer504ApplicationJSONErrorEnum string

const (
    Rmcer504ApplicationJSONErrorEnumGatewayTimeout Rmcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Rmcer504ApplicationJSONErrorDescriptionEnum string

const (
    Rmcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Rmcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Rmcer504ApplicationJSON struct {
    Error *Rmcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rmcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type RmcerResponse struct {
    ContentType string 
    StatusCode int64 
    Rmcer400ApplicationJSONObject *Rmcer400ApplicationJSON 
    Rmcer401ApplicationJSONObject *Rmcer401ApplicationJSON 
    Rmcer404ApplicationJSONObject *Rmcer404ApplicationJSON 
    Rmcer500ApplicationJSONObject *Rmcer500ApplicationJSON 
    Rmcer502ApplicationJSONObject *Rmcer502ApplicationJSON 
    Rmcer503ApplicationJSONObject *Rmcer503ApplicationJSON 
    Rmcer504ApplicationJSONObject *Rmcer504ApplicationJSON 
    
}


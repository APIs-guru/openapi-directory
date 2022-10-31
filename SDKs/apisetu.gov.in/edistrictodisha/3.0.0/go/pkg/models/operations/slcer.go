package operations

import (
"openapi/pkg/models/shared")

type SlcerRequestBodyCertificateParameters struct {
    UID string `json:"UID"`
    Refno string `json:"refno"`
    
}


type SlcerRequestBodyFormatEnum string

const (
    SlcerRequestBodyFormatEnumPdf SlcerRequestBodyFormatEnum = "pdf"
)


type SlcerRequestBody struct {
    CertificateParameters *SlcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format SlcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type SlcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type SlcerRequest struct {
    Request *SlcerRequestBody `request:"mediaType=application/json"`
    Security SlcerSecurity 
    
}


type Slcer400ApplicationJSONErrorEnum string

const (
    Slcer400ApplicationJSONErrorEnumMissingParameter Slcer400ApplicationJSONErrorEnum = "missing_parameter"
Slcer400ApplicationJSONErrorEnumInvalidParameter Slcer400ApplicationJSONErrorEnum = "invalid_parameter"
Slcer400ApplicationJSONErrorEnumInvalidFormat Slcer400ApplicationJSONErrorEnum = "invalid_format"
Slcer400ApplicationJSONErrorEnumInvalidTxnid Slcer400ApplicationJSONErrorEnum = "invalid_txnid"
Slcer400ApplicationJSONErrorEnumInvalidConsentid Slcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Slcer400ApplicationJSONErrorDescriptionEnum string

const (
    Slcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Slcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Slcer400ApplicationJSONErrorDescriptionEnumBadRequest Slcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Slcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Slcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Slcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Slcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Slcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Slcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Slcer400ApplicationJSON struct {
    Error *Slcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Slcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Slcer401ApplicationJSONErrorEnum string

const (
    Slcer401ApplicationJSONErrorEnumInvalidAuthentication Slcer401ApplicationJSONErrorEnum = "invalid_authentication"
Slcer401ApplicationJSONErrorEnumInvalidAuthorization Slcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Slcer401ApplicationJSONErrorDescriptionEnum string

const (
    Slcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Slcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Slcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Slcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Slcer401ApplicationJSON struct {
    Error *Slcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Slcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Slcer404ApplicationJSONErrorEnum string

const (
    Slcer404ApplicationJSONErrorEnumRecordNotFound Slcer404ApplicationJSONErrorEnum = "record_not_found"
Slcer404ApplicationJSONErrorEnumURLNotFound Slcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Slcer404ApplicationJSONErrorDescriptionEnum string

const (
    Slcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Slcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Slcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Slcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Slcer404ApplicationJSON struct {
    Error *Slcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Slcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Slcer500ApplicationJSONErrorEnum string

const (
    Slcer500ApplicationJSONErrorEnumInternalServerError Slcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Slcer500ApplicationJSONErrorDescriptionEnum string

const (
    Slcer500ApplicationJSONErrorDescriptionEnumInternalServerError Slcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Slcer500ApplicationJSON struct {
    Error *Slcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Slcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Slcer502ApplicationJSONErrorEnum string

const (
    Slcer502ApplicationJSONErrorEnumBadGatewy Slcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Slcer502ApplicationJSONErrorDescriptionEnum string

const (
    Slcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Slcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Slcer502ApplicationJSON struct {
    Error *Slcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Slcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Slcer503ApplicationJSONErrorEnum string

const (
    Slcer503ApplicationJSONErrorEnumServiceUnavailable Slcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Slcer503ApplicationJSONErrorDescriptionEnum string

const (
    Slcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Slcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Slcer503ApplicationJSON struct {
    Error *Slcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Slcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Slcer504ApplicationJSONErrorEnum string

const (
    Slcer504ApplicationJSONErrorEnumGatewayTimeout Slcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Slcer504ApplicationJSONErrorDescriptionEnum string

const (
    Slcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Slcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Slcer504ApplicationJSON struct {
    Error *Slcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Slcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type SlcerResponse struct {
    ContentType string 
    StatusCode int64 
    Slcer400ApplicationJSONObject *Slcer400ApplicationJSON 
    Slcer401ApplicationJSONObject *Slcer401ApplicationJSON 
    Slcer404ApplicationJSONObject *Slcer404ApplicationJSON 
    Slcer500ApplicationJSONObject *Slcer500ApplicationJSON 
    Slcer502ApplicationJSONObject *Slcer502ApplicationJSON 
    Slcer503ApplicationJSONObject *Slcer503ApplicationJSON 
    Slcer504ApplicationJSONObject *Slcer504ApplicationJSON 
    
}


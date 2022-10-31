package operations

import (
"openapi/pkg/models/shared")

type HvcerRequestBodyCertificateParameters struct {
    FullName string `json:"FullName"`
    Rroll string `json:"RROLL"`
    Year string `json:"YEAR"`
    
}


type HvcerRequestBodyFormatEnum string

const (
    HvcerRequestBodyFormatEnumPdf HvcerRequestBodyFormatEnum = "pdf"
)


type HvcerRequestBody struct {
    CertificateParameters *HvcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format HvcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type HvcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type HvcerRequest struct {
    Request *HvcerRequestBody `request:"mediaType=application/json"`
    Security HvcerSecurity 
    
}


type Hvcer400ApplicationJSONErrorEnum string

const (
    Hvcer400ApplicationJSONErrorEnumMissingParameter Hvcer400ApplicationJSONErrorEnum = "missing_parameter"
Hvcer400ApplicationJSONErrorEnumInvalidParameter Hvcer400ApplicationJSONErrorEnum = "invalid_parameter"
Hvcer400ApplicationJSONErrorEnumInvalidFormat Hvcer400ApplicationJSONErrorEnum = "invalid_format"
Hvcer400ApplicationJSONErrorEnumInvalidTxnid Hvcer400ApplicationJSONErrorEnum = "invalid_txnid"
Hvcer400ApplicationJSONErrorEnumInvalidConsentid Hvcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Hvcer400ApplicationJSONErrorDescriptionEnum string

const (
    Hvcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Hvcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Hvcer400ApplicationJSONErrorDescriptionEnumBadRequest Hvcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Hvcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Hvcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Hvcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Hvcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Hvcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Hvcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Hvcer400ApplicationJSON struct {
    Error *Hvcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Hvcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Hvcer401ApplicationJSONErrorEnum string

const (
    Hvcer401ApplicationJSONErrorEnumInvalidAuthentication Hvcer401ApplicationJSONErrorEnum = "invalid_authentication"
Hvcer401ApplicationJSONErrorEnumInvalidAuthorization Hvcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Hvcer401ApplicationJSONErrorDescriptionEnum string

const (
    Hvcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Hvcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Hvcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Hvcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Hvcer401ApplicationJSON struct {
    Error *Hvcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Hvcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Hvcer404ApplicationJSONErrorEnum string

const (
    Hvcer404ApplicationJSONErrorEnumRecordNotFound Hvcer404ApplicationJSONErrorEnum = "record_not_found"
Hvcer404ApplicationJSONErrorEnumURLNotFound Hvcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Hvcer404ApplicationJSONErrorDescriptionEnum string

const (
    Hvcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Hvcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Hvcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Hvcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Hvcer404ApplicationJSON struct {
    Error *Hvcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Hvcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Hvcer500ApplicationJSONErrorEnum string

const (
    Hvcer500ApplicationJSONErrorEnumInternalServerError Hvcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Hvcer500ApplicationJSONErrorDescriptionEnum string

const (
    Hvcer500ApplicationJSONErrorDescriptionEnumInternalServerError Hvcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Hvcer500ApplicationJSON struct {
    Error *Hvcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Hvcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Hvcer502ApplicationJSONErrorEnum string

const (
    Hvcer502ApplicationJSONErrorEnumBadGatewy Hvcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Hvcer502ApplicationJSONErrorDescriptionEnum string

const (
    Hvcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Hvcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Hvcer502ApplicationJSON struct {
    Error *Hvcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Hvcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Hvcer503ApplicationJSONErrorEnum string

const (
    Hvcer503ApplicationJSONErrorEnumServiceUnavailable Hvcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Hvcer503ApplicationJSONErrorDescriptionEnum string

const (
    Hvcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Hvcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Hvcer503ApplicationJSON struct {
    Error *Hvcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Hvcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Hvcer504ApplicationJSONErrorEnum string

const (
    Hvcer504ApplicationJSONErrorEnumGatewayTimeout Hvcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Hvcer504ApplicationJSONErrorDescriptionEnum string

const (
    Hvcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Hvcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Hvcer504ApplicationJSON struct {
    Error *Hvcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Hvcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type HvcerResponse struct {
    ContentType string 
    StatusCode int64 
    Hvcer400ApplicationJSONObject *Hvcer400ApplicationJSON 
    Hvcer401ApplicationJSONObject *Hvcer401ApplicationJSON 
    Hvcer404ApplicationJSONObject *Hvcer404ApplicationJSON 
    Hvcer500ApplicationJSONObject *Hvcer500ApplicationJSON 
    Hvcer502ApplicationJSONObject *Hvcer502ApplicationJSON 
    Hvcer503ApplicationJSONObject *Hvcer503ApplicationJSON 
    Hvcer504ApplicationJSONObject *Hvcer504ApplicationJSON 
    
}


package operations

import (
"openapi/pkg/models/shared")

type PncerRequestBodyCertificateParameters struct {
    Aplno string `json:"aplno"`
    Certno string `json:"certno"`
    Sccd string `json:"sccd"`
    
}


type PncerRequestBodyFormatEnum string

const (
    PncerRequestBodyFormatEnumPdf PncerRequestBodyFormatEnum = "pdf"
)


type PncerRequestBody struct {
    CertificateParameters *PncerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format PncerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type PncerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type PncerRequest struct {
    Request *PncerRequestBody `request:"mediaType=application/json"`
    Security PncerSecurity 
    
}


type Pncer400ApplicationJSONErrorEnum string

const (
    Pncer400ApplicationJSONErrorEnumMissingParameter Pncer400ApplicationJSONErrorEnum = "missing_parameter"
Pncer400ApplicationJSONErrorEnumInvalidParameter Pncer400ApplicationJSONErrorEnum = "invalid_parameter"
Pncer400ApplicationJSONErrorEnumInvalidFormat Pncer400ApplicationJSONErrorEnum = "invalid_format"
Pncer400ApplicationJSONErrorEnumInvalidTxnid Pncer400ApplicationJSONErrorEnum = "invalid_txnid"
Pncer400ApplicationJSONErrorEnumInvalidConsentid Pncer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Pncer400ApplicationJSONErrorDescriptionEnum string

const (
    Pncer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Pncer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Pncer400ApplicationJSONErrorDescriptionEnumBadRequest Pncer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Pncer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Pncer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Pncer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Pncer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Pncer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Pncer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Pncer400ApplicationJSON struct {
    Error *Pncer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pncer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pncer401ApplicationJSONErrorEnum string

const (
    Pncer401ApplicationJSONErrorEnumInvalidAuthentication Pncer401ApplicationJSONErrorEnum = "invalid_authentication"
Pncer401ApplicationJSONErrorEnumInvalidAuthorization Pncer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Pncer401ApplicationJSONErrorDescriptionEnum string

const (
    Pncer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Pncer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Pncer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Pncer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Pncer401ApplicationJSON struct {
    Error *Pncer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pncer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pncer404ApplicationJSONErrorEnum string

const (
    Pncer404ApplicationJSONErrorEnumRecordNotFound Pncer404ApplicationJSONErrorEnum = "record_not_found"
Pncer404ApplicationJSONErrorEnumURLNotFound Pncer404ApplicationJSONErrorEnum = "url_not_found"
)



type Pncer404ApplicationJSONErrorDescriptionEnum string

const (
    Pncer404ApplicationJSONErrorDescriptionEnumNoRecordFound Pncer404ApplicationJSONErrorDescriptionEnum = "No record found"
Pncer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Pncer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Pncer404ApplicationJSON struct {
    Error *Pncer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pncer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pncer500ApplicationJSONErrorEnum string

const (
    Pncer500ApplicationJSONErrorEnumInternalServerError Pncer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Pncer500ApplicationJSONErrorDescriptionEnum string

const (
    Pncer500ApplicationJSONErrorDescriptionEnumInternalServerError Pncer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Pncer500ApplicationJSON struct {
    Error *Pncer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pncer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pncer502ApplicationJSONErrorEnum string

const (
    Pncer502ApplicationJSONErrorEnumBadGatewy Pncer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Pncer502ApplicationJSONErrorDescriptionEnum string

const (
    Pncer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Pncer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Pncer502ApplicationJSON struct {
    Error *Pncer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pncer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pncer503ApplicationJSONErrorEnum string

const (
    Pncer503ApplicationJSONErrorEnumServiceUnavailable Pncer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Pncer503ApplicationJSONErrorDescriptionEnum string

const (
    Pncer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Pncer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Pncer503ApplicationJSON struct {
    Error *Pncer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pncer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Pncer504ApplicationJSONErrorEnum string

const (
    Pncer504ApplicationJSONErrorEnumGatewayTimeout Pncer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Pncer504ApplicationJSONErrorDescriptionEnum string

const (
    Pncer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Pncer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Pncer504ApplicationJSON struct {
    Error *Pncer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Pncer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type PncerResponse struct {
    ContentType string 
    StatusCode int64 
    Pncer400ApplicationJSONObject *Pncer400ApplicationJSON 
    Pncer401ApplicationJSONObject *Pncer401ApplicationJSON 
    Pncer404ApplicationJSONObject *Pncer404ApplicationJSON 
    Pncer500ApplicationJSONObject *Pncer500ApplicationJSON 
    Pncer502ApplicationJSONObject *Pncer502ApplicationJSON 
    Pncer503ApplicationJSONObject *Pncer503ApplicationJSON 
    Pncer504ApplicationJSONObject *Pncer504ApplicationJSON 
    
}


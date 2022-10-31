package operations

import (
"openapi/pkg/models/shared")

type RscerRequestBodyCertificateParameters struct {
    RefNo string `json:"RefNo"`
    TokenNo string `json:"TokenNo"`
    
}


type RscerRequestBodyFormatEnum string

const (
    RscerRequestBodyFormatEnumPdf RscerRequestBodyFormatEnum = "pdf"
)


type RscerRequestBody struct {
    CertificateParameters *RscerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format RscerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type RscerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type RscerRequest struct {
    Request *RscerRequestBody `request:"mediaType=application/json"`
    Security RscerSecurity 
    
}


type Rscer400ApplicationJSONErrorEnum string

const (
    Rscer400ApplicationJSONErrorEnumMissingParameter Rscer400ApplicationJSONErrorEnum = "missing_parameter"
Rscer400ApplicationJSONErrorEnumInvalidParameter Rscer400ApplicationJSONErrorEnum = "invalid_parameter"
Rscer400ApplicationJSONErrorEnumInvalidFormat Rscer400ApplicationJSONErrorEnum = "invalid_format"
Rscer400ApplicationJSONErrorEnumInvalidTxnid Rscer400ApplicationJSONErrorEnum = "invalid_txnid"
Rscer400ApplicationJSONErrorEnumInvalidConsentid Rscer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Rscer400ApplicationJSONErrorDescriptionEnum string

const (
    Rscer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Rscer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Rscer400ApplicationJSONErrorDescriptionEnumBadRequest Rscer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Rscer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Rscer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Rscer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Rscer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Rscer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Rscer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Rscer400ApplicationJSON struct {
    Error *Rscer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rscer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rscer401ApplicationJSONErrorEnum string

const (
    Rscer401ApplicationJSONErrorEnumInvalidAuthentication Rscer401ApplicationJSONErrorEnum = "invalid_authentication"
Rscer401ApplicationJSONErrorEnumInvalidAuthorization Rscer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Rscer401ApplicationJSONErrorDescriptionEnum string

const (
    Rscer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Rscer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Rscer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Rscer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Rscer401ApplicationJSON struct {
    Error *Rscer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rscer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rscer404ApplicationJSONErrorEnum string

const (
    Rscer404ApplicationJSONErrorEnumRecordNotFound Rscer404ApplicationJSONErrorEnum = "record_not_found"
Rscer404ApplicationJSONErrorEnumURLNotFound Rscer404ApplicationJSONErrorEnum = "url_not_found"
)



type Rscer404ApplicationJSONErrorDescriptionEnum string

const (
    Rscer404ApplicationJSONErrorDescriptionEnumNoRecordFound Rscer404ApplicationJSONErrorDescriptionEnum = "No record found"
Rscer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Rscer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Rscer404ApplicationJSON struct {
    Error *Rscer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rscer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rscer500ApplicationJSONErrorEnum string

const (
    Rscer500ApplicationJSONErrorEnumInternalServerError Rscer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Rscer500ApplicationJSONErrorDescriptionEnum string

const (
    Rscer500ApplicationJSONErrorDescriptionEnumInternalServerError Rscer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Rscer500ApplicationJSON struct {
    Error *Rscer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rscer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rscer502ApplicationJSONErrorEnum string

const (
    Rscer502ApplicationJSONErrorEnumBadGatewy Rscer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Rscer502ApplicationJSONErrorDescriptionEnum string

const (
    Rscer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Rscer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Rscer502ApplicationJSON struct {
    Error *Rscer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rscer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rscer503ApplicationJSONErrorEnum string

const (
    Rscer503ApplicationJSONErrorEnumServiceUnavailable Rscer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Rscer503ApplicationJSONErrorDescriptionEnum string

const (
    Rscer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Rscer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Rscer503ApplicationJSON struct {
    Error *Rscer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rscer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rscer504ApplicationJSONErrorEnum string

const (
    Rscer504ApplicationJSONErrorEnumGatewayTimeout Rscer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Rscer504ApplicationJSONErrorDescriptionEnum string

const (
    Rscer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Rscer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Rscer504ApplicationJSON struct {
    Error *Rscer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rscer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type RscerResponse struct {
    ContentType string 
    StatusCode int64 
    Rscer400ApplicationJSONObject *Rscer400ApplicationJSON 
    Rscer401ApplicationJSONObject *Rscer401ApplicationJSON 
    Rscer404ApplicationJSONObject *Rscer404ApplicationJSON 
    Rscer500ApplicationJSONObject *Rscer500ApplicationJSON 
    Rscer502ApplicationJSONObject *Rscer502ApplicationJSON 
    Rscer503ApplicationJSONObject *Rscer503ApplicationJSON 
    Rscer504ApplicationJSONObject *Rscer504ApplicationJSON 
    
}


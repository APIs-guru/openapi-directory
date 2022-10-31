package operations

import (
"openapi/pkg/models/shared")

type SmcerRequestBodyCertificateParameters struct {
    RefNo string `json:"RefNo"`
    TokenNo string `json:"TokenNo"`
    
}


type SmcerRequestBodyFormatEnum string

const (
    SmcerRequestBodyFormatEnumPdf SmcerRequestBodyFormatEnum = "pdf"
)


type SmcerRequestBody struct {
    CertificateParameters *SmcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format SmcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type SmcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type SmcerRequest struct {
    Request *SmcerRequestBody `request:"mediaType=application/json"`
    Security SmcerSecurity 
    
}


type Smcer400ApplicationJSONErrorEnum string

const (
    Smcer400ApplicationJSONErrorEnumMissingParameter Smcer400ApplicationJSONErrorEnum = "missing_parameter"
Smcer400ApplicationJSONErrorEnumInvalidParameter Smcer400ApplicationJSONErrorEnum = "invalid_parameter"
Smcer400ApplicationJSONErrorEnumInvalidFormat Smcer400ApplicationJSONErrorEnum = "invalid_format"
Smcer400ApplicationJSONErrorEnumInvalidTxnid Smcer400ApplicationJSONErrorEnum = "invalid_txnid"
Smcer400ApplicationJSONErrorEnumInvalidConsentid Smcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Smcer400ApplicationJSONErrorDescriptionEnum string

const (
    Smcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Smcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Smcer400ApplicationJSONErrorDescriptionEnumBadRequest Smcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Smcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Smcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Smcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Smcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Smcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Smcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Smcer400ApplicationJSON struct {
    Error *Smcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Smcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Smcer401ApplicationJSONErrorEnum string

const (
    Smcer401ApplicationJSONErrorEnumInvalidAuthentication Smcer401ApplicationJSONErrorEnum = "invalid_authentication"
Smcer401ApplicationJSONErrorEnumInvalidAuthorization Smcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Smcer401ApplicationJSONErrorDescriptionEnum string

const (
    Smcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Smcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Smcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Smcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Smcer401ApplicationJSON struct {
    Error *Smcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Smcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Smcer404ApplicationJSONErrorEnum string

const (
    Smcer404ApplicationJSONErrorEnumRecordNotFound Smcer404ApplicationJSONErrorEnum = "record_not_found"
Smcer404ApplicationJSONErrorEnumURLNotFound Smcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Smcer404ApplicationJSONErrorDescriptionEnum string

const (
    Smcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Smcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Smcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Smcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Smcer404ApplicationJSON struct {
    Error *Smcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Smcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Smcer500ApplicationJSONErrorEnum string

const (
    Smcer500ApplicationJSONErrorEnumInternalServerError Smcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Smcer500ApplicationJSONErrorDescriptionEnum string

const (
    Smcer500ApplicationJSONErrorDescriptionEnumInternalServerError Smcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Smcer500ApplicationJSON struct {
    Error *Smcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Smcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Smcer502ApplicationJSONErrorEnum string

const (
    Smcer502ApplicationJSONErrorEnumBadGatewy Smcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Smcer502ApplicationJSONErrorDescriptionEnum string

const (
    Smcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Smcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Smcer502ApplicationJSON struct {
    Error *Smcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Smcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Smcer503ApplicationJSONErrorEnum string

const (
    Smcer503ApplicationJSONErrorEnumServiceUnavailable Smcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Smcer503ApplicationJSONErrorDescriptionEnum string

const (
    Smcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Smcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Smcer503ApplicationJSON struct {
    Error *Smcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Smcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Smcer504ApplicationJSONErrorEnum string

const (
    Smcer504ApplicationJSONErrorEnumGatewayTimeout Smcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Smcer504ApplicationJSONErrorDescriptionEnum string

const (
    Smcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Smcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Smcer504ApplicationJSON struct {
    Error *Smcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Smcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type SmcerResponse struct {
    ContentType string 
    StatusCode int64 
    Smcer400ApplicationJSONObject *Smcer400ApplicationJSON 
    Smcer401ApplicationJSONObject *Smcer401ApplicationJSON 
    Smcer404ApplicationJSONObject *Smcer404ApplicationJSON 
    Smcer500ApplicationJSONObject *Smcer500ApplicationJSON 
    Smcer502ApplicationJSONObject *Smcer502ApplicationJSON 
    Smcer503ApplicationJSONObject *Smcer503ApplicationJSON 
    Smcer504ApplicationJSONObject *Smcer504ApplicationJSON 
    
}


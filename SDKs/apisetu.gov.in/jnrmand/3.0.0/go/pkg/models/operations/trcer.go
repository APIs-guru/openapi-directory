package operations

import (
"openapi/pkg/models/shared")

type TrcerRequestBodyCertificateParameters struct {
    Dob string `json:"DOB"`
    FullName string `json:"FullName"`
    RegNo string `json:"REG_NO"`
    
}


type TrcerRequestBodyFormatEnum string

const (
    TrcerRequestBodyFormatEnumPdf TrcerRequestBodyFormatEnum = "pdf"
)


type TrcerRequestBody struct {
    CertificateParameters *TrcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format TrcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type TrcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type TrcerRequest struct {
    Request *TrcerRequestBody `request:"mediaType=application/json"`
    Security TrcerSecurity 
    
}


type Trcer400ApplicationJSONErrorEnum string

const (
    Trcer400ApplicationJSONErrorEnumMissingParameter Trcer400ApplicationJSONErrorEnum = "missing_parameter"
Trcer400ApplicationJSONErrorEnumInvalidParameter Trcer400ApplicationJSONErrorEnum = "invalid_parameter"
Trcer400ApplicationJSONErrorEnumInvalidFormat Trcer400ApplicationJSONErrorEnum = "invalid_format"
Trcer400ApplicationJSONErrorEnumInvalidTxnid Trcer400ApplicationJSONErrorEnum = "invalid_txnid"
Trcer400ApplicationJSONErrorEnumInvalidConsentid Trcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Trcer400ApplicationJSONErrorDescriptionEnum string

const (
    Trcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Trcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Trcer400ApplicationJSONErrorDescriptionEnumBadRequest Trcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Trcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Trcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Trcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Trcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Trcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Trcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Trcer400ApplicationJSON struct {
    Error *Trcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Trcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Trcer401ApplicationJSONErrorEnum string

const (
    Trcer401ApplicationJSONErrorEnumInvalidAuthentication Trcer401ApplicationJSONErrorEnum = "invalid_authentication"
Trcer401ApplicationJSONErrorEnumInvalidAuthorization Trcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Trcer401ApplicationJSONErrorDescriptionEnum string

const (
    Trcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Trcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Trcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Trcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Trcer401ApplicationJSON struct {
    Error *Trcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Trcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Trcer404ApplicationJSONErrorEnum string

const (
    Trcer404ApplicationJSONErrorEnumRecordNotFound Trcer404ApplicationJSONErrorEnum = "record_not_found"
Trcer404ApplicationJSONErrorEnumURLNotFound Trcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Trcer404ApplicationJSONErrorDescriptionEnum string

const (
    Trcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Trcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Trcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Trcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Trcer404ApplicationJSON struct {
    Error *Trcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Trcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Trcer500ApplicationJSONErrorEnum string

const (
    Trcer500ApplicationJSONErrorEnumInternalServerError Trcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Trcer500ApplicationJSONErrorDescriptionEnum string

const (
    Trcer500ApplicationJSONErrorDescriptionEnumInternalServerError Trcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Trcer500ApplicationJSON struct {
    Error *Trcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Trcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Trcer502ApplicationJSONErrorEnum string

const (
    Trcer502ApplicationJSONErrorEnumBadGatewy Trcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Trcer502ApplicationJSONErrorDescriptionEnum string

const (
    Trcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Trcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Trcer502ApplicationJSON struct {
    Error *Trcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Trcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Trcer503ApplicationJSONErrorEnum string

const (
    Trcer503ApplicationJSONErrorEnumServiceUnavailable Trcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Trcer503ApplicationJSONErrorDescriptionEnum string

const (
    Trcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Trcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Trcer503ApplicationJSON struct {
    Error *Trcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Trcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Trcer504ApplicationJSONErrorEnum string

const (
    Trcer504ApplicationJSONErrorEnumGatewayTimeout Trcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Trcer504ApplicationJSONErrorDescriptionEnum string

const (
    Trcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Trcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Trcer504ApplicationJSON struct {
    Error *Trcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Trcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type TrcerResponse struct {
    ContentType string 
    StatusCode int64 
    Trcer400ApplicationJSONObject *Trcer400ApplicationJSON 
    Trcer401ApplicationJSONObject *Trcer401ApplicationJSON 
    Trcer404ApplicationJSONObject *Trcer404ApplicationJSON 
    Trcer500ApplicationJSONObject *Trcer500ApplicationJSON 
    Trcer502ApplicationJSONObject *Trcer502ApplicationJSON 
    Trcer503ApplicationJSONObject *Trcer503ApplicationJSON 
    Trcer504ApplicationJSONObject *Trcer504ApplicationJSON 
    
}


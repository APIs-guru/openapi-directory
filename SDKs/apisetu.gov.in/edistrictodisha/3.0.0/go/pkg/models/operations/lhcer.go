package operations

import (
"openapi/pkg/models/shared")

type LhcerRequestBodyCertificateParameters struct {
    UID string `json:"UID"`
    Refno string `json:"refno"`
    
}


type LhcerRequestBodyFormatEnum string

const (
    LhcerRequestBodyFormatEnumPdf LhcerRequestBodyFormatEnum = "pdf"
)


type LhcerRequestBody struct {
    CertificateParameters *LhcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format LhcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type LhcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type LhcerRequest struct {
    Request *LhcerRequestBody `request:"mediaType=application/json"`
    Security LhcerSecurity 
    
}


type Lhcer400ApplicationJSONErrorEnum string

const (
    Lhcer400ApplicationJSONErrorEnumMissingParameter Lhcer400ApplicationJSONErrorEnum = "missing_parameter"
Lhcer400ApplicationJSONErrorEnumInvalidParameter Lhcer400ApplicationJSONErrorEnum = "invalid_parameter"
Lhcer400ApplicationJSONErrorEnumInvalidFormat Lhcer400ApplicationJSONErrorEnum = "invalid_format"
Lhcer400ApplicationJSONErrorEnumInvalidTxnid Lhcer400ApplicationJSONErrorEnum = "invalid_txnid"
Lhcer400ApplicationJSONErrorEnumInvalidConsentid Lhcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Lhcer400ApplicationJSONErrorDescriptionEnum string

const (
    Lhcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Lhcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Lhcer400ApplicationJSONErrorDescriptionEnumBadRequest Lhcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Lhcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Lhcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Lhcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Lhcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Lhcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Lhcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Lhcer400ApplicationJSON struct {
    Error *Lhcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lhcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lhcer401ApplicationJSONErrorEnum string

const (
    Lhcer401ApplicationJSONErrorEnumInvalidAuthentication Lhcer401ApplicationJSONErrorEnum = "invalid_authentication"
Lhcer401ApplicationJSONErrorEnumInvalidAuthorization Lhcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Lhcer401ApplicationJSONErrorDescriptionEnum string

const (
    Lhcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Lhcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Lhcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Lhcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Lhcer401ApplicationJSON struct {
    Error *Lhcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lhcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lhcer404ApplicationJSONErrorEnum string

const (
    Lhcer404ApplicationJSONErrorEnumRecordNotFound Lhcer404ApplicationJSONErrorEnum = "record_not_found"
Lhcer404ApplicationJSONErrorEnumURLNotFound Lhcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Lhcer404ApplicationJSONErrorDescriptionEnum string

const (
    Lhcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Lhcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Lhcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Lhcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Lhcer404ApplicationJSON struct {
    Error *Lhcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lhcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lhcer500ApplicationJSONErrorEnum string

const (
    Lhcer500ApplicationJSONErrorEnumInternalServerError Lhcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Lhcer500ApplicationJSONErrorDescriptionEnum string

const (
    Lhcer500ApplicationJSONErrorDescriptionEnumInternalServerError Lhcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Lhcer500ApplicationJSON struct {
    Error *Lhcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lhcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lhcer502ApplicationJSONErrorEnum string

const (
    Lhcer502ApplicationJSONErrorEnumBadGatewy Lhcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Lhcer502ApplicationJSONErrorDescriptionEnum string

const (
    Lhcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Lhcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Lhcer502ApplicationJSON struct {
    Error *Lhcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lhcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lhcer503ApplicationJSONErrorEnum string

const (
    Lhcer503ApplicationJSONErrorEnumServiceUnavailable Lhcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Lhcer503ApplicationJSONErrorDescriptionEnum string

const (
    Lhcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Lhcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Lhcer503ApplicationJSON struct {
    Error *Lhcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lhcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Lhcer504ApplicationJSONErrorEnum string

const (
    Lhcer504ApplicationJSONErrorEnumGatewayTimeout Lhcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Lhcer504ApplicationJSONErrorDescriptionEnum string

const (
    Lhcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Lhcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Lhcer504ApplicationJSON struct {
    Error *Lhcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Lhcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type LhcerResponse struct {
    ContentType string 
    StatusCode int64 
    Lhcer400ApplicationJSONObject *Lhcer400ApplicationJSON 
    Lhcer401ApplicationJSONObject *Lhcer401ApplicationJSON 
    Lhcer404ApplicationJSONObject *Lhcer404ApplicationJSON 
    Lhcer500ApplicationJSONObject *Lhcer500ApplicationJSON 
    Lhcer502ApplicationJSONObject *Lhcer502ApplicationJSON 
    Lhcer503ApplicationJSONObject *Lhcer503ApplicationJSON 
    Lhcer504ApplicationJSONObject *Lhcer504ApplicationJSON 
    
}


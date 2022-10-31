package operations

import (
"openapi/pkg/models/shared")

type LicerRequestBodyCertificateParameters struct {
    FullName string `json:"FullName"`
    Udf1 string `json:"UDF1"`
    Udf2 string `json:"UDF2"`
    
}


type LicerRequestBodyFormatEnum string

const (
    LicerRequestBodyFormatEnumPdf LicerRequestBodyFormatEnum = "pdf"
)


type LicerRequestBody struct {
    CertificateParameters *LicerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format LicerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type LicerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type LicerRequest struct {
    Request *LicerRequestBody `request:"mediaType=application/json"`
    Security LicerSecurity 
    
}


type Licer400ApplicationJSONErrorEnum string

const (
    Licer400ApplicationJSONErrorEnumMissingParameter Licer400ApplicationJSONErrorEnum = "missing_parameter"
Licer400ApplicationJSONErrorEnumInvalidParameter Licer400ApplicationJSONErrorEnum = "invalid_parameter"
Licer400ApplicationJSONErrorEnumInvalidFormat Licer400ApplicationJSONErrorEnum = "invalid_format"
Licer400ApplicationJSONErrorEnumInvalidTxnid Licer400ApplicationJSONErrorEnum = "invalid_txnid"
Licer400ApplicationJSONErrorEnumInvalidConsentid Licer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Licer400ApplicationJSONErrorDescriptionEnum string

const (
    Licer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Licer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Licer400ApplicationJSONErrorDescriptionEnumBadRequest Licer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Licer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Licer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Licer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Licer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Licer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Licer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Licer400ApplicationJSON struct {
    Error *Licer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Licer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Licer401ApplicationJSONErrorEnum string

const (
    Licer401ApplicationJSONErrorEnumInvalidAuthentication Licer401ApplicationJSONErrorEnum = "invalid_authentication"
Licer401ApplicationJSONErrorEnumInvalidAuthorization Licer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Licer401ApplicationJSONErrorDescriptionEnum string

const (
    Licer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Licer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Licer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Licer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Licer401ApplicationJSON struct {
    Error *Licer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Licer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Licer404ApplicationJSONErrorEnum string

const (
    Licer404ApplicationJSONErrorEnumRecordNotFound Licer404ApplicationJSONErrorEnum = "record_not_found"
Licer404ApplicationJSONErrorEnumURLNotFound Licer404ApplicationJSONErrorEnum = "url_not_found"
)



type Licer404ApplicationJSONErrorDescriptionEnum string

const (
    Licer404ApplicationJSONErrorDescriptionEnumNoRecordFound Licer404ApplicationJSONErrorDescriptionEnum = "No record found"
Licer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Licer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Licer404ApplicationJSON struct {
    Error *Licer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Licer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Licer500ApplicationJSONErrorEnum string

const (
    Licer500ApplicationJSONErrorEnumInternalServerError Licer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Licer500ApplicationJSONErrorDescriptionEnum string

const (
    Licer500ApplicationJSONErrorDescriptionEnumInternalServerError Licer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Licer500ApplicationJSON struct {
    Error *Licer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Licer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Licer502ApplicationJSONErrorEnum string

const (
    Licer502ApplicationJSONErrorEnumBadGatewy Licer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Licer502ApplicationJSONErrorDescriptionEnum string

const (
    Licer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Licer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Licer502ApplicationJSON struct {
    Error *Licer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Licer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Licer503ApplicationJSONErrorEnum string

const (
    Licer503ApplicationJSONErrorEnumServiceUnavailable Licer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Licer503ApplicationJSONErrorDescriptionEnum string

const (
    Licer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Licer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Licer503ApplicationJSON struct {
    Error *Licer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Licer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Licer504ApplicationJSONErrorEnum string

const (
    Licer504ApplicationJSONErrorEnumGatewayTimeout Licer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Licer504ApplicationJSONErrorDescriptionEnum string

const (
    Licer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Licer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Licer504ApplicationJSON struct {
    Error *Licer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Licer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type LicerResponse struct {
    ContentType string 
    StatusCode int64 
    Licer400ApplicationJSONObject *Licer400ApplicationJSON 
    Licer401ApplicationJSONObject *Licer401ApplicationJSON 
    Licer404ApplicationJSONObject *Licer404ApplicationJSON 
    Licer500ApplicationJSONObject *Licer500ApplicationJSON 
    Licer502ApplicationJSONObject *Licer502ApplicationJSON 
    Licer503ApplicationJSONObject *Licer503ApplicationJSON 
    Licer504ApplicationJSONObject *Licer504ApplicationJSON 
    
}


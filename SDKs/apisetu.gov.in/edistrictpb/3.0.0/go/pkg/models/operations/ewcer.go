package operations

import (
"openapi/pkg/models/shared")

type EwcerRequestBodyCertificateParameters struct {
    Dob string `json:"DOB"`
    Dsn string `json:"DSN"`
    
}


type EwcerRequestBodyFormatEnum string

const (
    EwcerRequestBodyFormatEnumPdf EwcerRequestBodyFormatEnum = "pdf"
)


type EwcerRequestBody struct {
    CertificateParameters *EwcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format EwcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type EwcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type EwcerRequest struct {
    Request *EwcerRequestBody `request:"mediaType=application/json"`
    Security EwcerSecurity 
    
}


type Ewcer400ApplicationJSONErrorEnum string

const (
    Ewcer400ApplicationJSONErrorEnumMissingParameter Ewcer400ApplicationJSONErrorEnum = "missing_parameter"
Ewcer400ApplicationJSONErrorEnumInvalidParameter Ewcer400ApplicationJSONErrorEnum = "invalid_parameter"
Ewcer400ApplicationJSONErrorEnumInvalidFormat Ewcer400ApplicationJSONErrorEnum = "invalid_format"
Ewcer400ApplicationJSONErrorEnumInvalidTxnid Ewcer400ApplicationJSONErrorEnum = "invalid_txnid"
Ewcer400ApplicationJSONErrorEnumInvalidConsentid Ewcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Ewcer400ApplicationJSONErrorDescriptionEnum string

const (
    Ewcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Ewcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Ewcer400ApplicationJSONErrorDescriptionEnumBadRequest Ewcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Ewcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Ewcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Ewcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Ewcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Ewcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ewcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Ewcer400ApplicationJSON struct {
    Error *Ewcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ewcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ewcer401ApplicationJSONErrorEnum string

const (
    Ewcer401ApplicationJSONErrorEnumInvalidAuthentication Ewcer401ApplicationJSONErrorEnum = "invalid_authentication"
Ewcer401ApplicationJSONErrorEnumInvalidAuthorization Ewcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Ewcer401ApplicationJSONErrorDescriptionEnum string

const (
    Ewcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Ewcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Ewcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ewcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Ewcer401ApplicationJSON struct {
    Error *Ewcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ewcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ewcer404ApplicationJSONErrorEnum string

const (
    Ewcer404ApplicationJSONErrorEnumRecordNotFound Ewcer404ApplicationJSONErrorEnum = "record_not_found"
Ewcer404ApplicationJSONErrorEnumURLNotFound Ewcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Ewcer404ApplicationJSONErrorDescriptionEnum string

const (
    Ewcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Ewcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Ewcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ewcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Ewcer404ApplicationJSON struct {
    Error *Ewcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ewcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ewcer500ApplicationJSONErrorEnum string

const (
    Ewcer500ApplicationJSONErrorEnumInternalServerError Ewcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Ewcer500ApplicationJSONErrorDescriptionEnum string

const (
    Ewcer500ApplicationJSONErrorDescriptionEnumInternalServerError Ewcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Ewcer500ApplicationJSON struct {
    Error *Ewcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ewcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ewcer502ApplicationJSONErrorEnum string

const (
    Ewcer502ApplicationJSONErrorEnumBadGatewy Ewcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Ewcer502ApplicationJSONErrorDescriptionEnum string

const (
    Ewcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ewcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Ewcer502ApplicationJSON struct {
    Error *Ewcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ewcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ewcer503ApplicationJSONErrorEnum string

const (
    Ewcer503ApplicationJSONErrorEnumServiceUnavailable Ewcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Ewcer503ApplicationJSONErrorDescriptionEnum string

const (
    Ewcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ewcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Ewcer503ApplicationJSON struct {
    Error *Ewcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ewcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ewcer504ApplicationJSONErrorEnum string

const (
    Ewcer504ApplicationJSONErrorEnumGatewayTimeout Ewcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Ewcer504ApplicationJSONErrorDescriptionEnum string

const (
    Ewcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ewcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Ewcer504ApplicationJSON struct {
    Error *Ewcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ewcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type EwcerResponse struct {
    ContentType string 
    StatusCode int64 
    Ewcer400ApplicationJSONObject *Ewcer400ApplicationJSON 
    Ewcer401ApplicationJSONObject *Ewcer401ApplicationJSON 
    Ewcer404ApplicationJSONObject *Ewcer404ApplicationJSON 
    Ewcer500ApplicationJSONObject *Ewcer500ApplicationJSON 
    Ewcer502ApplicationJSONObject *Ewcer502ApplicationJSON 
    Ewcer503ApplicationJSONObject *Ewcer503ApplicationJSON 
    Ewcer504ApplicationJSONObject *Ewcer504ApplicationJSON 
    
}


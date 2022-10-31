package operations

import (
"openapi/pkg/models/shared")

type ArmtwRequestBodyCertificateParameters struct {
    Udf1 string `json:"UDF1"`
    
}


type ArmtwRequestBodyFormatEnum string

const (
    ArmtwRequestBodyFormatEnumPdf ArmtwRequestBodyFormatEnum = "pdf"
)


type ArmtwRequestBody struct {
    CertificateParameters *ArmtwRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format ArmtwRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type ArmtwSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type ArmtwRequest struct {
    Request *ArmtwRequestBody `request:"mediaType=application/json"`
    Security ArmtwSecurity 
    
}


type Armtw400ApplicationJSONErrorEnum string

const (
    Armtw400ApplicationJSONErrorEnumMissingParameter Armtw400ApplicationJSONErrorEnum = "missing_parameter"
Armtw400ApplicationJSONErrorEnumInvalidParameter Armtw400ApplicationJSONErrorEnum = "invalid_parameter"
Armtw400ApplicationJSONErrorEnumInvalidFormat Armtw400ApplicationJSONErrorEnum = "invalid_format"
Armtw400ApplicationJSONErrorEnumInvalidTxnid Armtw400ApplicationJSONErrorEnum = "invalid_txnid"
Armtw400ApplicationJSONErrorEnumInvalidConsentid Armtw400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Armtw400ApplicationJSONErrorDescriptionEnum string

const (
    Armtw400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Armtw400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Armtw400ApplicationJSONErrorDescriptionEnumBadRequest Armtw400ApplicationJSONErrorDescriptionEnum = "Bad request"
Armtw400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Armtw400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Armtw400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Armtw400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Armtw400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Armtw400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Armtw400ApplicationJSON struct {
    Error *Armtw400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Armtw400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Armtw401ApplicationJSONErrorEnum string

const (
    Armtw401ApplicationJSONErrorEnumInvalidAuthentication Armtw401ApplicationJSONErrorEnum = "invalid_authentication"
Armtw401ApplicationJSONErrorEnumInvalidAuthorization Armtw401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Armtw401ApplicationJSONErrorDescriptionEnum string

const (
    Armtw401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Armtw401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Armtw401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Armtw401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Armtw401ApplicationJSON struct {
    Error *Armtw401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Armtw401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Armtw404ApplicationJSONErrorEnum string

const (
    Armtw404ApplicationJSONErrorEnumRecordNotFound Armtw404ApplicationJSONErrorEnum = "record_not_found"
Armtw404ApplicationJSONErrorEnumURLNotFound Armtw404ApplicationJSONErrorEnum = "url_not_found"
)



type Armtw404ApplicationJSONErrorDescriptionEnum string

const (
    Armtw404ApplicationJSONErrorDescriptionEnumNoRecordFound Armtw404ApplicationJSONErrorDescriptionEnum = "No record found"
Armtw404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Armtw404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Armtw404ApplicationJSON struct {
    Error *Armtw404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Armtw404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Armtw500ApplicationJSONErrorEnum string

const (
    Armtw500ApplicationJSONErrorEnumInternalServerError Armtw500ApplicationJSONErrorEnum = "internal_server_error"
)



type Armtw500ApplicationJSONErrorDescriptionEnum string

const (
    Armtw500ApplicationJSONErrorDescriptionEnumInternalServerError Armtw500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Armtw500ApplicationJSON struct {
    Error *Armtw500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Armtw500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Armtw502ApplicationJSONErrorEnum string

const (
    Armtw502ApplicationJSONErrorEnumBadGatewy Armtw502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Armtw502ApplicationJSONErrorDescriptionEnum string

const (
    Armtw502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Armtw502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Armtw502ApplicationJSON struct {
    Error *Armtw502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Armtw502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Armtw503ApplicationJSONErrorEnum string

const (
    Armtw503ApplicationJSONErrorEnumServiceUnavailable Armtw503ApplicationJSONErrorEnum = "service_unavailable"
)



type Armtw503ApplicationJSONErrorDescriptionEnum string

const (
    Armtw503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Armtw503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Armtw503ApplicationJSON struct {
    Error *Armtw503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Armtw503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Armtw504ApplicationJSONErrorEnum string

const (
    Armtw504ApplicationJSONErrorEnumGatewayTimeout Armtw504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Armtw504ApplicationJSONErrorDescriptionEnum string

const (
    Armtw504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Armtw504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Armtw504ApplicationJSON struct {
    Error *Armtw504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Armtw504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type ArmtwResponse struct {
    ContentType string 
    StatusCode int64 
    Armtw400ApplicationJSONObject *Armtw400ApplicationJSON 
    Armtw401ApplicationJSONObject *Armtw401ApplicationJSON 
    Armtw404ApplicationJSONObject *Armtw404ApplicationJSON 
    Armtw500ApplicationJSONObject *Armtw500ApplicationJSON 
    Armtw502ApplicationJSONObject *Armtw502ApplicationJSON 
    Armtw503ApplicationJSONObject *Armtw503ApplicationJSON 
    Armtw504ApplicationJSONObject *Armtw504ApplicationJSON 
    
}


package operations

import (
"openapi/pkg/models/shared")

type CfltrRequestBodyCertificateParameters struct {
    Dob string `json:"DOB"`
    FullName string `json:"FullName"`
    RegNum string `json:"RegNum"`
    UID string `json:"UID"`
    
}


type CfltrRequestBodyFormatEnum string

const (
    CfltrRequestBodyFormatEnumPdf CfltrRequestBodyFormatEnum = "pdf"
)


type CfltrRequestBody struct {
    CertificateParameters *CfltrRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format CfltrRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type CfltrSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type CfltrRequest struct {
    Request *CfltrRequestBody `request:"mediaType=application/json"`
    Security CfltrSecurity 
    
}


type Cfltr400ApplicationJSONErrorEnum string

const (
    Cfltr400ApplicationJSONErrorEnumMissingParameter Cfltr400ApplicationJSONErrorEnum = "missing_parameter"
Cfltr400ApplicationJSONErrorEnumInvalidParameter Cfltr400ApplicationJSONErrorEnum = "invalid_parameter"
Cfltr400ApplicationJSONErrorEnumInvalidFormat Cfltr400ApplicationJSONErrorEnum = "invalid_format"
Cfltr400ApplicationJSONErrorEnumInvalidTxnid Cfltr400ApplicationJSONErrorEnum = "invalid_txnid"
Cfltr400ApplicationJSONErrorEnumInvalidConsentid Cfltr400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Cfltr400ApplicationJSONErrorDescriptionEnum string

const (
    Cfltr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Cfltr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Cfltr400ApplicationJSONErrorDescriptionEnumBadRequest Cfltr400ApplicationJSONErrorDescriptionEnum = "Bad request"
Cfltr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Cfltr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Cfltr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Cfltr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Cfltr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Cfltr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Cfltr400ApplicationJSON struct {
    Error *Cfltr400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cfltr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cfltr401ApplicationJSONErrorEnum string

const (
    Cfltr401ApplicationJSONErrorEnumInvalidAuthentication Cfltr401ApplicationJSONErrorEnum = "invalid_authentication"
Cfltr401ApplicationJSONErrorEnumInvalidAuthorization Cfltr401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Cfltr401ApplicationJSONErrorDescriptionEnum string

const (
    Cfltr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Cfltr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Cfltr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Cfltr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Cfltr401ApplicationJSON struct {
    Error *Cfltr401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cfltr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cfltr404ApplicationJSONErrorEnum string

const (
    Cfltr404ApplicationJSONErrorEnumRecordNotFound Cfltr404ApplicationJSONErrorEnum = "record_not_found"
Cfltr404ApplicationJSONErrorEnumURLNotFound Cfltr404ApplicationJSONErrorEnum = "url_not_found"
)



type Cfltr404ApplicationJSONErrorDescriptionEnum string

const (
    Cfltr404ApplicationJSONErrorDescriptionEnumNoRecordFound Cfltr404ApplicationJSONErrorDescriptionEnum = "No record found"
Cfltr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Cfltr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Cfltr404ApplicationJSON struct {
    Error *Cfltr404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cfltr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cfltr500ApplicationJSONErrorEnum string

const (
    Cfltr500ApplicationJSONErrorEnumInternalServerError Cfltr500ApplicationJSONErrorEnum = "internal_server_error"
)



type Cfltr500ApplicationJSONErrorDescriptionEnum string

const (
    Cfltr500ApplicationJSONErrorDescriptionEnumInternalServerError Cfltr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Cfltr500ApplicationJSON struct {
    Error *Cfltr500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cfltr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cfltr502ApplicationJSONErrorEnum string

const (
    Cfltr502ApplicationJSONErrorEnumBadGatewy Cfltr502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Cfltr502ApplicationJSONErrorDescriptionEnum string

const (
    Cfltr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Cfltr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Cfltr502ApplicationJSON struct {
    Error *Cfltr502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cfltr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cfltr503ApplicationJSONErrorEnum string

const (
    Cfltr503ApplicationJSONErrorEnumServiceUnavailable Cfltr503ApplicationJSONErrorEnum = "service_unavailable"
)



type Cfltr503ApplicationJSONErrorDescriptionEnum string

const (
    Cfltr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Cfltr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Cfltr503ApplicationJSON struct {
    Error *Cfltr503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cfltr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Cfltr504ApplicationJSONErrorEnum string

const (
    Cfltr504ApplicationJSONErrorEnumGatewayTimeout Cfltr504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Cfltr504ApplicationJSONErrorDescriptionEnum string

const (
    Cfltr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Cfltr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Cfltr504ApplicationJSON struct {
    Error *Cfltr504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Cfltr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type CfltrResponse struct {
    ContentType string 
    StatusCode int64 
    Cfltr400ApplicationJSONObject *Cfltr400ApplicationJSON 
    Cfltr401ApplicationJSONObject *Cfltr401ApplicationJSON 
    Cfltr404ApplicationJSONObject *Cfltr404ApplicationJSON 
    Cfltr500ApplicationJSONObject *Cfltr500ApplicationJSON 
    Cfltr502ApplicationJSONObject *Cfltr502ApplicationJSON 
    Cfltr503ApplicationJSONObject *Cfltr503ApplicationJSON 
    Cfltr504ApplicationJSONObject *Cfltr504ApplicationJSON 
    
}


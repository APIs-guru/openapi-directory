package operations

import (
"openapi/pkg/models/shared")

type NtltrRequestBodyCertificateParameters struct {
    FullName string `json:"FullName"`
    Rollno string `json:"rollno"`
    Year string `json:"year"`
    
}


type NtltrRequestBodyFormatEnum string

const (
    NtltrRequestBodyFormatEnumPdf NtltrRequestBodyFormatEnum = "pdf"
)


type NtltrRequestBody struct {
    CertificateParameters *NtltrRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format NtltrRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type NtltrSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type NtltrRequest struct {
    Request *NtltrRequestBody `request:"mediaType=application/json"`
    Security NtltrSecurity 
    
}


type Ntltr400ApplicationJSONErrorEnum string

const (
    Ntltr400ApplicationJSONErrorEnumMissingParameter Ntltr400ApplicationJSONErrorEnum = "missing_parameter"
Ntltr400ApplicationJSONErrorEnumInvalidParameter Ntltr400ApplicationJSONErrorEnum = "invalid_parameter"
Ntltr400ApplicationJSONErrorEnumInvalidFormat Ntltr400ApplicationJSONErrorEnum = "invalid_format"
Ntltr400ApplicationJSONErrorEnumInvalidTxnid Ntltr400ApplicationJSONErrorEnum = "invalid_txnid"
Ntltr400ApplicationJSONErrorEnumInvalidConsentid Ntltr400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Ntltr400ApplicationJSONErrorDescriptionEnum string

const (
    Ntltr400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Ntltr400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Ntltr400ApplicationJSONErrorDescriptionEnumBadRequest Ntltr400ApplicationJSONErrorDescriptionEnum = "Bad request"
Ntltr400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Ntltr400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Ntltr400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Ntltr400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Ntltr400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Ntltr400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Ntltr400ApplicationJSON struct {
    Error *Ntltr400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ntltr400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ntltr401ApplicationJSONErrorEnum string

const (
    Ntltr401ApplicationJSONErrorEnumInvalidAuthentication Ntltr401ApplicationJSONErrorEnum = "invalid_authentication"
Ntltr401ApplicationJSONErrorEnumInvalidAuthorization Ntltr401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Ntltr401ApplicationJSONErrorDescriptionEnum string

const (
    Ntltr401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Ntltr401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Ntltr401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Ntltr401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Ntltr401ApplicationJSON struct {
    Error *Ntltr401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ntltr401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ntltr404ApplicationJSONErrorEnum string

const (
    Ntltr404ApplicationJSONErrorEnumRecordNotFound Ntltr404ApplicationJSONErrorEnum = "record_not_found"
Ntltr404ApplicationJSONErrorEnumURLNotFound Ntltr404ApplicationJSONErrorEnum = "url_not_found"
)



type Ntltr404ApplicationJSONErrorDescriptionEnum string

const (
    Ntltr404ApplicationJSONErrorDescriptionEnumNoRecordFound Ntltr404ApplicationJSONErrorDescriptionEnum = "No record found"
Ntltr404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Ntltr404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Ntltr404ApplicationJSON struct {
    Error *Ntltr404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ntltr404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ntltr500ApplicationJSONErrorEnum string

const (
    Ntltr500ApplicationJSONErrorEnumInternalServerError Ntltr500ApplicationJSONErrorEnum = "internal_server_error"
)



type Ntltr500ApplicationJSONErrorDescriptionEnum string

const (
    Ntltr500ApplicationJSONErrorDescriptionEnumInternalServerError Ntltr500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Ntltr500ApplicationJSON struct {
    Error *Ntltr500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ntltr500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ntltr502ApplicationJSONErrorEnum string

const (
    Ntltr502ApplicationJSONErrorEnumBadGatewy Ntltr502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Ntltr502ApplicationJSONErrorDescriptionEnum string

const (
    Ntltr502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Ntltr502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Ntltr502ApplicationJSON struct {
    Error *Ntltr502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ntltr502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ntltr503ApplicationJSONErrorEnum string

const (
    Ntltr503ApplicationJSONErrorEnumServiceUnavailable Ntltr503ApplicationJSONErrorEnum = "service_unavailable"
)



type Ntltr503ApplicationJSONErrorDescriptionEnum string

const (
    Ntltr503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Ntltr503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Ntltr503ApplicationJSON struct {
    Error *Ntltr503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ntltr503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Ntltr504ApplicationJSONErrorEnum string

const (
    Ntltr504ApplicationJSONErrorEnumGatewayTimeout Ntltr504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Ntltr504ApplicationJSONErrorDescriptionEnum string

const (
    Ntltr504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Ntltr504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Ntltr504ApplicationJSON struct {
    Error *Ntltr504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Ntltr504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type NtltrResponse struct {
    ContentType string 
    StatusCode int64 
    Ntltr400ApplicationJSONObject *Ntltr400ApplicationJSON 
    Ntltr401ApplicationJSONObject *Ntltr401ApplicationJSON 
    Ntltr404ApplicationJSONObject *Ntltr404ApplicationJSON 
    Ntltr500ApplicationJSONObject *Ntltr500ApplicationJSON 
    Ntltr502ApplicationJSONObject *Ntltr502ApplicationJSON 
    Ntltr503ApplicationJSONObject *Ntltr503ApplicationJSON 
    Ntltr504ApplicationJSONObject *Ntltr504ApplicationJSON 
    
}


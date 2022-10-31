package operations

import (
"openapi/pkg/models/shared")

type SkmstRequestBodyCertificateParameters struct {
    Txt10thRollNo string `json:"txt10thRollNo"`
    TxtCandidateAppSeq string `json:"txtCandidateAppSeq"`
    TxtExamDate string `json:"txtExamDate"`
    
}


type SkmstRequestBodyFormatEnum string

const (
    SkmstRequestBodyFormatEnumPdf SkmstRequestBodyFormatEnum = "pdf"
)


type SkmstRequestBody struct {
    CertificateParameters *SkmstRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format SkmstRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type SkmstSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type SkmstRequest struct {
    Request *SkmstRequestBody `request:"mediaType=application/json"`
    Security SkmstSecurity 
    
}


type Skmst400ApplicationJSONErrorEnum string

const (
    Skmst400ApplicationJSONErrorEnumMissingParameter Skmst400ApplicationJSONErrorEnum = "missing_parameter"
Skmst400ApplicationJSONErrorEnumInvalidParameter Skmst400ApplicationJSONErrorEnum = "invalid_parameter"
Skmst400ApplicationJSONErrorEnumInvalidFormat Skmst400ApplicationJSONErrorEnum = "invalid_format"
Skmst400ApplicationJSONErrorEnumInvalidTxnid Skmst400ApplicationJSONErrorEnum = "invalid_txnid"
Skmst400ApplicationJSONErrorEnumInvalidConsentid Skmst400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Skmst400ApplicationJSONErrorDescriptionEnum string

const (
    Skmst400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Skmst400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Skmst400ApplicationJSONErrorDescriptionEnumBadRequest Skmst400ApplicationJSONErrorDescriptionEnum = "Bad request"
Skmst400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Skmst400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Skmst400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Skmst400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Skmst400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Skmst400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Skmst400ApplicationJSON struct {
    Error *Skmst400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Skmst400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Skmst401ApplicationJSONErrorEnum string

const (
    Skmst401ApplicationJSONErrorEnumInvalidAuthentication Skmst401ApplicationJSONErrorEnum = "invalid_authentication"
Skmst401ApplicationJSONErrorEnumInvalidAuthorization Skmst401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Skmst401ApplicationJSONErrorDescriptionEnum string

const (
    Skmst401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Skmst401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Skmst401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Skmst401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Skmst401ApplicationJSON struct {
    Error *Skmst401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Skmst401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Skmst404ApplicationJSONErrorEnum string

const (
    Skmst404ApplicationJSONErrorEnumRecordNotFound Skmst404ApplicationJSONErrorEnum = "record_not_found"
Skmst404ApplicationJSONErrorEnumURLNotFound Skmst404ApplicationJSONErrorEnum = "url_not_found"
)



type Skmst404ApplicationJSONErrorDescriptionEnum string

const (
    Skmst404ApplicationJSONErrorDescriptionEnumNoRecordFound Skmst404ApplicationJSONErrorDescriptionEnum = "No record found"
Skmst404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Skmst404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Skmst404ApplicationJSON struct {
    Error *Skmst404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Skmst404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Skmst500ApplicationJSONErrorEnum string

const (
    Skmst500ApplicationJSONErrorEnumInternalServerError Skmst500ApplicationJSONErrorEnum = "internal_server_error"
)



type Skmst500ApplicationJSONErrorDescriptionEnum string

const (
    Skmst500ApplicationJSONErrorDescriptionEnumInternalServerError Skmst500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Skmst500ApplicationJSON struct {
    Error *Skmst500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Skmst500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Skmst502ApplicationJSONErrorEnum string

const (
    Skmst502ApplicationJSONErrorEnumBadGatewy Skmst502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Skmst502ApplicationJSONErrorDescriptionEnum string

const (
    Skmst502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Skmst502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Skmst502ApplicationJSON struct {
    Error *Skmst502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Skmst502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Skmst503ApplicationJSONErrorEnum string

const (
    Skmst503ApplicationJSONErrorEnumServiceUnavailable Skmst503ApplicationJSONErrorEnum = "service_unavailable"
)



type Skmst503ApplicationJSONErrorDescriptionEnum string

const (
    Skmst503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Skmst503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Skmst503ApplicationJSON struct {
    Error *Skmst503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Skmst503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Skmst504ApplicationJSONErrorEnum string

const (
    Skmst504ApplicationJSONErrorEnumGatewayTimeout Skmst504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Skmst504ApplicationJSONErrorDescriptionEnum string

const (
    Skmst504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Skmst504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Skmst504ApplicationJSON struct {
    Error *Skmst504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Skmst504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type SkmstResponse struct {
    ContentType string 
    StatusCode int64 
    Skmst400ApplicationJSONObject *Skmst400ApplicationJSON 
    Skmst401ApplicationJSONObject *Skmst401ApplicationJSON 
    Skmst404ApplicationJSONObject *Skmst404ApplicationJSON 
    Skmst500ApplicationJSONObject *Skmst500ApplicationJSON 
    Skmst502ApplicationJSONObject *Skmst502ApplicationJSON 
    Skmst503ApplicationJSONObject *Skmst503ApplicationJSON 
    Skmst504ApplicationJSONObject *Skmst504ApplicationJSON 
    
}


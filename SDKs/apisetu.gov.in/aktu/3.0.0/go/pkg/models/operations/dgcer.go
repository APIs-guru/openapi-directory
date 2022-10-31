package operations

import (
"openapi/pkg/models/shared")

type DgcerRequestBodyCertificateParameters struct {
    Dob string `json:"DOB"`
    EnrollmentNo string `json:"EnrollmentNo"`
    FullName string `json:"FullName"`
    RollNo string `json:"RollNo"`
    UID string `json:"UID"`
    
}


type DgcerRequestBodyFormatEnum string

const (
    DgcerRequestBodyFormatEnumPdf DgcerRequestBodyFormatEnum = "pdf"
)


type DgcerRequestBody struct {
    CertificateParameters *DgcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format DgcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type DgcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type DgcerRequest struct {
    Request *DgcerRequestBody `request:"mediaType=application/json"`
    Security DgcerSecurity 
    
}


type Dgcer400ApplicationJSONErrorEnum string

const (
    Dgcer400ApplicationJSONErrorEnumMissingParameter Dgcer400ApplicationJSONErrorEnum = "missing_parameter"
Dgcer400ApplicationJSONErrorEnumInvalidParameter Dgcer400ApplicationJSONErrorEnum = "invalid_parameter"
Dgcer400ApplicationJSONErrorEnumInvalidFormat Dgcer400ApplicationJSONErrorEnum = "invalid_format"
Dgcer400ApplicationJSONErrorEnumInvalidTxnid Dgcer400ApplicationJSONErrorEnum = "invalid_txnid"
Dgcer400ApplicationJSONErrorEnumInvalidConsentid Dgcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Dgcer400ApplicationJSONErrorDescriptionEnum string

const (
    Dgcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Dgcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Dgcer400ApplicationJSONErrorDescriptionEnumBadRequest Dgcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Dgcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Dgcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Dgcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Dgcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Dgcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Dgcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Dgcer400ApplicationJSON struct {
    Error *Dgcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dgcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dgcer401ApplicationJSONErrorEnum string

const (
    Dgcer401ApplicationJSONErrorEnumInvalidAuthentication Dgcer401ApplicationJSONErrorEnum = "invalid_authentication"
Dgcer401ApplicationJSONErrorEnumInvalidAuthorization Dgcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Dgcer401ApplicationJSONErrorDescriptionEnum string

const (
    Dgcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Dgcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Dgcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Dgcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Dgcer401ApplicationJSON struct {
    Error *Dgcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dgcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dgcer404ApplicationJSONErrorEnum string

const (
    Dgcer404ApplicationJSONErrorEnumRecordNotFound Dgcer404ApplicationJSONErrorEnum = "record_not_found"
Dgcer404ApplicationJSONErrorEnumURLNotFound Dgcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Dgcer404ApplicationJSONErrorDescriptionEnum string

const (
    Dgcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Dgcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Dgcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Dgcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Dgcer404ApplicationJSON struct {
    Error *Dgcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dgcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dgcer500ApplicationJSONErrorEnum string

const (
    Dgcer500ApplicationJSONErrorEnumInternalServerError Dgcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Dgcer500ApplicationJSONErrorDescriptionEnum string

const (
    Dgcer500ApplicationJSONErrorDescriptionEnumInternalServerError Dgcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Dgcer500ApplicationJSON struct {
    Error *Dgcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dgcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dgcer502ApplicationJSONErrorEnum string

const (
    Dgcer502ApplicationJSONErrorEnumBadGatewy Dgcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Dgcer502ApplicationJSONErrorDescriptionEnum string

const (
    Dgcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Dgcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Dgcer502ApplicationJSON struct {
    Error *Dgcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dgcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dgcer503ApplicationJSONErrorEnum string

const (
    Dgcer503ApplicationJSONErrorEnumServiceUnavailable Dgcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Dgcer503ApplicationJSONErrorDescriptionEnum string

const (
    Dgcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Dgcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Dgcer503ApplicationJSON struct {
    Error *Dgcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dgcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Dgcer504ApplicationJSONErrorEnum string

const (
    Dgcer504ApplicationJSONErrorEnumGatewayTimeout Dgcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Dgcer504ApplicationJSONErrorDescriptionEnum string

const (
    Dgcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Dgcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Dgcer504ApplicationJSON struct {
    Error *Dgcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Dgcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type DgcerResponse struct {
    ContentType string 
    StatusCode int64 
    Dgcer400ApplicationJSONObject *Dgcer400ApplicationJSON 
    Dgcer401ApplicationJSONObject *Dgcer401ApplicationJSON 
    Dgcer404ApplicationJSONObject *Dgcer404ApplicationJSON 
    Dgcer500ApplicationJSONObject *Dgcer500ApplicationJSON 
    Dgcer502ApplicationJSONObject *Dgcer502ApplicationJSON 
    Dgcer503ApplicationJSONObject *Dgcer503ApplicationJSON 
    Dgcer504ApplicationJSONObject *Dgcer504ApplicationJSON 
    
}


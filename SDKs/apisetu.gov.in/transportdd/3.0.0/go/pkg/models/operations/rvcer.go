package operations

import (
"openapi/pkg/models/shared")

type RvcerRequestBodyCertificateParameters struct {
    FullName string `json:"FullName"`
    UID string `json:"UID"`
    ChasisNo string `json:"chasis_no"`
    RegNo string `json:"reg_no"`
    
}


type RvcerRequestBodyFormatEnum string

const (
    RvcerRequestBodyFormatEnumXML RvcerRequestBodyFormatEnum = "xml"
RvcerRequestBodyFormatEnumPdf RvcerRequestBodyFormatEnum = "pdf"
)


type RvcerRequestBody struct {
    CertificateParameters *RvcerRequestBodyCertificateParameters `json:"certificateParameters,omitempty"`
    ConsentArtifact *interface{} `json:"consentArtifact,omitempty"`
    Format RvcerRequestBodyFormatEnum `json:"format"`
    TxnID string `json:"txnId"`
    
}

type RvcerSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    ClientID shared.SchemeClientID `security:"scheme,type=apiKey,subtype=header"`
    
}

type RvcerRequest struct {
    Request *RvcerRequestBody `request:"mediaType=application/json"`
    Security RvcerSecurity 
    
}


type Rvcer400ApplicationJSONErrorEnum string

const (
    Rvcer400ApplicationJSONErrorEnumMissingParameter Rvcer400ApplicationJSONErrorEnum = "missing_parameter"
Rvcer400ApplicationJSONErrorEnumInvalidParameter Rvcer400ApplicationJSONErrorEnum = "invalid_parameter"
Rvcer400ApplicationJSONErrorEnumInvalidFormat Rvcer400ApplicationJSONErrorEnum = "invalid_format"
Rvcer400ApplicationJSONErrorEnumInvalidTxnid Rvcer400ApplicationJSONErrorEnum = "invalid_txnid"
Rvcer400ApplicationJSONErrorEnumInvalidConsentid Rvcer400ApplicationJSONErrorEnum = "invalid_consentid"
)



type Rvcer400ApplicationJSONErrorDescriptionEnum string

const (
    Rvcer400ApplicationJSONErrorDescriptionEnumPleaseProvideAllMandatoryParameters Rvcer400ApplicationJSONErrorDescriptionEnum = "Please provide all mandatory parameters"
Rvcer400ApplicationJSONErrorDescriptionEnumBadRequest Rvcer400ApplicationJSONErrorDescriptionEnum = "Bad request"
Rvcer400ApplicationJSONErrorDescriptionEnumTheFormatParameterIsInvalid Rvcer400ApplicationJSONErrorDescriptionEnum = "The format parameter is invalid"
Rvcer400ApplicationJSONErrorDescriptionEnumTheTxnIDParameterMustBeInUUIDFormat Rvcer400ApplicationJSONErrorDescriptionEnum = "The txnId parameter must be in UUID format"
Rvcer400ApplicationJSONErrorDescriptionEnumTheConsentIDParameterMustBeInUUIDFormat Rvcer400ApplicationJSONErrorDescriptionEnum = "The consentId parameter must be in UUID format"
)


type Rvcer400ApplicationJSON struct {
    Error *Rvcer400ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rvcer400ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rvcer401ApplicationJSONErrorEnum string

const (
    Rvcer401ApplicationJSONErrorEnumInvalidAuthentication Rvcer401ApplicationJSONErrorEnum = "invalid_authentication"
Rvcer401ApplicationJSONErrorEnumInvalidAuthorization Rvcer401ApplicationJSONErrorEnum = "invalid_authorization"
)



type Rvcer401ApplicationJSONErrorDescriptionEnum string

const (
    Rvcer401ApplicationJSONErrorDescriptionEnumAuthenticationFailed Rvcer401ApplicationJSONErrorDescriptionEnum = "Authentication failed"
Rvcer401ApplicationJSONErrorDescriptionEnumYouAreNotAuthorizedToUseThisAPI Rvcer401ApplicationJSONErrorDescriptionEnum = "You are not authorized to use this API"
)


type Rvcer401ApplicationJSON struct {
    Error *Rvcer401ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rvcer401ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rvcer404ApplicationJSONErrorEnum string

const (
    Rvcer404ApplicationJSONErrorEnumRecordNotFound Rvcer404ApplicationJSONErrorEnum = "record_not_found"
Rvcer404ApplicationJSONErrorEnumURLNotFound Rvcer404ApplicationJSONErrorEnum = "url_not_found"
)



type Rvcer404ApplicationJSONErrorDescriptionEnum string

const (
    Rvcer404ApplicationJSONErrorDescriptionEnumNoRecordFound Rvcer404ApplicationJSONErrorDescriptionEnum = "No record found"
Rvcer404ApplicationJSONErrorDescriptionEnumYourApiurlOrPathIsIncorrect Rvcer404ApplicationJSONErrorDescriptionEnum = "Your API url or path is incorrect"
)


type Rvcer404ApplicationJSON struct {
    Error *Rvcer404ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rvcer404ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rvcer500ApplicationJSONErrorEnum string

const (
    Rvcer500ApplicationJSONErrorEnumInternalServerError Rvcer500ApplicationJSONErrorEnum = "internal_server_error"
)



type Rvcer500ApplicationJSONErrorDescriptionEnum string

const (
    Rvcer500ApplicationJSONErrorDescriptionEnumInternalServerError Rvcer500ApplicationJSONErrorDescriptionEnum = "Internal server error"
)


type Rvcer500ApplicationJSON struct {
    Error *Rvcer500ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rvcer500ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rvcer502ApplicationJSONErrorEnum string

const (
    Rvcer502ApplicationJSONErrorEnumBadGatewy Rvcer502ApplicationJSONErrorEnum = "bad_gatewy"
)



type Rvcer502ApplicationJSONErrorDescriptionEnum string

const (
    Rvcer502ApplicationJSONErrorDescriptionEnumPublisherServiceReturnedAnInvalidResponse Rvcer502ApplicationJSONErrorDescriptionEnum = "Publisher service returned an invalid response"
)


type Rvcer502ApplicationJSON struct {
    Error *Rvcer502ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rvcer502ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rvcer503ApplicationJSONErrorEnum string

const (
    Rvcer503ApplicationJSONErrorEnumServiceUnavailable Rvcer503ApplicationJSONErrorEnum = "service_unavailable"
)



type Rvcer503ApplicationJSONErrorDescriptionEnum string

const (
    Rvcer503ApplicationJSONErrorDescriptionEnumPublisherServiceIsTemporarilyUnavailable Rvcer503ApplicationJSONErrorDescriptionEnum = "Publisher service is temporarily unavailable"
)


type Rvcer503ApplicationJSON struct {
    Error *Rvcer503ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rvcer503ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}


type Rvcer504ApplicationJSONErrorEnum string

const (
    Rvcer504ApplicationJSONErrorEnumGatewayTimeout Rvcer504ApplicationJSONErrorEnum = "gateway_timeout"
)



type Rvcer504ApplicationJSONErrorDescriptionEnum string

const (
    Rvcer504ApplicationJSONErrorDescriptionEnumPublisherServiceDidNotRespondInTime Rvcer504ApplicationJSONErrorDescriptionEnum = "Publisher service did not respond in time"
)


type Rvcer504ApplicationJSON struct {
    Error *Rvcer504ApplicationJSONErrorEnum `json:"error,omitempty"`
    ErrorDescription *Rvcer504ApplicationJSONErrorDescriptionEnum `json:"errorDescription,omitempty"`
    
}

type RvcerResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Rvcer400ApplicationJSONObject *Rvcer400ApplicationJSON 
    Rvcer401ApplicationJSONObject *Rvcer401ApplicationJSON 
    Rvcer404ApplicationJSONObject *Rvcer404ApplicationJSON 
    Rvcer500ApplicationJSONObject *Rvcer500ApplicationJSON 
    Rvcer502ApplicationJSONObject *Rvcer502ApplicationJSON 
    Rvcer503ApplicationJSONObject *Rvcer503ApplicationJSON 
    Rvcer504ApplicationJSONObject *Rvcer504ApplicationJSON 
    
}


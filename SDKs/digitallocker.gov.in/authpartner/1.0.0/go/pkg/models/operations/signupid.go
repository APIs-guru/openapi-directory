package operations

import (
"openapi/pkg/models/shared")

type SignUpIDSecurity struct {
    Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
    
}

type SignUpIDRequest struct {
    Request *interface{} `request:"mediaType=multipart/form-data"`
    Security SignUpIDSecurity 
    
}

type SignUpID401ApplicationJSON struct {
    Error *string `json:"error,omitempty"`
    ErrorDescription *string `json:"error_description,omitempty"`
    
}

type SignUpID500ApplicationJSON struct {
    Error *interface{} `json:"error,omitempty"`
    ErrorDescription *interface{} `json:"error_description,omitempty"`
    
}

type SignUpIDResponse struct {
    ContentType string 
    DemoAuthResponse *interface{} 
    SignUpID400ApplicationJSONOneOf *interface{} 
    SignUpID401ApplicationJSONObject *SignUpID401ApplicationJSON 
    SignUpID500ApplicationJSONObject *SignUpID500ApplicationJSON 
    StatusCode int64 
    
}


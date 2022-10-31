package operations

import (
"openapi/pkg/models/shared")

type GetListOfIssuersIDSecurity struct {
    Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
    
}

type GetListOfIssuersIDRequest struct {
    Request *interface{} `request:"mediaType=application/x-www-form-urlencoded"`
    Security GetListOfIssuersIDSecurity 
    
}

type GetListOfIssuersID400ApplicationJSON struct {
    Error *string `json:"error,omitempty"`
    ErrorDescription *string `json:"error_description,omitempty"`
    
}

type GetListOfIssuersID401ApplicationJSON struct {
    Error *string `json:"error,omitempty"`
    ErrorDescription *string `json:"error_description,omitempty"`
    
}

type GetListOfIssuersID500ApplicationJSON struct {
    Error *interface{} `json:"error,omitempty"`
    ErrorDescription *interface{} `json:"error_description,omitempty"`
    
}

type GetListOfIssuersIDResponse struct {
    ContentType string 
    GetListOfIssuersID400ApplicationJSONObject *GetListOfIssuersID400ApplicationJSON 
    GetListOfIssuersID401ApplicationJSONObject *GetListOfIssuersID401ApplicationJSON 
    GetListOfIssuersID500ApplicationJSONObject *GetListOfIssuersID500ApplicationJSON 
    IssuerResponse *shared.IssuerResponse 
    StatusCode int64 
    
}


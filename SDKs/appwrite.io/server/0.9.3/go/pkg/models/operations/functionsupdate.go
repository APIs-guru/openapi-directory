package operations

import (
"openapi/pkg/models/shared")

type FunctionsUpdatePathParams struct {
    FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
    
}

type FunctionsUpdateRequestBody struct {
    Events []string `json:"events,omitempty"`
    Execute []string `json:"execute"`
    Name string `json:"name"`
    Schedule *string `json:"schedule,omitempty"`
    Timeout *int64 `json:"timeout,omitempty"`
    Vars map[string]interface{} `json:"vars,omitempty"`
    
}

type FunctionsUpdateSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type FunctionsUpdateRequest struct {
    PathParams FunctionsUpdatePathParams 
    Request *FunctionsUpdateRequestBody `request:"mediaType=application/json"`
    Security FunctionsUpdateSecurity 
    
}

type FunctionsUpdateResponse struct {
    ContentType string 
    StatusCode int64 
    Function *shared.Function 
    
}


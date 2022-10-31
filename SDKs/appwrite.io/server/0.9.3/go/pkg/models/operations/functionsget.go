package operations

import (
"openapi/pkg/models/shared")

type FunctionsGetPathParams struct {
    FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
    
}

type FunctionsGetSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type FunctionsGetRequest struct {
    PathParams FunctionsGetPathParams 
    Security FunctionsGetSecurity 
    
}

type FunctionsGetResponse struct {
    ContentType string 
    StatusCode int64 
    Function *shared.Function 
    
}


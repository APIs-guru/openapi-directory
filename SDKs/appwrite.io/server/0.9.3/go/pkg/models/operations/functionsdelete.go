package operations

import (
"openapi/pkg/models/shared")

type FunctionsDeletePathParams struct {
    FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
    
}

type FunctionsDeleteSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type FunctionsDeleteRequest struct {
    PathParams FunctionsDeletePathParams 
    Security FunctionsDeleteSecurity 
    
}

type FunctionsDeleteResponse struct {
    ContentType string 
    StatusCode int64 
    
}


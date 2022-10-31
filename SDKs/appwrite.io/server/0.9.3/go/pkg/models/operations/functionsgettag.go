package operations

import (
"openapi/pkg/models/shared")

type FunctionsGetTagPathParams struct {
    FunctionID string `pathParam:"style=simple,explode=false,name=functionId"`
    TagID string `pathParam:"style=simple,explode=false,name=tagId"`
    
}

type FunctionsGetTagSecurity struct {
    Key shared.SchemeKey `security:"scheme,type=apiKey,subtype=header"`
    Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
    
}

type FunctionsGetTagRequest struct {
    PathParams FunctionsGetTagPathParams 
    Security FunctionsGetTagSecurity 
    
}

type FunctionsGetTagResponse struct {
    ContentType string 
    StatusCode int64 
    Tag *shared.Tag 
    
}


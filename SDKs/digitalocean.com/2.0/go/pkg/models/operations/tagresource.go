package operations

import (
"openapi/pkg/models/shared")

type TagResourcePathParams struct {
    TagID string `pathParam:"style=simple,explode=false,name=tag_id"`
    
}

type TagResourceRequestBody struct {
    Resources []interface{} `json:"resources"`
    
}

type TagResourceRequest struct {
    PathParams TagResourcePathParams 
    Request TagResourceRequestBody `request:"mediaType=application/json"`
    
}

type TagResource401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type TagResourceResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    TagResource401ApplicationJSONObject *TagResource401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}


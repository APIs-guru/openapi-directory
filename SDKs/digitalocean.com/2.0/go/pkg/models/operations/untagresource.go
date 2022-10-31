package operations

import (
"openapi/pkg/models/shared")

type UntagResourcePathParams struct {
    TagID string `pathParam:"style=simple,explode=false,name=tag_id"`
    
}

type UntagResourceRequest struct {
    PathParams UntagResourcePathParams 
    Request shared.Onev21tags1Percent7BtagIDPercent7D1resourcesPostRequestBodyContentApplication1jsonSchema `request:"mediaType=application/json"`
    
}

type UntagResource401ApplicationJSON struct {
    ID string `json:"id"`
    Message string `json:"message"`
    RequestID *string `json:"request_id,omitempty"`
    
}

type UntagResourceResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    UntagResource401ApplicationJSONObject *UntagResource401ApplicationJSON 
    Onev211ClicksGetResponses401ContentApplication1jsonSchema *shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema 
    
}


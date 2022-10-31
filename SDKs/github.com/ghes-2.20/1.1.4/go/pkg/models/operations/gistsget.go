package operations

import (
"openapi/pkg/models/shared")

type GistsGetPathParams struct {
    GistID string `pathParam:"style=simple,explode=false,name=gist_id"`
    
}

type GistsGetRequest struct {
    PathParams GistsGetPathParams 
    
}

type GistsGet403ApplicationJSONBlock struct {
    CreatedAt *string `json:"created_at,omitempty"`
    HTMLURL *string `json:"html_url,omitempty"`
    Reason *string `json:"reason,omitempty"`
    
}

type GistsGet403ApplicationJSON struct {
    Block *GistsGet403ApplicationJSONBlock `json:"block,omitempty"`
    DocumentationURL *string `json:"documentation_url,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type GistsGetResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    GistSimple *shared.GistSimple 
    GistsGet403ApplicationJSONObject *GistsGet403ApplicationJSON 
    
}


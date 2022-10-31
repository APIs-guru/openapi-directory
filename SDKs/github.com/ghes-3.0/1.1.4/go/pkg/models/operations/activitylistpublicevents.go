package operations

import (
"openapi/pkg/models/shared")

type ActivityListPublicEventsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ActivityListPublicEventsRequest struct {
    QueryParams ActivityListPublicEventsQueryParams 
    
}

type ActivityListPublicEvents503ApplicationJSON struct {
    Code *string `json:"code,omitempty"`
    DocumentationURL *string `json:"documentation_url,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

type ActivityListPublicEventsResponse struct {
    ContentType string 
    StatusCode int64 
    ActivityListPublicEvents503ApplicationJSONObject *ActivityListPublicEvents503ApplicationJSON 
    BasicError *shared.BasicError 
    Events []shared.Event 
    
}


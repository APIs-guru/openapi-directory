package operations

import (
"openapi/pkg/models/shared")

type UnsubscribeNodePathParams struct {
    NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type UnsubscribeNodeHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type UnsubscribeNodeRequest struct {
    PathParams UnsubscribeNodePathParams 
    Headers UnsubscribeNodeHeaders 
    
}

type UnsubscribeNodeResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}


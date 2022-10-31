package operations

import (
"openapi/pkg/models/shared")

type RequestNodePathParams struct {
    NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type RequestNodeHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type RequestNodeRequest struct {
    PathParams RequestNodePathParams 
    Headers RequestNodeHeaders 
    
}

type RequestNodeResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    Node *shared.Node 
    StatusCode int64 
    
}


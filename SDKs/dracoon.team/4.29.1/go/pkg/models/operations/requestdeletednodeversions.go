package operations

import (
"openapi/pkg/models/shared")

type RequestDeletedNodeVersionsPathParams struct {
    NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type RequestDeletedNodeVersionsQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Name string `queryParam:"style=form,explode=true,name=name"`
    Offset *int32 `queryParam:"style=form,explode=true,name=offset"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    Type string `queryParam:"style=form,explode=true,name=type"`
    
}

type RequestDeletedNodeVersionsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type RequestDeletedNodeVersionsRequest struct {
    PathParams RequestDeletedNodeVersionsPathParams 
    QueryParams RequestDeletedNodeVersionsQueryParams 
    Headers RequestDeletedNodeVersionsHeaders 
    
}

type RequestDeletedNodeVersionsResponse struct {
    ContentType string 
    DeletedNodeVersionsList *shared.DeletedNodeVersionsList 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}


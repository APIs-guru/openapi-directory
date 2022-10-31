package operations

import (
"openapi/pkg/models/shared")

type RemoveFavoritePathParams struct {
    NodeID int64 `pathParam:"style=simple,explode=false,name=node_id"`
    
}

type RemoveFavoriteHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveFavoriteRequest struct {
    PathParams RemoveFavoritePathParams 
    Headers RemoveFavoriteHeaders 
    
}

type RemoveFavoriteResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}


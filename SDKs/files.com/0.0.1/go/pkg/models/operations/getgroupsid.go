package operations

import (
"openapi/pkg/models/shared")

type GetGroupsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetGroupsIDRequest struct {
    PathParams GetGroupsIDPathParams 
    
}

type GetGroupsIDResponse struct {
    ContentType string 
    GroupEntity *shared.GroupEntity 
    StatusCode int64 
    
}


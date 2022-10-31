package operations

import (
"openapi/pkg/models/shared")

type GetGroupsIDPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetGroupsIDRequest struct {
    PathParams GetGroupsIDPathParams 
    
}

type GetGroupsIDResponse struct {
    APICoreDtoGroupsGroup *shared.APICoreDtoGroupsGroup 
    ContentType string 
    StatusCode int64 
    
}


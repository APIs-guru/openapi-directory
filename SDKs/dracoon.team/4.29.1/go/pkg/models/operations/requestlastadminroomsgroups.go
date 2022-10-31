package operations

import (
"openapi/pkg/models/shared")

type RequestLastAdminRoomsGroupsPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=group_id"`
    
}

type RequestLastAdminRoomsGroupsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RequestLastAdminRoomsGroupsRequest struct {
    PathParams RequestLastAdminRoomsGroupsPathParams 
    Headers RequestLastAdminRoomsGroupsHeaders 
    
}

type RequestLastAdminRoomsGroupsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    LastAdminGroupRoomList *shared.LastAdminGroupRoomList 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type UpdateRoomGroupsPathParams struct {
    RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
    
}

type UpdateRoomGroupsHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type UpdateRoomGroupsRequest struct {
    PathParams UpdateRoomGroupsPathParams 
    Headers UpdateRoomGroupsHeaders 
    Request shared.RoomGroupsAddBatchRequest `request:"mediaType=application/json"`
    
}

type UpdateRoomGroupsResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type UpdateRoomUsersPathParams struct {
    RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
    
}

type UpdateRoomUsersHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type UpdateRoomUsersRequest struct {
    PathParams UpdateRoomUsersPathParams 
    Headers UpdateRoomUsersHeaders 
    Request shared.RoomUsersAddBatchRequest `request:"mediaType=application/json"`
    
}

type UpdateRoomUsersResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}


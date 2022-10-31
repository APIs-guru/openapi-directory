package operations

import (
"openapi/pkg/models/shared")

type RevokeRoomUsersPathParams struct {
    RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
    
}

type RevokeRoomUsersHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RevokeRoomUsersRequest struct {
    PathParams RevokeRoomUsersPathParams 
    Headers RevokeRoomUsersHeaders 
    Request shared.RoomUsersDeleteBatchRequest `request:"mediaType=application/json"`
    
}

type RevokeRoomUsersResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type RemoveRoomRescueKeyPairPathParams struct {
    RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
    
}

type RemoveRoomRescueKeyPairQueryParams struct {
    Version *string `queryParam:"style=form,explode=true,name=version"`
    
}

type RemoveRoomRescueKeyPairHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    
}

type RemoveRoomRescueKeyPairRequest struct {
    PathParams RemoveRoomRescueKeyPairPathParams 
    QueryParams RemoveRoomRescueKeyPairQueryParams 
    Headers RemoveRoomRescueKeyPairHeaders 
    
}

type RemoveRoomRescueKeyPairResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}


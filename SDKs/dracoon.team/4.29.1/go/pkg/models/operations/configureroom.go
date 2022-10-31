package operations

import (
"openapi/pkg/models/shared")

type ConfigureRoomPathParams struct {
    RoomID int64 `pathParam:"style=simple,explode=false,name=room_id"`
    
}

type ConfigureRoomHeaders struct {
    XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    
}

type ConfigureRoomRequest struct {
    PathParams ConfigureRoomPathParams 
    Headers ConfigureRoomHeaders 
    Request shared.ConfigRoomRequest `request:"mediaType=application/json"`
    
}

type ConfigureRoomResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    Node *shared.Node 
    StatusCode int64 
    
}


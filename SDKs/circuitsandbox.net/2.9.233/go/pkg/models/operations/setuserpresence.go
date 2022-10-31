package operations

import (
"time"
"openapi/pkg/models/shared")

type SetUserPresenceRequestBody struct {
    ClearDnd *bool `form:"name=clearDND"`
    DndUntil *time.Time `form:"name=dndUntil"`
    State string `form:"name=state"`
    StatusMessage *string `form:"name=statusMessage"`
    
}

type SetUserPresenceSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type SetUserPresenceRequest struct {
    Request SetUserPresenceRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
    Security SetUserPresenceSecurity 
    
}

type SetUserPresenceResponse struct {
    Body []byte 
    ContentType string 
    Presence *interface{} 
    StatusCode int64 
    
}


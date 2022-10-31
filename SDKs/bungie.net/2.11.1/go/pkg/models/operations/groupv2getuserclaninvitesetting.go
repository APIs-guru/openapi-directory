package operations

import (
"openapi/pkg/models/shared")

type GroupV2GetUserClanInviteSettingPathParams struct {
    MType int32 `pathParam:"style=simple,explode=false,name=mType"`
    
}

type GroupV2GetUserClanInviteSettingSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GroupV2GetUserClanInviteSettingRequest struct {
    PathParams GroupV2GetUserClanInviteSettingPathParams 
    Security GroupV2GetUserClanInviteSettingSecurity 
    
}

type GroupV2GetUserClanInviteSettingResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


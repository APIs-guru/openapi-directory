package operations

import (
"openapi/pkg/models/shared")

type FireteamGetActivePrivateClanFireteamCountPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type FireteamGetActivePrivateClanFireteamCountSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type FireteamGetActivePrivateClanFireteamCountRequest struct {
    PathParams FireteamGetActivePrivateClanFireteamCountPathParams 
    Security FireteamGetActivePrivateClanFireteamCountSecurity 
    
}

type FireteamGetActivePrivateClanFireteamCountResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


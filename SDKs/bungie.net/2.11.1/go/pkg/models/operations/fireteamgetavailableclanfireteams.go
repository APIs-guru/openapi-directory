package operations

import (
"openapi/pkg/models/shared")

type FireteamGetAvailableClanFireteamsPathParams struct {
    ActivityType int32 `pathParam:"style=simple,explode=false,name=activityType"`
    DateRange int64 `pathParam:"style=simple,explode=false,name=dateRange"`
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    Page int32 `pathParam:"style=simple,explode=false,name=page"`
    Platform int64 `pathParam:"style=simple,explode=false,name=platform"`
    PublicOnly int64 `pathParam:"style=simple,explode=false,name=publicOnly"`
    SlotFilter int64 `pathParam:"style=simple,explode=false,name=slotFilter"`
    
}

type FireteamGetAvailableClanFireteamsQueryParams struct {
    LangFilter *string `queryParam:"style=form,explode=true,name=langFilter"`
    
}

type FireteamGetAvailableClanFireteamsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type FireteamGetAvailableClanFireteamsRequest struct {
    PathParams FireteamGetAvailableClanFireteamsPathParams 
    QueryParams FireteamGetAvailableClanFireteamsQueryParams 
    Security FireteamGetAvailableClanFireteamsSecurity 
    
}

type FireteamGetAvailableClanFireteamsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


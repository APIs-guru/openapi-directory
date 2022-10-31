package operations

import (
"openapi/pkg/models/shared")

type FireteamSearchPublicAvailableClanFireteamsPathParams struct {
    ActivityType int32 `pathParam:"style=simple,explode=false,name=activityType"`
    DateRange int64 `pathParam:"style=simple,explode=false,name=dateRange"`
    Page int32 `pathParam:"style=simple,explode=false,name=page"`
    Platform int64 `pathParam:"style=simple,explode=false,name=platform"`
    SlotFilter int64 `pathParam:"style=simple,explode=false,name=slotFilter"`
    
}

type FireteamSearchPublicAvailableClanFireteamsQueryParams struct {
    LangFilter *string `queryParam:"style=form,explode=true,name=langFilter"`
    
}

type FireteamSearchPublicAvailableClanFireteamsSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type FireteamSearchPublicAvailableClanFireteamsRequest struct {
    PathParams FireteamSearchPublicAvailableClanFireteamsPathParams 
    QueryParams FireteamSearchPublicAvailableClanFireteamsQueryParams 
    Security FireteamSearchPublicAvailableClanFireteamsSecurity 
    
}

type FireteamSearchPublicAvailableClanFireteamsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


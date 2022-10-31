package operations

import (
	"openapi/pkg/models/shared"
)

type FireteamGetMyClanFireteamsPathParams struct {
	GroupID       int64 `pathParam:"style=simple,explode=false,name=groupId"`
	IncludeClosed bool  `pathParam:"style=simple,explode=false,name=includeClosed"`
	Page          int32 `pathParam:"style=simple,explode=false,name=page"`
	Platform      int64 `pathParam:"style=simple,explode=false,name=platform"`
}

type FireteamGetMyClanFireteamsQueryParams struct {
	GroupFilter *bool   `queryParam:"style=form,explode=true,name=groupFilter"`
	LangFilter  *string `queryParam:"style=form,explode=true,name=langFilter"`
}

type FireteamGetMyClanFireteamsSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type FireteamGetMyClanFireteamsRequest struct {
	PathParams  FireteamGetMyClanFireteamsPathParams
	QueryParams FireteamGetMyClanFireteamsQueryParams
	Security    FireteamGetMyClanFireteamsSecurity
}

type FireteamGetMyClanFireteamsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

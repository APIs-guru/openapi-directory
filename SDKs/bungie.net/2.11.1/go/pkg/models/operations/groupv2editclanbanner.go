package operations

import (
	"openapi/pkg/models/shared"
)

type GroupV2EditClanBannerPathParams struct {
	GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
}

type GroupV2EditClanBannerSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type GroupV2EditClanBannerRequest struct {
	PathParams GroupV2EditClanBannerPathParams
	Security   GroupV2EditClanBannerSecurity
}

type GroupV2EditClanBannerResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

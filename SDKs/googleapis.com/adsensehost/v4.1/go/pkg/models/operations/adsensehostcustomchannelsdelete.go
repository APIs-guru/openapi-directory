package operations

import (
	"openapi/pkg/models/shared"
)

type AdsensehostCustomchannelsDeletePathParams struct {
	AdClientID      string `pathParam:"style=simple,explode=false,name=adClientId"`
	CustomChannelID string `pathParam:"style=simple,explode=false,name=customChannelId"`
}

type AdsensehostCustomchannelsDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsensehostCustomchannelsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsensehostCustomchannelsDeleteRequest struct {
	PathParams  AdsensehostCustomchannelsDeletePathParams
	QueryParams AdsensehostCustomchannelsDeleteQueryParams
	Security    AdsensehostCustomchannelsDeleteSecurity
}

type AdsensehostCustomchannelsDeleteResponse struct {
	ContentType   string
	CustomChannel *shared.CustomChannel
	StatusCode    int64
}

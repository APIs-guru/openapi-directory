package operations

import (
	"openapi/pkg/models/shared"
)

type AdsensehostAccountsAdunitsGetAdCodePathParams struct {
	AccountID  string `pathParam:"style=simple,explode=false,name=accountId"`
	AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
	AdUnitID   string `pathParam:"style=simple,explode=false,name=adUnitId"`
}

type AdsensehostAccountsAdunitsGetAdCodeQueryParams struct {
	Alt                 *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields              *string         `queryParam:"style=form,explode=true,name=fields"`
	HostCustomChannelID []string        `queryParam:"style=form,explode=true,name=hostCustomChannelId"`
	Key                 *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken          *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint         *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser           *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP              *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsensehostAccountsAdunitsGetAdCodeSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsensehostAccountsAdunitsGetAdCodeRequest struct {
	PathParams  AdsensehostAccountsAdunitsGetAdCodePathParams
	QueryParams AdsensehostAccountsAdunitsGetAdCodeQueryParams
	Security    AdsensehostAccountsAdunitsGetAdCodeSecurity
}

type AdsensehostAccountsAdunitsGetAdCodeResponse struct {
	AdCode      *shared.AdCode
	ContentType string
	StatusCode  int64
}

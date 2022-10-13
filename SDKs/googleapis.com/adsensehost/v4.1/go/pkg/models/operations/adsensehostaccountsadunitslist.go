package operations

import (
	"openapi/pkg/models/shared"
)

type AdsensehostAccountsAdunitsListPathParams struct {
	AccountID  string `pathParam:"style=simple,explode=false,name=accountId"`
	AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
}

type AdsensehostAccountsAdunitsListQueryParams struct {
	Alt             *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields          *string         `queryParam:"style=form,explode=true,name=fields"`
	IncludeInactive *bool           `queryParam:"style=form,explode=true,name=includeInactive"`
	Key             *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults      *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken      *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken       *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint     *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser       *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP          *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsensehostAccountsAdunitsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsensehostAccountsAdunitsListRequest struct {
	PathParams  AdsensehostAccountsAdunitsListPathParams
	QueryParams AdsensehostAccountsAdunitsListQueryParams
	Security    AdsensehostAccountsAdunitsListSecurity
}

type AdsensehostAccountsAdunitsListResponse struct {
	AdUnits     *shared.AdUnits
	ContentType string
	StatusCode  int64
}

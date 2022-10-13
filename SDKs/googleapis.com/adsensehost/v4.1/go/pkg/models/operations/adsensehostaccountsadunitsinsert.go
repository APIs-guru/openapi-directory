package operations

import (
	"openapi/pkg/models/shared"
)

type AdsensehostAccountsAdunitsInsertPathParams struct {
	AccountID  string `pathParam:"style=simple,explode=false,name=accountId"`
	AdClientID string `pathParam:"style=simple,explode=false,name=adClientId"`
}

type AdsensehostAccountsAdunitsInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsensehostAccountsAdunitsInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsensehostAccountsAdunitsInsertRequest struct {
	PathParams  AdsensehostAccountsAdunitsInsertPathParams
	QueryParams AdsensehostAccountsAdunitsInsertQueryParams
	Request     *shared.AdUnit `request:"mediaType=application/json"`
	Security    AdsensehostAccountsAdunitsInsertSecurity
}

type AdsensehostAccountsAdunitsInsertResponse struct {
	AdUnit      *shared.AdUnit
	ContentType string
	StatusCode  int64
}

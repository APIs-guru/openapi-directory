package operations

import (
	"openapi/pkg/models/shared"
)

type AdsensehostAccountsListQueryParams struct {
	Alt              *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields           *string         `queryParam:"style=form,explode=true,name=fields"`
	FilterAdClientID []string        `queryParam:"style=form,explode=true,name=filterAdClientId"`
	Key              *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken       *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint      *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser        *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP           *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsensehostAccountsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsensehostAccountsListRequest struct {
	QueryParams AdsensehostAccountsListQueryParams
	Security    AdsensehostAccountsListSecurity
}

type AdsensehostAccountsListResponse struct {
	Accounts    *shared.Accounts
	ContentType string
	StatusCode  int64
}

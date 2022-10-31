package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsSavedadstylesListPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type AdsenseAccountsSavedadstylesListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdsenseAccountsSavedadstylesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsSavedadstylesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsSavedadstylesListSecurity struct {
	Option1 *AdsenseAccountsSavedadstylesListSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsSavedadstylesListSecurityOption2 `security:"option"`
}

type AdsenseAccountsSavedadstylesListRequest struct {
	PathParams  AdsenseAccountsSavedadstylesListPathParams
	QueryParams AdsenseAccountsSavedadstylesListQueryParams
	Security    AdsenseAccountsSavedadstylesListSecurity
}

type AdsenseAccountsSavedadstylesListResponse struct {
	ContentType   string
	SavedAdStyles *shared.SavedAdStyles
	StatusCode    int64
}

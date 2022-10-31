package operations

import (
	"openapi/pkg/models/shared"
)

type AdsenseAccountsSitesGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type AdsenseAccountsSitesGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AdsenseAccountsSitesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsSitesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdsenseAccountsSitesGetSecurity struct {
	Option1 *AdsenseAccountsSitesGetSecurityOption1 `security:"option"`
	Option2 *AdsenseAccountsSitesGetSecurityOption2 `security:"option"`
}

type AdsenseAccountsSitesGetRequest struct {
	PathParams  AdsenseAccountsSitesGetPathParams
	QueryParams AdsenseAccountsSitesGetQueryParams
	Security    AdsenseAccountsSitesGetSecurity
}

type AdsenseAccountsSitesGetResponse struct {
	ContentType string
	Site        *shared.Site
	StatusCode  int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsadminPropertiesSearchAds360LinksCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams struct {
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

type AnalyticsadminPropertiesSearchAds360LinksCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesSearchAds360LinksCreateRequest struct {
	PathParams  AnalyticsadminPropertiesSearchAds360LinksCreatePathParams
	QueryParams AnalyticsadminPropertiesSearchAds360LinksCreateQueryParams
	Request     *shared.GoogleAnalyticsAdminV1alphaSearchAds360LinkInput `request:"mediaType=application/json"`
	Security    AnalyticsadminPropertiesSearchAds360LinksCreateSecurity
}

type AnalyticsadminPropertiesSearchAds360LinksCreateResponse struct {
	ContentType                                 string
	GoogleAnalyticsAdminV1alphaSearchAds360Link *shared.GoogleAnalyticsAdminV1alphaSearchAds360Link
	StatusCode                                  int64
}

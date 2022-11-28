package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateQueryParams struct {
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

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateRequest struct {
	PathParams  AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreatePathParams
	QueryParams AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateQueryParams
	Request     *shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLinkInput `request:"mediaType=application/json"`
	Security    AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateSecurity
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinksCreateResponse struct {
	ContentType                                              string
	GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink *shared.GoogleAnalyticsAdminV1alphaDisplayVideo360AdvertiserLink
	StatusCode                                               int64
}

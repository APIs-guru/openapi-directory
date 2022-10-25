package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity struct {
	Option1 *AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption1 `security:"option"`
	Option2 *AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurityOption2 `security:"option"`
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListRequest struct {
	PathParams  AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListPathParams
	QueryParams AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListQueryParams
	Security    AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListSecurity
}

type AnalyticsadminPropertiesDisplayVideo360AdvertiserLinkProposalsListResponse struct {
	ContentType                                                                   string
	GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse *shared.GoogleAnalyticsAdminV1alphaListDisplayVideo360AdvertiserLinkProposalsResponse
	StatusCode                                                                    int64
}

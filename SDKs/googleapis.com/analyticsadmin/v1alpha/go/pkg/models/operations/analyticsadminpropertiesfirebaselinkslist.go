package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsadminPropertiesFirebaseLinksListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type AnalyticsadminPropertiesFirebaseLinksListQueryParams struct {
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

type AnalyticsadminPropertiesFirebaseLinksListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesFirebaseLinksListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesFirebaseLinksListSecurity struct {
	Option1 *AnalyticsadminPropertiesFirebaseLinksListSecurityOption1 `security:"option"`
	Option2 *AnalyticsadminPropertiesFirebaseLinksListSecurityOption2 `security:"option"`
}

type AnalyticsadminPropertiesFirebaseLinksListRequest struct {
	PathParams  AnalyticsadminPropertiesFirebaseLinksListPathParams
	QueryParams AnalyticsadminPropertiesFirebaseLinksListQueryParams
	Security    AnalyticsadminPropertiesFirebaseLinksListSecurity
}

type AnalyticsadminPropertiesFirebaseLinksListResponse struct {
	ContentType                                          string
	GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse *shared.GoogleAnalyticsAdminV1alphaListFirebaseLinksResponse
	StatusCode                                           int64
}

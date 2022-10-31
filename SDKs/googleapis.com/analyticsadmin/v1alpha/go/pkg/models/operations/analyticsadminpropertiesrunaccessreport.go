package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsadminPropertiesRunAccessReportPathParams struct {
	Entity string `pathParam:"style=simple,explode=false,name=entity"`
}

type AnalyticsadminPropertiesRunAccessReportQueryParams struct {
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

type AnalyticsadminPropertiesRunAccessReportSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesRunAccessReportSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsadminPropertiesRunAccessReportSecurity struct {
	Option1 *AnalyticsadminPropertiesRunAccessReportSecurityOption1 `security:"option"`
	Option2 *AnalyticsadminPropertiesRunAccessReportSecurityOption2 `security:"option"`
}

type AnalyticsadminPropertiesRunAccessReportRequest struct {
	PathParams  AnalyticsadminPropertiesRunAccessReportPathParams
	QueryParams AnalyticsadminPropertiesRunAccessReportQueryParams
	Request     *shared.GoogleAnalyticsAdminV1alphaRunAccessReportRequest `request:"mediaType=application/json"`
	Security    AnalyticsadminPropertiesRunAccessReportSecurity
}

type AnalyticsadminPropertiesRunAccessReportResponse struct {
	ContentType                                        string
	GoogleAnalyticsAdminV1alphaRunAccessReportResponse *shared.GoogleAnalyticsAdminV1alphaRunAccessReportResponse
	StatusCode                                         int64
}

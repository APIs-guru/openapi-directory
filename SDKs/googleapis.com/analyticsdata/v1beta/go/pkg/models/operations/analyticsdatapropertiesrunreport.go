package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsdataPropertiesRunReportPathParams struct {
	Property string `pathParam:"style=simple,explode=false,name=property"`
}

type AnalyticsdataPropertiesRunReportQueryParams struct {
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

type AnalyticsdataPropertiesRunReportSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsdataPropertiesRunReportSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsdataPropertiesRunReportSecurity struct {
	Option1 *AnalyticsdataPropertiesRunReportSecurityOption1 `security:"option"`
	Option2 *AnalyticsdataPropertiesRunReportSecurityOption2 `security:"option"`
}

type AnalyticsdataPropertiesRunReportRequest struct {
	PathParams  AnalyticsdataPropertiesRunReportPathParams
	QueryParams AnalyticsdataPropertiesRunReportQueryParams
	Request     *shared.RunReportRequest `request:"mediaType=application/json"`
	Security    AnalyticsdataPropertiesRunReportSecurity
}

type AnalyticsdataPropertiesRunReportResponse struct {
	ContentType       string
	RunReportResponse *shared.RunReportResponse
	StatusCode        int64
}

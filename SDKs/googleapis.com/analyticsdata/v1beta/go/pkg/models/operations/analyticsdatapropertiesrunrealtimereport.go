package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsdataPropertiesRunRealtimeReportPathParams struct {
	Property string `pathParam:"style=simple,explode=false,name=property"`
}

type AnalyticsdataPropertiesRunRealtimeReportQueryParams struct {
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

type AnalyticsdataPropertiesRunRealtimeReportSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsdataPropertiesRunRealtimeReportSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsdataPropertiesRunRealtimeReportSecurity struct {
	Option1 *AnalyticsdataPropertiesRunRealtimeReportSecurityOption1 `security:"option"`
	Option2 *AnalyticsdataPropertiesRunRealtimeReportSecurityOption2 `security:"option"`
}

type AnalyticsdataPropertiesRunRealtimeReportRequest struct {
	PathParams  AnalyticsdataPropertiesRunRealtimeReportPathParams
	QueryParams AnalyticsdataPropertiesRunRealtimeReportQueryParams
	Request     *shared.RunRealtimeReportRequest `request:"mediaType=application/json"`
	Security    AnalyticsdataPropertiesRunRealtimeReportSecurity
}

type AnalyticsdataPropertiesRunRealtimeReportResponse struct {
	ContentType               string
	RunRealtimeReportResponse *shared.RunRealtimeReportResponse
	StatusCode                int64
}

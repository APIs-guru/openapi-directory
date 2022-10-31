package operations

import (
	"openapi/pkg/models/shared"
)

type AnalyticsdataPropertiesRunPivotReportPathParams struct {
	Property string `pathParam:"style=simple,explode=false,name=property"`
}

type AnalyticsdataPropertiesRunPivotReportQueryParams struct {
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

type AnalyticsdataPropertiesRunPivotReportSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsdataPropertiesRunPivotReportSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AnalyticsdataPropertiesRunPivotReportSecurity struct {
	Option1 *AnalyticsdataPropertiesRunPivotReportSecurityOption1 `security:"option"`
	Option2 *AnalyticsdataPropertiesRunPivotReportSecurityOption2 `security:"option"`
}

type AnalyticsdataPropertiesRunPivotReportRequest struct {
	PathParams  AnalyticsdataPropertiesRunPivotReportPathParams
	QueryParams AnalyticsdataPropertiesRunPivotReportQueryParams
	Request     *shared.RunPivotReportRequest `request:"mediaType=application/json"`
	Security    AnalyticsdataPropertiesRunPivotReportSecurity
}

type AnalyticsdataPropertiesRunPivotReportResponse struct {
	ContentType            string
	RunPivotReportResponse *shared.RunPivotReportResponse
	StatusCode             int64
}

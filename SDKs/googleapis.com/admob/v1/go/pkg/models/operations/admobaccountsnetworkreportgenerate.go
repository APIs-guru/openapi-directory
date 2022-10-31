package operations

import (
	"openapi/pkg/models/shared"
)

type AdmobAccountsNetworkReportGeneratePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type AdmobAccountsNetworkReportGenerateQueryParams struct {
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

type AdmobAccountsNetworkReportGenerateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdmobAccountsNetworkReportGenerateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdmobAccountsNetworkReportGenerateSecurity struct {
	Option1 *AdmobAccountsNetworkReportGenerateSecurityOption1 `security:"option"`
	Option2 *AdmobAccountsNetworkReportGenerateSecurityOption2 `security:"option"`
}

type AdmobAccountsNetworkReportGenerateRequest struct {
	PathParams  AdmobAccountsNetworkReportGeneratePathParams
	QueryParams AdmobAccountsNetworkReportGenerateQueryParams
	Request     *shared.GenerateNetworkReportRequest `request:"mediaType=application/json"`
	Security    AdmobAccountsNetworkReportGenerateSecurity
}

type AdmobAccountsNetworkReportGenerateResponse struct {
	ContentType                   string
	GenerateNetworkReportResponse *shared.GenerateNetworkReportResponse
	StatusCode                    int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineAppsFirewallIngressRulesCreatePathParams struct {
	AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
}

type AppengineAppsFirewallIngressRulesCreateQueryParams struct {
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

type AppengineAppsFirewallIngressRulesCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineAppsFirewallIngressRulesCreateRequest struct {
	PathParams  AppengineAppsFirewallIngressRulesCreatePathParams
	QueryParams AppengineAppsFirewallIngressRulesCreateQueryParams
	Request     *shared.FirewallRule `request:"mediaType=application/json"`
	Security    AppengineAppsFirewallIngressRulesCreateSecurity
}

type AppengineAppsFirewallIngressRulesCreateResponse struct {
	ContentType  string
	FirewallRule *shared.FirewallRule
	StatusCode   int64
}

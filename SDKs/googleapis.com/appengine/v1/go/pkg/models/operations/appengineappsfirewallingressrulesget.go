package operations

import (
"openapi/pkg/models/shared")

type AppengineAppsFirewallIngressRulesGetPathParams struct {
    AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
    IngressRulesID string `pathParam:"style=simple,explode=false,name=ingressRulesId"`
    
}

type AppengineAppsFirewallIngressRulesGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AppengineAppsFirewallIngressRulesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsFirewallIngressRulesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsFirewallIngressRulesGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsFirewallIngressRulesGetSecurity struct {
    Option1 *AppengineAppsFirewallIngressRulesGetSecurityOption1 `security:"option"`
    Option2 *AppengineAppsFirewallIngressRulesGetSecurityOption2 `security:"option"`
    Option3 *AppengineAppsFirewallIngressRulesGetSecurityOption3 `security:"option"`
    
}

type AppengineAppsFirewallIngressRulesGetRequest struct {
    PathParams AppengineAppsFirewallIngressRulesGetPathParams 
    QueryParams AppengineAppsFirewallIngressRulesGetQueryParams 
    Security AppengineAppsFirewallIngressRulesGetSecurity 
    
}

type AppengineAppsFirewallIngressRulesGetResponse struct {
    ContentType string 
    FirewallRule *shared.FirewallRule 
    StatusCode int64 
    
}


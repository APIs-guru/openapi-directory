package operations

import (
"openapi/pkg/models/shared")

type AppengineAppsFirewallIngressRulesListPathParams struct {
    AppsID string `pathParam:"style=simple,explode=false,name=appsId"`
    
}

type AppengineAppsFirewallIngressRulesListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MatchingAddress *string `queryParam:"style=form,explode=true,name=matchingAddress"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AppengineAppsFirewallIngressRulesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsFirewallIngressRulesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsFirewallIngressRulesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AppengineAppsFirewallIngressRulesListSecurity struct {
    Option1 *AppengineAppsFirewallIngressRulesListSecurityOption1 `security:"option"`
    Option2 *AppengineAppsFirewallIngressRulesListSecurityOption2 `security:"option"`
    Option3 *AppengineAppsFirewallIngressRulesListSecurityOption3 `security:"option"`
    
}

type AppengineAppsFirewallIngressRulesListRequest struct {
    PathParams AppengineAppsFirewallIngressRulesListPathParams 
    QueryParams AppengineAppsFirewallIngressRulesListQueryParams 
    Security AppengineAppsFirewallIngressRulesListSecurity 
    
}

type AppengineAppsFirewallIngressRulesListResponse struct {
    ContentType string 
    ListIngressRulesResponse *shared.ListIngressRulesResponse 
    StatusCode int64 
    
}


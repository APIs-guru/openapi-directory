package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementProfileFilterLinksGetPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    LinkID string `pathParam:"style=simple,explode=false,name=linkId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementProfileFilterLinksGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementProfileFilterLinksGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementProfileFilterLinksGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementProfileFilterLinksGetSecurity struct {
    Option1 *AnalyticsManagementProfileFilterLinksGetSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementProfileFilterLinksGetSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementProfileFilterLinksGetRequest struct {
    PathParams AnalyticsManagementProfileFilterLinksGetPathParams 
    QueryParams AnalyticsManagementProfileFilterLinksGetQueryParams 
    Security AnalyticsManagementProfileFilterLinksGetSecurity 
    
}

type AnalyticsManagementProfileFilterLinksGetResponse struct {
    ContentType string 
    ProfileFilterLink *shared.ProfileFilterLink 
    StatusCode int64 
    
}


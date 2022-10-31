package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementAccountUserLinksListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type AnalyticsManagementAccountUserLinksListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=max-results"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=start-index"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementAccountUserLinksListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementAccountUserLinksListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementAccountUserLinksListSecurity struct {
    Option1 *AnalyticsManagementAccountUserLinksListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementAccountUserLinksListSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementAccountUserLinksListRequest struct {
    PathParams AnalyticsManagementAccountUserLinksListPathParams 
    QueryParams AnalyticsManagementAccountUserLinksListQueryParams 
    Security AnalyticsManagementAccountUserLinksListSecurity 
    
}

type AnalyticsManagementAccountUserLinksListResponse struct {
    ContentType string 
    EntityUserLinks *shared.EntityUserLinks 
    StatusCode int64 
    
}


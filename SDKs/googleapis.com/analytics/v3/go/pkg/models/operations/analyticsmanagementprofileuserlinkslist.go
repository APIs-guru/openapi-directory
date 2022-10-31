package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementProfileUserLinksListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementProfileUserLinksListQueryParams struct {
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

type AnalyticsManagementProfileUserLinksListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementProfileUserLinksListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementProfileUserLinksListSecurity struct {
    Option1 *AnalyticsManagementProfileUserLinksListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementProfileUserLinksListSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementProfileUserLinksListRequest struct {
    PathParams AnalyticsManagementProfileUserLinksListPathParams 
    QueryParams AnalyticsManagementProfileUserLinksListQueryParams 
    Security AnalyticsManagementProfileUserLinksListSecurity 
    
}

type AnalyticsManagementProfileUserLinksListResponse struct {
    ContentType string 
    EntityUserLinks *shared.EntityUserLinks 
    StatusCode int64 
    
}


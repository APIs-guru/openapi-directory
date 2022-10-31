package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementProfileFilterLinksListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementProfileFilterLinksListQueryParams struct {
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

type AnalyticsManagementProfileFilterLinksListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementProfileFilterLinksListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementProfileFilterLinksListSecurity struct {
    Option1 *AnalyticsManagementProfileFilterLinksListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementProfileFilterLinksListSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementProfileFilterLinksListRequest struct {
    PathParams AnalyticsManagementProfileFilterLinksListPathParams 
    QueryParams AnalyticsManagementProfileFilterLinksListQueryParams 
    Security AnalyticsManagementProfileFilterLinksListSecurity 
    
}

type AnalyticsManagementProfileFilterLinksListResponse struct {
    ContentType string 
    ProfileFilterLinks *shared.ProfileFilterLinks 
    StatusCode int64 
    
}


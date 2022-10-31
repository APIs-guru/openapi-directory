package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementGoalsListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementGoalsListQueryParams struct {
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

type AnalyticsManagementGoalsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementGoalsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementGoalsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementGoalsListSecurity struct {
    Option1 *AnalyticsManagementGoalsListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementGoalsListSecurityOption2 `security:"option"`
    Option3 *AnalyticsManagementGoalsListSecurityOption3 `security:"option"`
    
}

type AnalyticsManagementGoalsListRequest struct {
    PathParams AnalyticsManagementGoalsListPathParams 
    QueryParams AnalyticsManagementGoalsListQueryParams 
    Security AnalyticsManagementGoalsListSecurity 
    
}

type AnalyticsManagementGoalsListResponse struct {
    ContentType string 
    Goals *shared.Goals 
    StatusCode int64 
    
}


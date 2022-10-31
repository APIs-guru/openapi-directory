package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementGoalsPatchPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    GoalID string `pathParam:"style=simple,explode=false,name=goalId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementGoalsPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementGoalsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementGoalsPatchRequest struct {
    PathParams AnalyticsManagementGoalsPatchPathParams 
    QueryParams AnalyticsManagementGoalsPatchQueryParams 
    Request *shared.Goal `request:"mediaType=application/json"`
    Security AnalyticsManagementGoalsPatchSecurity 
    
}

type AnalyticsManagementGoalsPatchResponse struct {
    ContentType string 
    Goal *shared.Goal 
    StatusCode int64 
    
}


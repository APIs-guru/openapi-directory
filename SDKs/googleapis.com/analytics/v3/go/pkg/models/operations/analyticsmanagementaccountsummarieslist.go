package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementAccountSummariesListQueryParams struct {
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

type AnalyticsManagementAccountSummariesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementAccountSummariesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementAccountSummariesListSecurity struct {
    Option1 *AnalyticsManagementAccountSummariesListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementAccountSummariesListSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementAccountSummariesListRequest struct {
    QueryParams AnalyticsManagementAccountSummariesListQueryParams 
    Security AnalyticsManagementAccountSummariesListSecurity 
    
}

type AnalyticsManagementAccountSummariesListResponse struct {
    AccountSummaries *shared.AccountSummaries 
    ContentType string 
    StatusCode int64 
    
}


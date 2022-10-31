package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementFiltersListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type AnalyticsManagementFiltersListQueryParams struct {
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

type AnalyticsManagementFiltersListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementFiltersListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementFiltersListSecurity struct {
    Option1 *AnalyticsManagementFiltersListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementFiltersListSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementFiltersListRequest struct {
    PathParams AnalyticsManagementFiltersListPathParams 
    QueryParams AnalyticsManagementFiltersListQueryParams 
    Security AnalyticsManagementFiltersListSecurity 
    
}

type AnalyticsManagementFiltersListResponse struct {
    ContentType string 
    Filters *shared.Filters 
    StatusCode int64 
    
}


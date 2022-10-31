package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementCustomMetricsListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementCustomMetricsListQueryParams struct {
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

type AnalyticsManagementCustomMetricsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementCustomMetricsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementCustomMetricsListSecurity struct {
    Option1 *AnalyticsManagementCustomMetricsListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementCustomMetricsListSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementCustomMetricsListRequest struct {
    PathParams AnalyticsManagementCustomMetricsListPathParams 
    QueryParams AnalyticsManagementCustomMetricsListQueryParams 
    Security AnalyticsManagementCustomMetricsListSecurity 
    
}

type AnalyticsManagementCustomMetricsListResponse struct {
    ContentType string 
    CustomMetrics *shared.CustomMetrics 
    StatusCode int64 
    
}


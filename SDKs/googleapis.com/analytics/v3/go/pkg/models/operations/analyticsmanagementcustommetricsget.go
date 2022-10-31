package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementCustomMetricsGetPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    CustomMetricID string `pathParam:"style=simple,explode=false,name=customMetricId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementCustomMetricsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementCustomMetricsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementCustomMetricsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementCustomMetricsGetSecurity struct {
    Option1 *AnalyticsManagementCustomMetricsGetSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementCustomMetricsGetSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementCustomMetricsGetRequest struct {
    PathParams AnalyticsManagementCustomMetricsGetPathParams 
    QueryParams AnalyticsManagementCustomMetricsGetQueryParams 
    Security AnalyticsManagementCustomMetricsGetSecurity 
    
}

type AnalyticsManagementCustomMetricsGetResponse struct {
    ContentType string 
    CustomMetric *shared.CustomMetric 
    StatusCode int64 
    
}


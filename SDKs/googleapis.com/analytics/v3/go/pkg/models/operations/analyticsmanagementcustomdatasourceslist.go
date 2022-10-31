package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementCustomDataSourcesListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementCustomDataSourcesListQueryParams struct {
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

type AnalyticsManagementCustomDataSourcesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementCustomDataSourcesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementCustomDataSourcesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementCustomDataSourcesListSecurity struct {
    Option1 *AnalyticsManagementCustomDataSourcesListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementCustomDataSourcesListSecurityOption2 `security:"option"`
    Option3 *AnalyticsManagementCustomDataSourcesListSecurityOption3 `security:"option"`
    
}

type AnalyticsManagementCustomDataSourcesListRequest struct {
    PathParams AnalyticsManagementCustomDataSourcesListPathParams 
    QueryParams AnalyticsManagementCustomDataSourcesListQueryParams 
    Security AnalyticsManagementCustomDataSourcesListSecurity 
    
}

type AnalyticsManagementCustomDataSourcesListResponse struct {
    ContentType string 
    CustomDataSources *shared.CustomDataSources 
    StatusCode int64 
    
}


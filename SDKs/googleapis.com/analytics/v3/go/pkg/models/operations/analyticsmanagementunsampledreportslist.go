package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementUnsampledReportsListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementUnsampledReportsListQueryParams struct {
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

type AnalyticsManagementUnsampledReportsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUnsampledReportsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUnsampledReportsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUnsampledReportsListSecurity struct {
    Option1 *AnalyticsManagementUnsampledReportsListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementUnsampledReportsListSecurityOption2 `security:"option"`
    Option3 *AnalyticsManagementUnsampledReportsListSecurityOption3 `security:"option"`
    
}

type AnalyticsManagementUnsampledReportsListRequest struct {
    PathParams AnalyticsManagementUnsampledReportsListPathParams 
    QueryParams AnalyticsManagementUnsampledReportsListQueryParams 
    Security AnalyticsManagementUnsampledReportsListSecurity 
    
}

type AnalyticsManagementUnsampledReportsListResponse struct {
    ContentType string 
    StatusCode int64 
    UnsampledReports *shared.UnsampledReports 
    
}


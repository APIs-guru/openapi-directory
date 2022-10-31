package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementUnsampledReportsGetPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    UnsampledReportID string `pathParam:"style=simple,explode=false,name=unsampledReportId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementUnsampledReportsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementUnsampledReportsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUnsampledReportsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUnsampledReportsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUnsampledReportsGetSecurity struct {
    Option1 *AnalyticsManagementUnsampledReportsGetSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementUnsampledReportsGetSecurityOption2 `security:"option"`
    Option3 *AnalyticsManagementUnsampledReportsGetSecurityOption3 `security:"option"`
    
}

type AnalyticsManagementUnsampledReportsGetRequest struct {
    PathParams AnalyticsManagementUnsampledReportsGetPathParams 
    QueryParams AnalyticsManagementUnsampledReportsGetQueryParams 
    Security AnalyticsManagementUnsampledReportsGetSecurity 
    
}

type AnalyticsManagementUnsampledReportsGetResponse struct {
    ContentType string 
    StatusCode int64 
    UnsampledReport *shared.UnsampledReport 
    
}


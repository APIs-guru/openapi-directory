package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementUnsampledReportsInsertPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementUnsampledReportsInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementUnsampledReportsInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUnsampledReportsInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementUnsampledReportsInsertSecurity struct {
    Option1 *AnalyticsManagementUnsampledReportsInsertSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementUnsampledReportsInsertSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementUnsampledReportsInsertRequest struct {
    PathParams AnalyticsManagementUnsampledReportsInsertPathParams 
    QueryParams AnalyticsManagementUnsampledReportsInsertQueryParams 
    Request *shared.UnsampledReport `request:"mediaType=application/json"`
    Security AnalyticsManagementUnsampledReportsInsertSecurity 
    
}

type AnalyticsManagementUnsampledReportsInsertResponse struct {
    ContentType string 
    StatusCode int64 
    UnsampledReport *shared.UnsampledReport 
    
}


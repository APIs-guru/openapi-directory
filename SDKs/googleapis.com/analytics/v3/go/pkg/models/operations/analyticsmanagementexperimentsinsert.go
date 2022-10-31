package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementExperimentsInsertPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementExperimentsInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementExperimentsInsertSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementExperimentsInsertSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementExperimentsInsertSecurity struct {
    Option1 *AnalyticsManagementExperimentsInsertSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementExperimentsInsertSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementExperimentsInsertRequest struct {
    PathParams AnalyticsManagementExperimentsInsertPathParams 
    QueryParams AnalyticsManagementExperimentsInsertQueryParams 
    Request *shared.Experiment `request:"mediaType=application/json"`
    Security AnalyticsManagementExperimentsInsertSecurity 
    
}

type AnalyticsManagementExperimentsInsertResponse struct {
    ContentType string 
    Experiment *shared.Experiment 
    StatusCode int64 
    
}


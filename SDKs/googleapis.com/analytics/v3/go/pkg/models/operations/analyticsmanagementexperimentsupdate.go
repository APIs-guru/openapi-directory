package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementExperimentsUpdatePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ExperimentID string `pathParam:"style=simple,explode=false,name=experimentId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementExperimentsUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementExperimentsUpdateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementExperimentsUpdateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementExperimentsUpdateSecurity struct {
    Option1 *AnalyticsManagementExperimentsUpdateSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementExperimentsUpdateSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementExperimentsUpdateRequest struct {
    PathParams AnalyticsManagementExperimentsUpdatePathParams 
    QueryParams AnalyticsManagementExperimentsUpdateQueryParams 
    Request *shared.Experiment `request:"mediaType=application/json"`
    Security AnalyticsManagementExperimentsUpdateSecurity 
    
}

type AnalyticsManagementExperimentsUpdateResponse struct {
    ContentType string 
    Experiment *shared.Experiment 
    StatusCode int64 
    
}


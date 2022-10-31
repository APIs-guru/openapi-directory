package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementExperimentsGetPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ExperimentID string `pathParam:"style=simple,explode=false,name=experimentId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementExperimentsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementExperimentsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementExperimentsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementExperimentsGetSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementExperimentsGetSecurity struct {
    Option1 *AnalyticsManagementExperimentsGetSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementExperimentsGetSecurityOption2 `security:"option"`
    Option3 *AnalyticsManagementExperimentsGetSecurityOption3 `security:"option"`
    
}

type AnalyticsManagementExperimentsGetRequest struct {
    PathParams AnalyticsManagementExperimentsGetPathParams 
    QueryParams AnalyticsManagementExperimentsGetQueryParams 
    Security AnalyticsManagementExperimentsGetSecurity 
    
}

type AnalyticsManagementExperimentsGetResponse struct {
    ContentType string 
    Experiment *shared.Experiment 
    StatusCode int64 
    
}


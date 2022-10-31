package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementExperimentsListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementExperimentsListQueryParams struct {
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

type AnalyticsManagementExperimentsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementExperimentsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementExperimentsListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementExperimentsListSecurity struct {
    Option1 *AnalyticsManagementExperimentsListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementExperimentsListSecurityOption2 `security:"option"`
    Option3 *AnalyticsManagementExperimentsListSecurityOption3 `security:"option"`
    
}

type AnalyticsManagementExperimentsListRequest struct {
    PathParams AnalyticsManagementExperimentsListPathParams 
    QueryParams AnalyticsManagementExperimentsListQueryParams 
    Security AnalyticsManagementExperimentsListSecurity 
    
}

type AnalyticsManagementExperimentsListResponse struct {
    ContentType string 
    Experiments *shared.Experiments 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementRemarketingAudiencePatchPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    RemarketingAudienceID string `pathParam:"style=simple,explode=false,name=remarketingAudienceId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementRemarketingAudiencePatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementRemarketingAudiencePatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementRemarketingAudiencePatchRequest struct {
    PathParams AnalyticsManagementRemarketingAudiencePatchPathParams 
    QueryParams AnalyticsManagementRemarketingAudiencePatchQueryParams 
    Request *shared.RemarketingAudience `request:"mediaType=application/json"`
    Security AnalyticsManagementRemarketingAudiencePatchSecurity 
    
}

type AnalyticsManagementRemarketingAudiencePatchResponse struct {
    ContentType string 
    RemarketingAudience *shared.RemarketingAudience 
    StatusCode int64 
    
}


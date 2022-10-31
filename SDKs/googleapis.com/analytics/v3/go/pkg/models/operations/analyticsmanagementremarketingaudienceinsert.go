package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementRemarketingAudienceInsertPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementRemarketingAudienceInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementRemarketingAudienceInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementRemarketingAudienceInsertRequest struct {
    PathParams AnalyticsManagementRemarketingAudienceInsertPathParams 
    QueryParams AnalyticsManagementRemarketingAudienceInsertQueryParams 
    Request *shared.RemarketingAudience `request:"mediaType=application/json"`
    Security AnalyticsManagementRemarketingAudienceInsertSecurity 
    
}

type AnalyticsManagementRemarketingAudienceInsertResponse struct {
    ContentType string 
    RemarketingAudience *shared.RemarketingAudience 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementProfileUserLinksInsertPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementProfileUserLinksInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementProfileUserLinksInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementProfileUserLinksInsertRequest struct {
    PathParams AnalyticsManagementProfileUserLinksInsertPathParams 
    QueryParams AnalyticsManagementProfileUserLinksInsertQueryParams 
    Request *shared.EntityUserLink `request:"mediaType=application/json"`
    Security AnalyticsManagementProfileUserLinksInsertSecurity 
    
}

type AnalyticsManagementProfileUserLinksInsertResponse struct {
    ContentType string 
    EntityUserLink *shared.EntityUserLink 
    StatusCode int64 
    
}


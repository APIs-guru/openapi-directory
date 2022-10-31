package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementProfileFilterLinksUpdatePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    LinkID string `pathParam:"style=simple,explode=false,name=linkId"`
    ProfileID string `pathParam:"style=simple,explode=false,name=profileId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementProfileFilterLinksUpdateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementProfileFilterLinksUpdateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementProfileFilterLinksUpdateRequest struct {
    PathParams AnalyticsManagementProfileFilterLinksUpdatePathParams 
    QueryParams AnalyticsManagementProfileFilterLinksUpdateQueryParams 
    Request *shared.ProfileFilterLink `request:"mediaType=application/json"`
    Security AnalyticsManagementProfileFilterLinksUpdateSecurity 
    
}

type AnalyticsManagementProfileFilterLinksUpdateResponse struct {
    ContentType string 
    ProfileFilterLink *shared.ProfileFilterLink 
    StatusCode int64 
    
}


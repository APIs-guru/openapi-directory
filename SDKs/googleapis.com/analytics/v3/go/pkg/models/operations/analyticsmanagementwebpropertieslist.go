package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementWebpropertiesListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type AnalyticsManagementWebpropertiesListQueryParams struct {
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

type AnalyticsManagementWebpropertiesListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementWebpropertiesListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementWebpropertiesListSecurityOption3 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementWebpropertiesListSecurity struct {
    Option1 *AnalyticsManagementWebpropertiesListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementWebpropertiesListSecurityOption2 `security:"option"`
    Option3 *AnalyticsManagementWebpropertiesListSecurityOption3 `security:"option"`
    
}

type AnalyticsManagementWebpropertiesListRequest struct {
    PathParams AnalyticsManagementWebpropertiesListPathParams 
    QueryParams AnalyticsManagementWebpropertiesListQueryParams 
    Security AnalyticsManagementWebpropertiesListSecurity 
    
}

type AnalyticsManagementWebpropertiesListResponse struct {
    ContentType string 
    StatusCode int64 
    Webproperties *shared.Webproperties 
    
}


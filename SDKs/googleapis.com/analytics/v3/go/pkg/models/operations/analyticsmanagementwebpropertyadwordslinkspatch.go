package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementWebPropertyAdWordsLinksPatchPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    WebPropertyAdWordsLinkID string `pathParam:"style=simple,explode=false,name=webPropertyAdWordsLinkId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksPatchRequest struct {
    PathParams AnalyticsManagementWebPropertyAdWordsLinksPatchPathParams 
    QueryParams AnalyticsManagementWebPropertyAdWordsLinksPatchQueryParams 
    Request *shared.EntityAdWordsLink `request:"mediaType=application/json"`
    Security AnalyticsManagementWebPropertyAdWordsLinksPatchSecurity 
    
}

type AnalyticsManagementWebPropertyAdWordsLinksPatchResponse struct {
    ContentType string 
    EntityAdWordsLink *shared.EntityAdWordsLink 
    StatusCode int64 
    
}


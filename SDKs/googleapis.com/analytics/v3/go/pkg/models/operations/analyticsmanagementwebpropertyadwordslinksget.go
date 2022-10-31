package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementWebPropertyAdWordsLinksGetPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    WebPropertyAdWordsLinkID string `pathParam:"style=simple,explode=false,name=webPropertyAdWordsLinkId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksGetSecurity struct {
    Option1 *AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementWebPropertyAdWordsLinksGetSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksGetRequest struct {
    PathParams AnalyticsManagementWebPropertyAdWordsLinksGetPathParams 
    QueryParams AnalyticsManagementWebPropertyAdWordsLinksGetQueryParams 
    Security AnalyticsManagementWebPropertyAdWordsLinksGetSecurity 
    
}

type AnalyticsManagementWebPropertyAdWordsLinksGetResponse struct {
    ContentType string 
    EntityAdWordsLink *shared.EntityAdWordsLink 
    StatusCode int64 
    
}


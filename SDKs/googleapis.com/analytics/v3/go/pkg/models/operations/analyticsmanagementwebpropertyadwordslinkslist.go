package operations

import (
"openapi/pkg/models/shared")

type AnalyticsManagementWebPropertyAdWordsLinksListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    WebPropertyID string `pathParam:"style=simple,explode=false,name=webPropertyId"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksListQueryParams struct {
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

type AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksListSecurity struct {
    Option1 *AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption1 `security:"option"`
    Option2 *AnalyticsManagementWebPropertyAdWordsLinksListSecurityOption2 `security:"option"`
    
}

type AnalyticsManagementWebPropertyAdWordsLinksListRequest struct {
    PathParams AnalyticsManagementWebPropertyAdWordsLinksListPathParams 
    QueryParams AnalyticsManagementWebPropertyAdWordsLinksListQueryParams 
    Security AnalyticsManagementWebPropertyAdWordsLinksListSecurity 
    
}

type AnalyticsManagementWebPropertyAdWordsLinksListResponse struct {
    ContentType string 
    EntityAdWordsLinks *shared.EntityAdWordsLinks 
    StatusCode int64 
    
}


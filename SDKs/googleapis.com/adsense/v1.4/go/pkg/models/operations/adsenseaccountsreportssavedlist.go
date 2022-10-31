package operations

import (
"openapi/pkg/models/shared")

type AdsenseAccountsReportsSavedListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type AdsenseAccountsReportsSavedListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseAccountsReportsSavedListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsReportsSavedListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseAccountsReportsSavedListSecurity struct {
    Option1 *AdsenseAccountsReportsSavedListSecurityOption1 `security:"option"`
    Option2 *AdsenseAccountsReportsSavedListSecurityOption2 `security:"option"`
    
}

type AdsenseAccountsReportsSavedListRequest struct {
    PathParams AdsenseAccountsReportsSavedListPathParams 
    QueryParams AdsenseAccountsReportsSavedListQueryParams 
    Security AdsenseAccountsReportsSavedListSecurity 
    
}

type AdsenseAccountsReportsSavedListResponse struct {
    ContentType string 
    SavedReports *shared.SavedReports 
    StatusCode int64 
    
}


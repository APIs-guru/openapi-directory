package operations

import (
"openapi/pkg/models/shared")

type AdsenseReportsSavedListQueryParams struct {
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

type AdsenseReportsSavedListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseReportsSavedListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseReportsSavedListSecurity struct {
    Option1 *AdsenseReportsSavedListSecurityOption1 `security:"option"`
    Option2 *AdsenseReportsSavedListSecurityOption2 `security:"option"`
    
}

type AdsenseReportsSavedListRequest struct {
    QueryParams AdsenseReportsSavedListQueryParams 
    Security AdsenseReportsSavedListSecurity 
    
}

type AdsenseReportsSavedListResponse struct {
    ContentType string 
    SavedReports *shared.SavedReports 
    StatusCode int64 
    
}


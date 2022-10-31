package operations

import (
"openapi/pkg/models/shared")

type AdsenseReportsSavedGeneratePathParams struct {
    SavedReportID string `pathParam:"style=simple,explode=false,name=savedReportId"`
    
}

type AdsenseReportsSavedGenerateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=startIndex"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseReportsSavedGenerateSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseReportsSavedGenerateSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseReportsSavedGenerateSecurity struct {
    Option1 *AdsenseReportsSavedGenerateSecurityOption1 `security:"option"`
    Option2 *AdsenseReportsSavedGenerateSecurityOption2 `security:"option"`
    
}

type AdsenseReportsSavedGenerateRequest struct {
    PathParams AdsenseReportsSavedGeneratePathParams 
    QueryParams AdsenseReportsSavedGenerateQueryParams 
    Security AdsenseReportsSavedGenerateSecurity 
    
}

type AdsenseReportsSavedGenerateResponse struct {
    AdsenseReportsGenerateResponse *shared.AdsenseReportsGenerateResponse 
    ContentType string 
    StatusCode int64 
    
}


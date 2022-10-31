package operations

import (
"openapi/pkg/models/shared")

type AdsensehostReportsGenerateQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Dimension []string `queryParam:"style=form,explode=true,name=dimension"`
    EndDate string `queryParam:"style=form,explode=true,name=endDate"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter []string `queryParam:"style=form,explode=true,name=filter"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    Locale *string `queryParam:"style=form,explode=true,name=locale"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    Metric []string `queryParam:"style=form,explode=true,name=metric"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    Sort []string `queryParam:"style=form,explode=true,name=sort"`
    StartDate string `queryParam:"style=form,explode=true,name=startDate"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=startIndex"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsensehostReportsGenerateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsensehostReportsGenerateRequest struct {
    QueryParams AdsensehostReportsGenerateQueryParams 
    Security AdsensehostReportsGenerateSecurity 
    
}

type AdsensehostReportsGenerateResponse struct {
    ContentType string 
    Report *shared.Report 
    StatusCode int64 
    
}


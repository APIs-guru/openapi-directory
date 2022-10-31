package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherPurchasesVoidedpurchasesListPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherPurchasesVoidedpurchasesListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    EndTime *string `queryParam:"style=form,explode=true,name=endTime"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=startIndex"`
    StartTime *string `queryParam:"style=form,explode=true,name=startTime"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherPurchasesVoidedpurchasesListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherPurchasesVoidedpurchasesListRequest struct {
    PathParams AndroidpublisherPurchasesVoidedpurchasesListPathParams 
    QueryParams AndroidpublisherPurchasesVoidedpurchasesListQueryParams 
    Security AndroidpublisherPurchasesVoidedpurchasesListSecurity 
    
}

type AndroidpublisherPurchasesVoidedpurchasesListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


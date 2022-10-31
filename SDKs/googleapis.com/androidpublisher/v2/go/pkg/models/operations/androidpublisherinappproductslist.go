package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherInappproductsListPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    
}

type AndroidpublisherInappproductsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    MaxResults *int64 `queryParam:"style=form,explode=true,name=maxResults"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    StartIndex *int64 `queryParam:"style=form,explode=true,name=startIndex"`
    Token *string `queryParam:"style=form,explode=true,name=token"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherInappproductsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherInappproductsListRequest struct {
    PathParams AndroidpublisherInappproductsListPathParams 
    QueryParams AndroidpublisherInappproductsListQueryParams 
    Security AndroidpublisherInappproductsListSecurity 
    
}

type AndroidpublisherInappproductsListResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


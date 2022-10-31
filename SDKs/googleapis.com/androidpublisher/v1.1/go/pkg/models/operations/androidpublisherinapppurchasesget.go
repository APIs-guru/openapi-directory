package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherInapppurchasesGetPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    Token string `pathParam:"style=simple,explode=false,name=token"`
    
}

type AndroidpublisherInapppurchasesGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherInapppurchasesGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherInapppurchasesGetRequest struct {
    PathParams AndroidpublisherInapppurchasesGetPathParams 
    QueryParams AndroidpublisherInapppurchasesGetQueryParams 
    Security AndroidpublisherInapppurchasesGetSecurity 
    
}

type AndroidpublisherInapppurchasesGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


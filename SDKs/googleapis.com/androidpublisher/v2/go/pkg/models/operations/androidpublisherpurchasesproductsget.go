package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherPurchasesProductsGetPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    Token string `pathParam:"style=simple,explode=false,name=token"`
    
}

type AndroidpublisherPurchasesProductsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherPurchasesProductsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherPurchasesProductsGetRequest struct {
    PathParams AndroidpublisherPurchasesProductsGetPathParams 
    QueryParams AndroidpublisherPurchasesProductsGetQueryParams 
    Security AndroidpublisherPurchasesProductsGetSecurity 
    
}

type AndroidpublisherPurchasesProductsGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherInappproductsGetPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    Sku string `pathParam:"style=simple,explode=false,name=sku"`
    
}

type AndroidpublisherInappproductsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherInappproductsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherInappproductsGetRequest struct {
    PathParams AndroidpublisherInappproductsGetPathParams 
    QueryParams AndroidpublisherInappproductsGetQueryParams 
    Security AndroidpublisherInappproductsGetSecurity 
    
}

type AndroidpublisherInappproductsGetResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


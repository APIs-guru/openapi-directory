package operations

import (
"openapi/pkg/models/shared")

type AndroidpublisherInappproductsPatchPathParams struct {
    PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
    Sku string `pathParam:"style=simple,explode=false,name=sku"`
    
}

type AndroidpublisherInappproductsPatchQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    AutoConvertMissingPrices *bool `queryParam:"style=form,explode=true,name=autoConvertMissingPrices"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AndroidpublisherInappproductsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AndroidpublisherInappproductsPatchRequest struct {
    PathParams AndroidpublisherInappproductsPatchPathParams 
    QueryParams AndroidpublisherInappproductsPatchQueryParams 
    Request *shared.InAppProduct `request:"mediaType=application/json"`
    Security AndroidpublisherInappproductsPatchSecurity 
    
}

type AndroidpublisherInappproductsPatchResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


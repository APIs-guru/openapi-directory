package operations

import (
"openapi/pkg/models/shared")

type AdexchangebuyerProductsGetPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type AdexchangebuyerProductsGetQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdexchangebuyerProductsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdexchangebuyerProductsGetRequest struct {
    PathParams AdexchangebuyerProductsGetPathParams 
    QueryParams AdexchangebuyerProductsGetQueryParams 
    Security AdexchangebuyerProductsGetSecurity 
    
}

type AdexchangebuyerProductsGetResponse struct {
    ContentType string 
    Product *shared.Product 
    StatusCode int64 
    
}


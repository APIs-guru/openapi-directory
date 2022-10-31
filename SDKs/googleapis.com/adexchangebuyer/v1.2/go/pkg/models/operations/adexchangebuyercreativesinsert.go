package operations

import (
"openapi/pkg/models/shared")

type AdexchangebuyerCreativesInsertQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdexchangebuyerCreativesInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdexchangebuyerCreativesInsertRequest struct {
    QueryParams AdexchangebuyerCreativesInsertQueryParams 
    Request *shared.Creative `request:"mediaType=application/json"`
    Security AdexchangebuyerCreativesInsertSecurity 
    
}

type AdexchangebuyerCreativesInsertResponse struct {
    ContentType string 
    Creative *shared.Creative 
    StatusCode int64 
    
}


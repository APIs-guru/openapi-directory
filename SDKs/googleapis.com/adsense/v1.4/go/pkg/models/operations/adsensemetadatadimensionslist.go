package operations

import (
"openapi/pkg/models/shared")

type AdsenseMetadataDimensionsListQueryParams struct {
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UserIP *string `queryParam:"style=form,explode=true,name=userIp"`
    
}

type AdsenseMetadataDimensionsListSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseMetadataDimensionsListSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AdsenseMetadataDimensionsListSecurity struct {
    Option1 *AdsenseMetadataDimensionsListSecurityOption1 `security:"option"`
    Option2 *AdsenseMetadataDimensionsListSecurityOption2 `security:"option"`
    
}

type AdsenseMetadataDimensionsListRequest struct {
    QueryParams AdsenseMetadataDimensionsListQueryParams 
    Security AdsenseMetadataDimensionsListSecurity 
    
}

type AdsenseMetadataDimensionsListResponse struct {
    ContentType string 
    Metadata *shared.Metadata 
    StatusCode int64 
    
}


package operations

import (
"openapi/pkg/models/shared")

type DirectoryDomainsGetPathParams struct {
    Customer string `pathParam:"style=simple,explode=false,name=customer"`
    DomainName string `pathParam:"style=simple,explode=false,name=domainName"`
    
}

type DirectoryDomainsGetQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type DirectoryDomainsGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryDomainsGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryDomainsGetSecurity struct {
    Option1 *DirectoryDomainsGetSecurityOption1 `security:"option"`
    Option2 *DirectoryDomainsGetSecurityOption2 `security:"option"`
    
}

type DirectoryDomainsGetRequest struct {
    PathParams DirectoryDomainsGetPathParams 
    QueryParams DirectoryDomainsGetQueryParams 
    Security DirectoryDomainsGetSecurity 
    
}

type DirectoryDomainsGetResponse struct {
    ContentType string 
    Domains *shared.Domains 
    StatusCode int64 
    
}


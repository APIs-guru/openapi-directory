package operations

import (
"openapi/pkg/models/shared")

type DirectoryDomainAliasesGetPathParams struct {
    Customer string `pathParam:"style=simple,explode=false,name=customer"`
    DomainAliasName string `pathParam:"style=simple,explode=false,name=domainAliasName"`
    
}

type DirectoryDomainAliasesGetQueryParams struct {
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

type DirectoryDomainAliasesGetSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryDomainAliasesGetSecurityOption2 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryDomainAliasesGetSecurity struct {
    Option1 *DirectoryDomainAliasesGetSecurityOption1 `security:"option"`
    Option2 *DirectoryDomainAliasesGetSecurityOption2 `security:"option"`
    
}

type DirectoryDomainAliasesGetRequest struct {
    PathParams DirectoryDomainAliasesGetPathParams 
    QueryParams DirectoryDomainAliasesGetQueryParams 
    Security DirectoryDomainAliasesGetSecurity 
    
}

type DirectoryDomainAliasesGetResponse struct {
    ContentType string 
    DomainAlias *shared.DomainAlias 
    StatusCode int64 
    
}


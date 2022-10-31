package operations

import (
"openapi/pkg/models/shared")

type DirectoryDomainAliasesInsertPathParams struct {
    Customer string `pathParam:"style=simple,explode=false,name=customer"`
    
}

type DirectoryDomainAliasesInsertQueryParams struct {
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

type DirectoryDomainAliasesInsertSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type DirectoryDomainAliasesInsertRequest struct {
    PathParams DirectoryDomainAliasesInsertPathParams 
    QueryParams DirectoryDomainAliasesInsertQueryParams 
    Request *shared.DomainAlias `request:"mediaType=application/json"`
    Security DirectoryDomainAliasesInsertSecurity 
    
}

type DirectoryDomainAliasesInsertResponse struct {
    ContentType string 
    DomainAlias *shared.DomainAlias 
    StatusCode int64 
    
}


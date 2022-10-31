package operations

import (
"openapi/pkg/models/shared")

type AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UpdateMask *string `queryParam:"style=form,explode=true,name=updateMask"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchRequest struct {
    PathParams AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchPathParams 
    QueryParams AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchQueryParams 
    Request *shared.Deal `request:"mediaType=application/json"`
    Security AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchSecurity 
    
}

type AuthorizedbuyersmarketplaceBuyersProposalsDealsPatchResponse struct {
    ContentType string 
    Deal *shared.Deal 
    StatusCode int64 
    
}


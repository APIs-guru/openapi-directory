package operations

import (
"openapi/pkg/models/shared")

type Adexchangebuyer2AccountsProposalsCreatePathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}

type Adexchangebuyer2AccountsProposalsCreateQueryParams struct {
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

type Adexchangebuyer2AccountsProposalsCreateSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Adexchangebuyer2AccountsProposalsCreateRequest struct {
    PathParams Adexchangebuyer2AccountsProposalsCreatePathParams 
    QueryParams Adexchangebuyer2AccountsProposalsCreateQueryParams 
    Request *shared.Proposal `request:"mediaType=application/json"`
    Security Adexchangebuyer2AccountsProposalsCreateSecurity 
    
}

type Adexchangebuyer2AccountsProposalsCreateResponse struct {
    ContentType string 
    Proposal *shared.Proposal 
    StatusCode int64 
    
}


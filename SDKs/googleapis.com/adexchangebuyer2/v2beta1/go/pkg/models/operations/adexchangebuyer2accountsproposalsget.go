package operations

import (
"openapi/pkg/models/shared")

type Adexchangebuyer2AccountsProposalsGetPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    ProposalID string `pathParam:"style=simple,explode=false,name=proposalId"`
    
}

type Adexchangebuyer2AccountsProposalsGetQueryParams struct {
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

type Adexchangebuyer2AccountsProposalsGetSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Adexchangebuyer2AccountsProposalsGetRequest struct {
    PathParams Adexchangebuyer2AccountsProposalsGetPathParams 
    QueryParams Adexchangebuyer2AccountsProposalsGetQueryParams 
    Security Adexchangebuyer2AccountsProposalsGetSecurity 
    
}

type Adexchangebuyer2AccountsProposalsGetResponse struct {
    ContentType string 
    Proposal *shared.Proposal 
    StatusCode int64 
    
}


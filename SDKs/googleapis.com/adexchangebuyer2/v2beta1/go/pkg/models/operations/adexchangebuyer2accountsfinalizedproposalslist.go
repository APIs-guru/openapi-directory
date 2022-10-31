package operations

import (
"openapi/pkg/models/shared")

type Adexchangebuyer2AccountsFinalizedProposalsListPathParams struct {
    AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
    
}


type Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum string

const (
    Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnumFilterSyntaxUnspecified Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum = "FILTER_SYNTAX_UNSPECIFIED"
Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnumPql Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum = "PQL"
Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnumListFilter Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum = "LIST_FILTER"
)


type Adexchangebuyer2AccountsFinalizedProposalsListQueryParams struct {
    DollarXgafv *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
    AccessToken *string `queryParam:"style=form,explode=true,name=access_token"`
    Alt *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
    Callback *string `queryParam:"style=form,explode=true,name=callback"`
    Fields *string `queryParam:"style=form,explode=true,name=fields"`
    Filter *string `queryParam:"style=form,explode=true,name=filter"`
    FilterSyntax *Adexchangebuyer2AccountsFinalizedProposalsListFilterSyntaxEnum `queryParam:"style=form,explode=true,name=filterSyntax"`
    Key *string `queryParam:"style=form,explode=true,name=key"`
    OauthToken *string `queryParam:"style=form,explode=true,name=oauth_token"`
    PageSize *int64 `queryParam:"style=form,explode=true,name=pageSize"`
    PageToken *string `queryParam:"style=form,explode=true,name=pageToken"`
    PrettyPrint *bool `queryParam:"style=form,explode=true,name=prettyPrint"`
    QuotaUser *string `queryParam:"style=form,explode=true,name=quotaUser"`
    UploadType *string `queryParam:"style=form,explode=true,name=uploadType"`
    UploadProtocol *string `queryParam:"style=form,explode=true,name=upload_protocol"`
    
}

type Adexchangebuyer2AccountsFinalizedProposalsListSecurity struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
    
}

type Adexchangebuyer2AccountsFinalizedProposalsListRequest struct {
    PathParams Adexchangebuyer2AccountsFinalizedProposalsListPathParams 
    QueryParams Adexchangebuyer2AccountsFinalizedProposalsListQueryParams 
    Security Adexchangebuyer2AccountsFinalizedProposalsListSecurity 
    
}

type Adexchangebuyer2AccountsFinalizedProposalsListResponse struct {
    ContentType string 
    ListProposalsResponse *shared.ListProposalsResponse 
    StatusCode int64 
    
}


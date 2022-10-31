package operations

import (
	"openapi/pkg/models/shared"
)

type Adexchangebuyer2AccountsProposalsListPathParams struct {
	AccountID string `pathParam:"style=simple,explode=false,name=accountId"`
}

type Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum string

const (
	Adexchangebuyer2AccountsProposalsListFilterSyntaxEnumFilterSyntaxUnspecified Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum = "FILTER_SYNTAX_UNSPECIFIED"
	Adexchangebuyer2AccountsProposalsListFilterSyntaxEnumPql                     Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum = "PQL"
	Adexchangebuyer2AccountsProposalsListFilterSyntaxEnumListFilter              Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum = "LIST_FILTER"
)

type Adexchangebuyer2AccountsProposalsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                      `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                        `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string                                                `queryParam:"style=form,explode=true,name=filter"`
	FilterSyntax   *Adexchangebuyer2AccountsProposalsListFilterSyntaxEnum `queryParam:"style=form,explode=true,name=filterSyntax"`
	Key            *string                                                `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64                                                 `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                                `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                  `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type Adexchangebuyer2AccountsProposalsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Adexchangebuyer2AccountsProposalsListRequest struct {
	PathParams  Adexchangebuyer2AccountsProposalsListPathParams
	QueryParams Adexchangebuyer2AccountsProposalsListQueryParams
	Security    Adexchangebuyer2AccountsProposalsListSecurity
}

type Adexchangebuyer2AccountsProposalsListResponse struct {
	ContentType           string
	ListProposalsResponse *shared.ListProposalsResponse
	StatusCode            int64
}

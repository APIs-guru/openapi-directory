package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerMarketplacenotesListPathParams struct {
	ProposalID string `pathParam:"style=simple,explode=false,name=proposalId"`
}

type AdexchangebuyerMarketplacenotesListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PqlQuery    *string         `queryParam:"style=form,explode=true,name=pqlQuery"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerMarketplacenotesListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerMarketplacenotesListRequest struct {
	PathParams  AdexchangebuyerMarketplacenotesListPathParams
	QueryParams AdexchangebuyerMarketplacenotesListQueryParams
	Security    AdexchangebuyerMarketplacenotesListSecurity
}

type AdexchangebuyerMarketplacenotesListResponse struct {
	ContentType           string
	GetOrderNotesResponse *shared.GetOrderNotesResponse
	StatusCode            int64
}

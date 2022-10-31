package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerMarketplacenotesInsertPathParams struct {
	ProposalID string `pathParam:"style=simple,explode=false,name=proposalId"`
}

type AdexchangebuyerMarketplacenotesInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerMarketplacenotesInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerMarketplacenotesInsertRequest struct {
	PathParams  AdexchangebuyerMarketplacenotesInsertPathParams
	QueryParams AdexchangebuyerMarketplacenotesInsertQueryParams
	Request     *shared.AddOrderNotesRequest `request:"mediaType=application/json"`
	Security    AdexchangebuyerMarketplacenotesInsertSecurity
}

type AdexchangebuyerMarketplacenotesInsertResponse struct {
	AddOrderNotesResponse *shared.AddOrderNotesResponse
	ContentType           string
	StatusCode            int64
}

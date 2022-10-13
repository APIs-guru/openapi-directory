package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerMarketplacedealsDeletePathParams struct {
	ProposalID string `pathParam:"style=simple,explode=false,name=proposalId"`
}

type AdexchangebuyerMarketplacedealsDeleteQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerMarketplacedealsDeleteSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerMarketplacedealsDeleteRequest struct {
	PathParams  AdexchangebuyerMarketplacedealsDeletePathParams
	QueryParams AdexchangebuyerMarketplacedealsDeleteQueryParams
	Request     *shared.DeleteOrderDealsRequest `request:"mediaType=application/json"`
	Security    AdexchangebuyerMarketplacedealsDeleteSecurity
}

type AdexchangebuyerMarketplacedealsDeleteResponse struct {
	ContentType              string
	DeleteOrderDealsResponse *shared.DeleteOrderDealsResponse
	StatusCode               int64
}

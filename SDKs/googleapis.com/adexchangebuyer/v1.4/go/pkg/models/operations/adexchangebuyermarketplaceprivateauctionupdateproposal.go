package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams struct {
	PrivateAuctionID string `pathParam:"style=simple,explode=false,name=privateAuctionId"`
}

type AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerMarketplaceprivateauctionUpdateproposalRequest struct {
	PathParams  AdexchangebuyerMarketplaceprivateauctionUpdateproposalPathParams
	QueryParams AdexchangebuyerMarketplaceprivateauctionUpdateproposalQueryParams
	Request     *shared.UpdatePrivateAuctionProposalRequest `request:"mediaType=application/json"`
	Security    AdexchangebuyerMarketplaceprivateauctionUpdateproposalSecurity
}

type AdexchangebuyerMarketplaceprivateauctionUpdateproposalResponse struct {
	ContentType string
	StatusCode  int64
}

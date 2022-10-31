package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerCreativesAddDealPathParams struct {
	AccountID       int64  `pathParam:"style=simple,explode=false,name=accountId"`
	BuyerCreativeID string `pathParam:"style=simple,explode=false,name=buyerCreativeId"`
	DealID          string `pathParam:"style=simple,explode=false,name=dealId"`
}

type AdexchangebuyerCreativesAddDealQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerCreativesAddDealSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerCreativesAddDealRequest struct {
	PathParams  AdexchangebuyerCreativesAddDealPathParams
	QueryParams AdexchangebuyerCreativesAddDealQueryParams
	Security    AdexchangebuyerCreativesAddDealSecurity
}

type AdexchangebuyerCreativesAddDealResponse struct {
	ContentType string
	StatusCode  int64
}

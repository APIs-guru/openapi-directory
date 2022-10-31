package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerCreativesGetPathParams struct {
	AccountID       int64  `pathParam:"style=simple,explode=false,name=accountId"`
	BuyerCreativeID string `pathParam:"style=simple,explode=false,name=buyerCreativeId"`
}

type AdexchangebuyerCreativesGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerCreativesGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerCreativesGetRequest struct {
	PathParams  AdexchangebuyerCreativesGetPathParams
	QueryParams AdexchangebuyerCreativesGetQueryParams
	Security    AdexchangebuyerCreativesGetSecurity
}

type AdexchangebuyerCreativesGetResponse struct {
	ContentType string
	Creative    *shared.Creative
	StatusCode  int64
}

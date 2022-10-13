package operations

import (
	"openapi/pkg/models/shared"
)

type AdexchangebuyerProposalsInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AdexchangebuyerProposalsInsertSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AdexchangebuyerProposalsInsertRequest struct {
	QueryParams AdexchangebuyerProposalsInsertQueryParams
	Request     *shared.CreateOrdersRequest `request:"mediaType=application/json"`
	Security    AdexchangebuyerProposalsInsertSecurity
}

type AdexchangebuyerProposalsInsertResponse struct {
	ContentType          string
	CreateOrdersResponse *shared.CreateOrdersResponse
	StatusCode           int64
}

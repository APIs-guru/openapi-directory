package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherOrdersRefundPathParams struct {
	OrderID     string `pathParam:"style=simple,explode=false,name=orderId"`
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherOrdersRefundQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	Revoke      *bool           `queryParam:"style=form,explode=true,name=revoke"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherOrdersRefundSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherOrdersRefundRequest struct {
	PathParams  AndroidpublisherOrdersRefundPathParams
	QueryParams AndroidpublisherOrdersRefundQueryParams
	Security    AndroidpublisherOrdersRefundSecurity
}

type AndroidpublisherOrdersRefundResponse struct {
	ContentType string
	StatusCode  int64
}

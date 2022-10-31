package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherPurchasesSubscriptionsGetPathParams struct {
	PackageName    string `pathParam:"style=simple,explode=false,name=packageName"`
	SubscriptionID string `pathParam:"style=simple,explode=false,name=subscriptionId"`
	Token          string `pathParam:"style=simple,explode=false,name=token"`
}

type AndroidpublisherPurchasesSubscriptionsGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type AndroidpublisherPurchasesSubscriptionsGetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherPurchasesSubscriptionsGetRequest struct {
	PathParams  AndroidpublisherPurchasesSubscriptionsGetPathParams
	QueryParams AndroidpublisherPurchasesSubscriptionsGetQueryParams
	Security    AndroidpublisherPurchasesSubscriptionsGetSecurity
}

type AndroidpublisherPurchasesSubscriptionsGetResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}

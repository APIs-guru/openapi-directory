package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherPurchasesSubscriptionsv2GetPathParams struct {
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
	Token       string `pathParam:"style=simple,explode=false,name=token"`
}

type AndroidpublisherPurchasesSubscriptionsv2GetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AndroidpublisherPurchasesSubscriptionsv2GetSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherPurchasesSubscriptionsv2GetRequest struct {
	PathParams  AndroidpublisherPurchasesSubscriptionsv2GetPathParams
	QueryParams AndroidpublisherPurchasesSubscriptionsv2GetQueryParams
	Security    AndroidpublisherPurchasesSubscriptionsv2GetSecurity
}

type AndroidpublisherPurchasesSubscriptionsv2GetResponse struct {
	ContentType            string
	StatusCode             int64
	SubscriptionPurchaseV2 *shared.SubscriptionPurchaseV2
}

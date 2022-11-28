package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams struct {
	BasePlanID  string `pathParam:"style=simple,explode=false,name=basePlanId"`
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
	ProductID   string `pathParam:"style=simple,explode=false,name=productId"`
}

type AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams struct {
	DollarXgafv           *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken           *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                   *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback              *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                   *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken            *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	OfferID               *string           `queryParam:"style=form,explode=true,name=offerId"`
	PrettyPrint           *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser             *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RegionsVersionVersion *string           `queryParam:"style=form,explode=true,name=regionsVersion.version"`
	UploadType            *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol        *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateRequest struct {
	PathParams  AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreatePathParams
	QueryParams AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateQueryParams
	Request     *shared.SubscriptionOfferInput `request:"mediaType=application/json"`
	Security    AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateSecurity
}

type AndroidpublisherMonetizationSubscriptionsBasePlansOffersCreateResponse struct {
	ContentType       string
	StatusCode        int64
	SubscriptionOffer *shared.SubscriptionOffer
}

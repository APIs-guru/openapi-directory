package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherMonetizationSubscriptionsPatchPathParams struct {
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
	ProductID   string `pathParam:"style=simple,explode=false,name=productId"`
}

type AndroidpublisherMonetizationSubscriptionsPatchQueryParams struct {
	DollarXgafv           *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken           *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt                   *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback              *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields                *string           `queryParam:"style=form,explode=true,name=fields"`
	Key                   *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken            *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint           *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser             *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	RegionsVersionVersion *string           `queryParam:"style=form,explode=true,name=regionsVersion.version"`
	UpdateMask            *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType            *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol        *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AndroidpublisherMonetizationSubscriptionsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherMonetizationSubscriptionsPatchRequest struct {
	PathParams  AndroidpublisherMonetizationSubscriptionsPatchPathParams
	QueryParams AndroidpublisherMonetizationSubscriptionsPatchQueryParams
	Request     *shared.SubscriptionInput `request:"mediaType=application/json"`
	Security    AndroidpublisherMonetizationSubscriptionsPatchSecurity
}

type AndroidpublisherMonetizationSubscriptionsPatchResponse struct {
	ContentType  string
	StatusCode   int64
	Subscription *shared.Subscription
}

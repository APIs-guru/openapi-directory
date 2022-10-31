package operations

import (
	"openapi/pkg/models/shared"
)

type AndroidpublisherMonetizationSubscriptionsListPathParams struct {
	PackageName string `pathParam:"style=simple,explode=false,name=packageName"`
}

type AndroidpublisherMonetizationSubscriptionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageSize       *int64            `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ShowArchived   *bool             `queryParam:"style=form,explode=true,name=showArchived"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AndroidpublisherMonetizationSubscriptionsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AndroidpublisherMonetizationSubscriptionsListRequest struct {
	PathParams  AndroidpublisherMonetizationSubscriptionsListPathParams
	QueryParams AndroidpublisherMonetizationSubscriptionsListQueryParams
	Security    AndroidpublisherMonetizationSubscriptionsListSecurity
}

type AndroidpublisherMonetizationSubscriptionsListResponse struct {
	ContentType               string
	ListSubscriptionsResponse *shared.ListSubscriptionsResponse
	StatusCode                int64
}

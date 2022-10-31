package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsDevelopersSubscriptionsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ApigeeOrganizationsDevelopersSubscriptionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Count          *int64            `queryParam:"style=form,explode=true,name=count"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	StartKey       *string           `queryParam:"style=form,explode=true,name=startKey"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigeeOrganizationsDevelopersSubscriptionsListSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsDevelopersSubscriptionsListRequest struct {
	PathParams  ApigeeOrganizationsDevelopersSubscriptionsListPathParams
	QueryParams ApigeeOrganizationsDevelopersSubscriptionsListQueryParams
	Security    ApigeeOrganizationsDevelopersSubscriptionsListSecurity
}

type ApigeeOrganizationsDevelopersSubscriptionsListResponse struct {
	ContentType                                           string
	GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse *shared.GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse
	StatusCode                                            int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	ExternalID     *string           `queryParam:"style=form,explode=true,name=externalId"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AssuredworkloadsOrganizationsLocationsWorkloadsCreateRequest struct {
	PathParams  AssuredworkloadsOrganizationsLocationsWorkloadsCreatePathParams
	QueryParams AssuredworkloadsOrganizationsLocationsWorkloadsCreateQueryParams
	Request     *shared.GoogleCloudAssuredworkloadsV1beta1Workload `request:"mediaType=application/json"`
	Security    AssuredworkloadsOrganizationsLocationsWorkloadsCreateSecurity
}

type AssuredworkloadsOrganizationsLocationsWorkloadsCreateResponse struct {
	ContentType                string
	GoogleLongrunningOperation *shared.GoogleLongrunningOperation
	StatusCode                 int64
}

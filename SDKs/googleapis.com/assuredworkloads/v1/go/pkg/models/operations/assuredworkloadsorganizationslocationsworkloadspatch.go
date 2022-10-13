package operations

import (
	"openapi/pkg/models/shared"
)

type AssuredworkloadsOrganizationsLocationsWorkloadsPatchPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type AssuredworkloadsOrganizationsLocationsWorkloadsPatchQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UpdateMask     *string           `queryParam:"style=form,explode=true,name=updateMask"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AssuredworkloadsOrganizationsLocationsWorkloadsPatchRequest struct {
	PathParams  AssuredworkloadsOrganizationsLocationsWorkloadsPatchPathParams
	QueryParams AssuredworkloadsOrganizationsLocationsWorkloadsPatchQueryParams
	Request     *shared.GoogleCloudAssuredworkloadsV1Workload `request:"mediaType=application/json"`
	Security    AssuredworkloadsOrganizationsLocationsWorkloadsPatchSecurity
}

type AssuredworkloadsOrganizationsLocationsWorkloadsPatchResponse struct {
	ContentType                           string
	GoogleCloudAssuredworkloadsV1Workload *shared.GoogleCloudAssuredworkloadsV1Workload
	StatusCode                            int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams struct {
	Source string `pathParam:"style=simple,explode=false,name=source"`
	Target string `pathParam:"style=simple,explode=false,name=target"`
}

type AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Project        *string           `queryParam:"style=form,explode=true,name=project"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveRequest struct {
	PathParams  AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMovePathParams
	QueryParams AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveQueryParams
	Security    AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveSecurity
}

type AssuredworkloadsOrganizationsLocationsWorkloadsOrganizationsLocationsWorkloadsAnalyzeWorkloadMoveResponse struct {
	ContentType                                                   string
	GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse *shared.GoogleCloudAssuredworkloadsV1beta1AnalyzeWorkloadMoveResponse
	StatusCode                                                    int64
}

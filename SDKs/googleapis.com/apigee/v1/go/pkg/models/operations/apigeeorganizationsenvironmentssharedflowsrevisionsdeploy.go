package operations

import (
	"openapi/pkg/models/shared"
)

type ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	Override       *bool             `queryParam:"style=form,explode=true,name=override"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	ServiceAccount *string           `queryParam:"style=form,explode=true,name=serviceAccount"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployRequest struct {
	PathParams  ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployPathParams
	QueryParams ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployQueryParams
	Security    ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeploySecurity
}

type ApigeeOrganizationsEnvironmentsSharedflowsRevisionsDeployResponse struct {
	ContentType                   string
	GoogleCloudApigeeV1Deployment *shared.GoogleCloudApigeeV1Deployment
	StatusCode                    int64
}

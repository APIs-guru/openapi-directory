package operations

import (
	"openapi/pkg/models/shared"
)

type ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams struct {
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

type ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity struct {
	Option1 *ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption1 `security:"option"`
	Option2 *ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurityOption2 `security:"option"`
}

type ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsRequest struct {
	PathParams  ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsPathParams
	QueryParams ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsQueryParams
	Request     *shared.TestIamPermissionsRequest `request:"mediaType=application/json"`
	Security    ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsSecurity
}

type ArtifactregistryProjectsLocationsRepositoriesTestIamPermissionsResponse struct {
	ContentType                string
	StatusCode                 int64
	TestIamPermissionsResponse *shared.TestIamPermissionsResponse
}

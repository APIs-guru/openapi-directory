package operations

import (
	"openapi/pkg/models/shared"
)

type ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams struct {
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
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity struct {
	Option1 *ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption1 `security:"option"`
	Option2 *ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurityOption2 `security:"option"`
}

type ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListRequest struct {
	PathParams  ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListPathParams
	QueryParams ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListQueryParams
	Security    ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListSecurity
}

type ArtifactregistryProjectsLocationsRepositoriesMavenArtifactsListResponse struct {
	ContentType                string
	ListMavenArtifactsResponse *shared.ListMavenArtifactsResponse
	StatusCode                 int64
}

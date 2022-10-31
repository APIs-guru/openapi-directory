package operations

import (
	"openapi/pkg/models/shared"
)

type ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams struct {
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

type ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadRequest struct {
	PathParams  ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadPathParams
	QueryParams ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadQueryParams
	Request     []byte `request:"mediaType=application/octet-stream"`
	Security    ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadSecurity
}

type ArtifactregistryProjectsLocationsRepositoriesAptArtifactsUploadResponse struct {
	ContentType                    string
	StatusCode                     int64
	UploadAptArtifactMediaResponse *shared.UploadAptArtifactMediaResponse
}

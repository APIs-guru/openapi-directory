package operations

import (
	"openapi/pkg/models/shared"
)

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum string

const (
	ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnumVersionViewUnspecified ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum = "VERSION_VIEW_UNSPECIFIED"
	ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnumBasic                  ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum = "BASIC"
	ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnumFull                   ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum = "FULL"
)

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                         `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                   `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                           `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                   `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                                   `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                                   `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                                   `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool                                                                     `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                   `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                                   `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                   `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity struct {
	Option1 *ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption1 `security:"option"`
	Option2 *ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurityOption2 `security:"option"`
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetRequest struct {
	PathParams  ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetPathParams
	QueryParams ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetQueryParams
	Security    ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetSecurity
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsGetResponse struct {
	ContentType string
	StatusCode  int64
	Version     *shared.Version
}

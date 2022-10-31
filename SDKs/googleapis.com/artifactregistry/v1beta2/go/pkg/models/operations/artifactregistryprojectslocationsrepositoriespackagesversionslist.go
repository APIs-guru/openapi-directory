package operations

import (
	"openapi/pkg/models/shared"
)

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum string

const (
	ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnumVersionViewUnspecified ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum = "VERSION_VIEW_UNSPECIFIED"
	ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnumBasic                  ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum = "BASIC"
	ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnumFull                   ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum = "FULL"
)

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                                                          `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                                                                    `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                                                            `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                                                                    `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                                                                    `queryParam:"style=form,explode=true,name=fields"`
	Key            *string                                                                    `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                                                                    `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string                                                                    `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize       *int64                                                                     `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                                                                    `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                                                      `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                                                                    `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                                                                    `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                                                                    `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity struct {
	Option1 *ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption1 `security:"option"`
	Option2 *ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurityOption2 `security:"option"`
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListRequest struct {
	PathParams  ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListPathParams
	QueryParams ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListQueryParams
	Security    ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListSecurity
}

type ArtifactregistryProjectsLocationsRepositoriesPackagesVersionsListResponse struct {
	ContentType          string
	ListVersionsResponse *shared.ListVersionsResponse
	StatusCode           int64
}

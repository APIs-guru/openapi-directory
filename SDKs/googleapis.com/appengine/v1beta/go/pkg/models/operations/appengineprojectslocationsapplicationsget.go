package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineProjectsLocationsApplicationsGetPathParams struct {
	ApplicationsID string `pathParam:"style=simple,explode=false,name=applicationsId"`
	LocationsID    string `pathParam:"style=simple,explode=false,name=locationsId"`
	ProjectsID     string `pathParam:"style=simple,explode=false,name=projectsId"`
}

type AppengineProjectsLocationsApplicationsGetQueryParams struct {
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

type AppengineProjectsLocationsApplicationsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineProjectsLocationsApplicationsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineProjectsLocationsApplicationsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineProjectsLocationsApplicationsGetSecurity struct {
	Option1 *AppengineProjectsLocationsApplicationsGetSecurityOption1 `security:"option"`
	Option2 *AppengineProjectsLocationsApplicationsGetSecurityOption2 `security:"option"`
	Option3 *AppengineProjectsLocationsApplicationsGetSecurityOption3 `security:"option"`
}

type AppengineProjectsLocationsApplicationsGetRequest struct {
	PathParams  AppengineProjectsLocationsApplicationsGetPathParams
	QueryParams AppengineProjectsLocationsApplicationsGetQueryParams
	Security    AppengineProjectsLocationsApplicationsGetSecurity
}

type AppengineProjectsLocationsApplicationsGetResponse struct {
	Application *shared.Application
	ContentType string
	StatusCode  int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type AppengineProjectsLocationsGetPathParams struct {
	LocationsID string `pathParam:"style=simple,explode=false,name=locationsId"`
	ProjectsID  string `pathParam:"style=simple,explode=false,name=projectsId"`
}

type AppengineProjectsLocationsGetQueryParams struct {
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

type AppengineProjectsLocationsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineProjectsLocationsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineProjectsLocationsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type AppengineProjectsLocationsGetSecurity struct {
	Option1 *AppengineProjectsLocationsGetSecurityOption1 `security:"option"`
	Option2 *AppengineProjectsLocationsGetSecurityOption2 `security:"option"`
	Option3 *AppengineProjectsLocationsGetSecurityOption3 `security:"option"`
}

type AppengineProjectsLocationsGetRequest struct {
	PathParams  AppengineProjectsLocationsGetPathParams
	QueryParams AppengineProjectsLocationsGetQueryParams
	Security    AppengineProjectsLocationsGetSecurity
}

type AppengineProjectsLocationsGetResponse struct {
	ContentType string
	Location    *shared.Location
	StatusCode  int64
}

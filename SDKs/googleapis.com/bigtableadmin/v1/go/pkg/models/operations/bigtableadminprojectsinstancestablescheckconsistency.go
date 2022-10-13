package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsInstancesTablesCheckConsistencyPathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams struct {
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

type BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesCheckConsistencySecurity struct {
	Option1 *BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsInstancesTablesCheckConsistencySecurityOption5 `security:"option"`
}

type BigtableadminProjectsInstancesTablesCheckConsistencyRequest struct {
	PathParams  BigtableadminProjectsInstancesTablesCheckConsistencyPathParams
	QueryParams BigtableadminProjectsInstancesTablesCheckConsistencyQueryParams
	Request     *shared.CheckConsistencyRequest `request:"mediaType=application/json"`
	Security    BigtableadminProjectsInstancesTablesCheckConsistencySecurity
}

type BigtableadminProjectsInstancesTablesCheckConsistencyResponse struct {
	CheckConsistencyResponse *shared.CheckConsistencyResponse
	ContentType              string
	StatusCode               int64
}

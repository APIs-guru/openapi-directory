package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsInstancesTablesDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type BigtableadminProjectsInstancesTablesDeleteQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	IgnoreWarnings *bool             `queryParam:"style=form,explode=true,name=ignoreWarnings"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigtableadminProjectsInstancesTablesDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesDeleteSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesDeleteSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesDeleteSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesTablesDeleteSecurity struct {
	Option1 *BigtableadminProjectsInstancesTablesDeleteSecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsInstancesTablesDeleteSecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsInstancesTablesDeleteSecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsInstancesTablesDeleteSecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsInstancesTablesDeleteSecurityOption5 `security:"option"`
	Option6 *BigtableadminProjectsInstancesTablesDeleteSecurityOption6 `security:"option"`
}

type BigtableadminProjectsInstancesTablesDeleteRequest struct {
	PathParams  BigtableadminProjectsInstancesTablesDeletePathParams
	QueryParams BigtableadminProjectsInstancesTablesDeleteQueryParams
	Security    BigtableadminProjectsInstancesTablesDeleteSecurity
}

type BigtableadminProjectsInstancesTablesDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}

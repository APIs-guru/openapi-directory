package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsInstancesClustersUpdatePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type BigtableadminProjectsInstancesClustersUpdateQueryParams struct {
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

type BigtableadminProjectsInstancesClustersUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersUpdateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersUpdateSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersUpdateSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersUpdateSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersUpdateSecurity struct {
	Option1 *BigtableadminProjectsInstancesClustersUpdateSecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsInstancesClustersUpdateSecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsInstancesClustersUpdateSecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsInstancesClustersUpdateSecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsInstancesClustersUpdateSecurityOption5 `security:"option"`
	Option6 *BigtableadminProjectsInstancesClustersUpdateSecurityOption6 `security:"option"`
}

type BigtableadminProjectsInstancesClustersUpdateRequest struct {
	PathParams  BigtableadminProjectsInstancesClustersUpdatePathParams
	QueryParams BigtableadminProjectsInstancesClustersUpdateQueryParams
	Request     *shared.Cluster `request:"mediaType=application/json"`
	Security    BigtableadminProjectsInstancesClustersUpdateSecurity
}

type BigtableadminProjectsInstancesClustersUpdateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}

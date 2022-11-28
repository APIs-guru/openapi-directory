package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsInstancesClustersBackupsCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigtableadminProjectsInstancesClustersBackupsCreateQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	BackupID       *string           `queryParam:"style=form,explode=true,name=backupId"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesClustersBackupsCreateSecurity struct {
	Option1 *BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsInstancesClustersBackupsCreateSecurityOption5 `security:"option"`
}

type BigtableadminProjectsInstancesClustersBackupsCreateRequest struct {
	PathParams  BigtableadminProjectsInstancesClustersBackupsCreatePathParams
	QueryParams BigtableadminProjectsInstancesClustersBackupsCreateQueryParams
	Request     *shared.BackupInput `request:"mediaType=application/json"`
	Security    BigtableadminProjectsInstancesClustersBackupsCreateSecurity
}

type BigtableadminProjectsInstancesClustersBackupsCreateResponse struct {
	ContentType string
	Operation   *shared.Operation
	StatusCode  int64
}

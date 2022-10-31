package operations

import (
	"openapi/pkg/models/shared"
)

type BigtableadminProjectsInstancesListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type BigtableadminProjectsInstancesListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string           `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum   `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string           `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string           `queryParam:"style=form,explode=true,name=fields"`
	Key            *string           `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken      *string           `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool             `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string           `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string           `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string           `queryParam:"style=form,explode=true,name=upload_protocol"`
}

type BigtableadminProjectsInstancesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesListSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesListSecurityOption7 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigtableadminProjectsInstancesListSecurity struct {
	Option1 *BigtableadminProjectsInstancesListSecurityOption1 `security:"option"`
	Option2 *BigtableadminProjectsInstancesListSecurityOption2 `security:"option"`
	Option3 *BigtableadminProjectsInstancesListSecurityOption3 `security:"option"`
	Option4 *BigtableadminProjectsInstancesListSecurityOption4 `security:"option"`
	Option5 *BigtableadminProjectsInstancesListSecurityOption5 `security:"option"`
	Option6 *BigtableadminProjectsInstancesListSecurityOption6 `security:"option"`
	Option7 *BigtableadminProjectsInstancesListSecurityOption7 `security:"option"`
}

type BigtableadminProjectsInstancesListRequest struct {
	PathParams  BigtableadminProjectsInstancesListPathParams
	QueryParams BigtableadminProjectsInstancesListQueryParams
	Security    BigtableadminProjectsInstancesListSecurity
}

type BigtableadminProjectsInstancesListResponse struct {
	ContentType           string
	ListInstancesResponse *shared.ListInstancesResponse
	StatusCode            int64
}

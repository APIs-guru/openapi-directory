package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryProjectsGetServiceAccountPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BigqueryProjectsGetServiceAccountQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryProjectsGetServiceAccountSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryProjectsGetServiceAccountSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryProjectsGetServiceAccountSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryProjectsGetServiceAccountSecurity struct {
	Option1 *BigqueryProjectsGetServiceAccountSecurityOption1 `security:"option"`
	Option2 *BigqueryProjectsGetServiceAccountSecurityOption2 `security:"option"`
	Option3 *BigqueryProjectsGetServiceAccountSecurityOption3 `security:"option"`
}

type BigqueryProjectsGetServiceAccountRequest struct {
	PathParams  BigqueryProjectsGetServiceAccountPathParams
	QueryParams BigqueryProjectsGetServiceAccountQueryParams
	Security    BigqueryProjectsGetServiceAccountSecurity
}

type BigqueryProjectsGetServiceAccountResponse struct {
	ContentType               string
	GetServiceAccountResponse *shared.GetServiceAccountResponse
	StatusCode                int64
}

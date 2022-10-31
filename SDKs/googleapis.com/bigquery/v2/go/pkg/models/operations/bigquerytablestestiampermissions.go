package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryTablesTestIamPermissionsPathParams struct {
	Resource string `pathParam:"style=simple,explode=false,name=resource"`
}

type BigqueryTablesTestIamPermissionsQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryTablesTestIamPermissionsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryTablesTestIamPermissionsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryTablesTestIamPermissionsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryTablesTestIamPermissionsSecurity struct {
	Option1 *BigqueryTablesTestIamPermissionsSecurityOption1 `security:"option"`
	Option2 *BigqueryTablesTestIamPermissionsSecurityOption2 `security:"option"`
	Option3 *BigqueryTablesTestIamPermissionsSecurityOption3 `security:"option"`
}

type BigqueryTablesTestIamPermissionsRequest struct {
	PathParams  BigqueryTablesTestIamPermissionsPathParams
	QueryParams BigqueryTablesTestIamPermissionsQueryParams
	Request     *shared.TestIamPermissionsRequest `request:"mediaType=application/json"`
	Security    BigqueryTablesTestIamPermissionsSecurity
}

type BigqueryTablesTestIamPermissionsResponse struct {
	ContentType                string
	StatusCode                 int64
	TestIamPermissionsResponse *shared.TestIamPermissionsResponse
}

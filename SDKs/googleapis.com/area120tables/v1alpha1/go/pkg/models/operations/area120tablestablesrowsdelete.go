package operations

import (
	"openapi/pkg/models/shared"
)

type Area120tablesTablesRowsDeletePathParams struct {
	Name string `pathParam:"style=simple,explode=false,name=name"`
}

type Area120tablesTablesRowsDeleteQueryParams struct {
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

type Area120tablesTablesRowsDeleteSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsDeleteSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsDeleteSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsDeleteSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsDeleteSecurity struct {
	Option1 *Area120tablesTablesRowsDeleteSecurityOption1 `security:"option"`
	Option2 *Area120tablesTablesRowsDeleteSecurityOption2 `security:"option"`
	Option3 *Area120tablesTablesRowsDeleteSecurityOption3 `security:"option"`
	Option4 *Area120tablesTablesRowsDeleteSecurityOption4 `security:"option"`
}

type Area120tablesTablesRowsDeleteRequest struct {
	PathParams  Area120tablesTablesRowsDeletePathParams
	QueryParams Area120tablesTablesRowsDeleteQueryParams
	Security    Area120tablesTablesRowsDeleteSecurity
}

type Area120tablesTablesRowsDeleteResponse struct {
	ContentType string
	Empty       map[string]interface{}
	StatusCode  int64
}

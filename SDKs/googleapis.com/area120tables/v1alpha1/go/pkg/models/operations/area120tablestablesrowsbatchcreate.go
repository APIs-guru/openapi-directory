package operations

import (
	"openapi/pkg/models/shared"
)

type Area120tablesTablesRowsBatchCreatePathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type Area120tablesTablesRowsBatchCreateQueryParams struct {
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

type Area120tablesTablesRowsBatchCreateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsBatchCreateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsBatchCreateSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsBatchCreateSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsBatchCreateSecurity struct {
	Option1 *Area120tablesTablesRowsBatchCreateSecurityOption1 `security:"option"`
	Option2 *Area120tablesTablesRowsBatchCreateSecurityOption2 `security:"option"`
	Option3 *Area120tablesTablesRowsBatchCreateSecurityOption3 `security:"option"`
	Option4 *Area120tablesTablesRowsBatchCreateSecurityOption4 `security:"option"`
}

type Area120tablesTablesRowsBatchCreateRequest struct {
	PathParams  Area120tablesTablesRowsBatchCreatePathParams
	QueryParams Area120tablesTablesRowsBatchCreateQueryParams
	Request     *shared.BatchCreateRowsRequest `request:"mediaType=application/json"`
	Security    Area120tablesTablesRowsBatchCreateSecurity
}

type Area120tablesTablesRowsBatchCreateResponse struct {
	BatchCreateRowsResponse *shared.BatchCreateRowsResponse
	ContentType             string
	StatusCode              int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type Area120tablesTablesRowsListPathParams struct {
	Parent string `pathParam:"style=simple,explode=false,name=parent"`
}

type Area120tablesTablesRowsListViewEnum string

const (
	Area120tablesTablesRowsListViewEnumViewUnspecified Area120tablesTablesRowsListViewEnum = "VIEW_UNSPECIFIED"
	Area120tablesTablesRowsListViewEnumColumnIDView    Area120tablesTablesRowsListViewEnum = "COLUMN_ID_VIEW"
)

type Area120tablesTablesRowsListQueryParams struct {
	DollarXgafv    *shared.XgafvEnum                    `queryParam:"style=form,explode=true,name=$.xgafv"`
	AccessToken    *string                              `queryParam:"style=form,explode=true,name=access_token"`
	Alt            *shared.AltEnum                      `queryParam:"style=form,explode=true,name=alt"`
	Callback       *string                              `queryParam:"style=form,explode=true,name=callback"`
	Fields         *string                              `queryParam:"style=form,explode=true,name=fields"`
	Filter         *string                              `queryParam:"style=form,explode=true,name=filter"`
	Key            *string                              `queryParam:"style=form,explode=true,name=key"`
	OauthToken     *string                              `queryParam:"style=form,explode=true,name=oauth_token"`
	OrderBy        *string                              `queryParam:"style=form,explode=true,name=orderBy"`
	PageSize       *int64                               `queryParam:"style=form,explode=true,name=pageSize"`
	PageToken      *string                              `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint    *bool                                `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser      *string                              `queryParam:"style=form,explode=true,name=quotaUser"`
	UploadType     *string                              `queryParam:"style=form,explode=true,name=uploadType"`
	UploadProtocol *string                              `queryParam:"style=form,explode=true,name=upload_protocol"`
	View           *Area120tablesTablesRowsListViewEnum `queryParam:"style=form,explode=true,name=view"`
}

type Area120tablesTablesRowsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsListSecurityOption4 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsListSecurityOption5 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsListSecurityOption6 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type Area120tablesTablesRowsListSecurity struct {
	Option1 *Area120tablesTablesRowsListSecurityOption1 `security:"option"`
	Option2 *Area120tablesTablesRowsListSecurityOption2 `security:"option"`
	Option3 *Area120tablesTablesRowsListSecurityOption3 `security:"option"`
	Option4 *Area120tablesTablesRowsListSecurityOption4 `security:"option"`
	Option5 *Area120tablesTablesRowsListSecurityOption5 `security:"option"`
	Option6 *Area120tablesTablesRowsListSecurityOption6 `security:"option"`
}

type Area120tablesTablesRowsListRequest struct {
	PathParams  Area120tablesTablesRowsListPathParams
	QueryParams Area120tablesTablesRowsListQueryParams
	Security    Area120tablesTablesRowsListSecurity
}

type Area120tablesTablesRowsListResponse struct {
	ContentType      string
	ListRowsResponse *shared.ListRowsResponse
	StatusCode       int64
}

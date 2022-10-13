package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryTablesInsertPathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BigqueryTablesInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryTablesInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryTablesInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryTablesInsertSecurity struct {
	Option1 *BigqueryTablesInsertSecurityOption1 `security:"option"`
	Option2 *BigqueryTablesInsertSecurityOption2 `security:"option"`
}

type BigqueryTablesInsertRequest struct {
	PathParams  BigqueryTablesInsertPathParams
	QueryParams BigqueryTablesInsertQueryParams
	Request     *shared.Table `request:"mediaType=application/json"`
	Security    BigqueryTablesInsertSecurity
}

type BigqueryTablesInsertResponse struct {
	ContentType string
	StatusCode  int64
	Table       *shared.Table
}

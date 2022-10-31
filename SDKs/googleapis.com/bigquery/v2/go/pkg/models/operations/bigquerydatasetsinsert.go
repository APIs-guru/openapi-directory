package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryDatasetsInsertPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BigqueryDatasetsInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryDatasetsInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryDatasetsInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryDatasetsInsertSecurity struct {
	Option1 *BigqueryDatasetsInsertSecurityOption1 `security:"option"`
	Option2 *BigqueryDatasetsInsertSecurityOption2 `security:"option"`
}

type BigqueryDatasetsInsertRequest struct {
	PathParams  BigqueryDatasetsInsertPathParams
	QueryParams BigqueryDatasetsInsertQueryParams
	Request     *shared.Dataset `request:"mediaType=application/json"`
	Security    BigqueryDatasetsInsertSecurity
}

type BigqueryDatasetsInsertResponse struct {
	ContentType string
	Dataset     *shared.Dataset
	StatusCode  int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryRoutinesInsertPathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BigqueryRoutinesInsertQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryRoutinesInsertSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRoutinesInsertSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRoutinesInsertSecurity struct {
	Option1 *BigqueryRoutinesInsertSecurityOption1 `security:"option"`
	Option2 *BigqueryRoutinesInsertSecurityOption2 `security:"option"`
}

type BigqueryRoutinesInsertRequest struct {
	PathParams  BigqueryRoutinesInsertPathParams
	QueryParams BigqueryRoutinesInsertQueryParams
	Request     *shared.Routine `request:"mediaType=application/json"`
	Security    BigqueryRoutinesInsertSecurity
}

type BigqueryRoutinesInsertResponse struct {
	ContentType string
	Routine     *shared.Routine
	StatusCode  int64
}

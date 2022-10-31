package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryRoutinesUpdatePathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	RoutineID string `pathParam:"style=simple,explode=false,name=routineId"`
}

type BigqueryRoutinesUpdateQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryRoutinesUpdateSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRoutinesUpdateSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRoutinesUpdateSecurity struct {
	Option1 *BigqueryRoutinesUpdateSecurityOption1 `security:"option"`
	Option2 *BigqueryRoutinesUpdateSecurityOption2 `security:"option"`
}

type BigqueryRoutinesUpdateRequest struct {
	PathParams  BigqueryRoutinesUpdatePathParams
	QueryParams BigqueryRoutinesUpdateQueryParams
	Request     *shared.Routine `request:"mediaType=application/json"`
	Security    BigqueryRoutinesUpdateSecurity
}

type BigqueryRoutinesUpdateResponse struct {
	ContentType string
	Routine     *shared.Routine
	StatusCode  int64
}

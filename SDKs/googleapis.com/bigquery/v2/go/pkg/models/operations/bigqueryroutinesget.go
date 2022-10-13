package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryRoutinesGetPathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
	RoutineID string `pathParam:"style=simple,explode=false,name=routineId"`
}

type BigqueryRoutinesGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	ReadMask    *string         `queryParam:"style=form,explode=true,name=readMask"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryRoutinesGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRoutinesGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRoutinesGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRoutinesGetSecurity struct {
	Option1 *BigqueryRoutinesGetSecurityOption1 `security:"option"`
	Option2 *BigqueryRoutinesGetSecurityOption2 `security:"option"`
	Option3 *BigqueryRoutinesGetSecurityOption3 `security:"option"`
}

type BigqueryRoutinesGetRequest struct {
	PathParams  BigqueryRoutinesGetPathParams
	QueryParams BigqueryRoutinesGetQueryParams
	Security    BigqueryRoutinesGetSecurity
}

type BigqueryRoutinesGetResponse struct {
	ContentType string
	Routine     *shared.Routine
	StatusCode  int64
}

package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryRoutinesListPathParams struct {
	DatasetID string `pathParam:"style=simple,explode=false,name=datasetId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BigqueryRoutinesListQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Filter      *string         `queryParam:"style=form,explode=true,name=filter"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	ReadMask    *string         `queryParam:"style=form,explode=true,name=readMask"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryRoutinesListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRoutinesListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRoutinesListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryRoutinesListSecurity struct {
	Option1 *BigqueryRoutinesListSecurityOption1 `security:"option"`
	Option2 *BigqueryRoutinesListSecurityOption2 `security:"option"`
	Option3 *BigqueryRoutinesListSecurityOption3 `security:"option"`
}

type BigqueryRoutinesListRequest struct {
	PathParams  BigqueryRoutinesListPathParams
	QueryParams BigqueryRoutinesListQueryParams
	Security    BigqueryRoutinesListSecurity
}

type BigqueryRoutinesListResponse struct {
	ContentType          string
	ListRoutinesResponse *shared.ListRoutinesResponse
	StatusCode           int64
}

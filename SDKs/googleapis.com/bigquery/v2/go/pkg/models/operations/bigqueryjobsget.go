package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryJobsGetPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BigqueryJobsGetQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	Location    *string         `queryParam:"style=form,explode=true,name=location"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryJobsGetSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryJobsGetSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryJobsGetSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryJobsGetSecurity struct {
	Option1 *BigqueryJobsGetSecurityOption1 `security:"option"`
	Option2 *BigqueryJobsGetSecurityOption2 `security:"option"`
	Option3 *BigqueryJobsGetSecurityOption3 `security:"option"`
}

type BigqueryJobsGetRequest struct {
	PathParams  BigqueryJobsGetPathParams
	QueryParams BigqueryJobsGetQueryParams
	Security    BigqueryJobsGetSecurity
}

type BigqueryJobsGetResponse struct {
	ContentType string
	Job         *shared.Job
	StatusCode  int64
}

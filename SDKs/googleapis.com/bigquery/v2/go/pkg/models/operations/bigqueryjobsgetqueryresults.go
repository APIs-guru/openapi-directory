package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryJobsGetQueryResultsPathParams struct {
	JobID     string `pathParam:"style=simple,explode=false,name=jobId"`
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BigqueryJobsGetQueryResultsQueryParams struct {
	Alt         *shared.AltEnum `queryParam:"style=form,explode=true,name=alt"`
	Fields      *string         `queryParam:"style=form,explode=true,name=fields"`
	Key         *string         `queryParam:"style=form,explode=true,name=key"`
	Location    *string         `queryParam:"style=form,explode=true,name=location"`
	MaxResults  *int64          `queryParam:"style=form,explode=true,name=maxResults"`
	OauthToken  *string         `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken   *string         `queryParam:"style=form,explode=true,name=pageToken"`
	PrettyPrint *bool           `queryParam:"style=form,explode=true,name=prettyPrint"`
	QuotaUser   *string         `queryParam:"style=form,explode=true,name=quotaUser"`
	StartIndex  *string         `queryParam:"style=form,explode=true,name=startIndex"`
	TimeoutMs   *int64          `queryParam:"style=form,explode=true,name=timeoutMs"`
	UserIP      *string         `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryJobsGetQueryResultsSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryJobsGetQueryResultsSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryJobsGetQueryResultsSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryJobsGetQueryResultsSecurity struct {
	Option1 *BigqueryJobsGetQueryResultsSecurityOption1 `security:"option"`
	Option2 *BigqueryJobsGetQueryResultsSecurityOption2 `security:"option"`
	Option3 *BigqueryJobsGetQueryResultsSecurityOption3 `security:"option"`
}

type BigqueryJobsGetQueryResultsRequest struct {
	PathParams  BigqueryJobsGetQueryResultsPathParams
	QueryParams BigqueryJobsGetQueryResultsQueryParams
	Security    BigqueryJobsGetQueryResultsSecurity
}

type BigqueryJobsGetQueryResultsResponse struct {
	ContentType             string
	GetQueryResultsResponse *shared.GetQueryResultsResponse
	StatusCode              int64
}

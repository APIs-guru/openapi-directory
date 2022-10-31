package operations

import (
	"openapi/pkg/models/shared"
)

type BigqueryJobsListPathParams struct {
	ProjectID string `pathParam:"style=simple,explode=false,name=projectId"`
}

type BigqueryJobsListProjectionEnum string

const (
	BigqueryJobsListProjectionEnumFull    BigqueryJobsListProjectionEnum = "full"
	BigqueryJobsListProjectionEnumMinimal BigqueryJobsListProjectionEnum = "minimal"
)

type BigqueryJobsListStateFilterEnum string

const (
	BigqueryJobsListStateFilterEnumDone    BigqueryJobsListStateFilterEnum = "done"
	BigqueryJobsListStateFilterEnumPending BigqueryJobsListStateFilterEnum = "pending"
	BigqueryJobsListStateFilterEnumRunning BigqueryJobsListStateFilterEnum = "running"
)

type BigqueryJobsListQueryParams struct {
	AllUsers        *bool                             `queryParam:"style=form,explode=true,name=allUsers"`
	Alt             *shared.AltEnum                   `queryParam:"style=form,explode=true,name=alt"`
	Fields          *string                           `queryParam:"style=form,explode=true,name=fields"`
	Key             *string                           `queryParam:"style=form,explode=true,name=key"`
	MaxCreationTime *string                           `queryParam:"style=form,explode=true,name=maxCreationTime"`
	MaxResults      *int64                            `queryParam:"style=form,explode=true,name=maxResults"`
	MinCreationTime *string                           `queryParam:"style=form,explode=true,name=minCreationTime"`
	OauthToken      *string                           `queryParam:"style=form,explode=true,name=oauth_token"`
	PageToken       *string                           `queryParam:"style=form,explode=true,name=pageToken"`
	ParentJobID     *string                           `queryParam:"style=form,explode=true,name=parentJobId"`
	PrettyPrint     *bool                             `queryParam:"style=form,explode=true,name=prettyPrint"`
	Projection      *BigqueryJobsListProjectionEnum   `queryParam:"style=form,explode=true,name=projection"`
	QuotaUser       *string                           `queryParam:"style=form,explode=true,name=quotaUser"`
	StateFilter     []BigqueryJobsListStateFilterEnum `queryParam:"style=form,explode=true,name=stateFilter"`
	UserIP          *string                           `queryParam:"style=form,explode=true,name=userIp"`
}

type BigqueryJobsListSecurityOption1 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryJobsListSecurityOption2 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryJobsListSecurityOption3 struct {
	Oauth2  shared.SchemeOauth2  `security:"scheme,type=oauth2"`
	Oauth2c shared.SchemeOauth2c `security:"scheme,type=oauth2"`
}

type BigqueryJobsListSecurity struct {
	Option1 *BigqueryJobsListSecurityOption1 `security:"option"`
	Option2 *BigqueryJobsListSecurityOption2 `security:"option"`
	Option3 *BigqueryJobsListSecurityOption3 `security:"option"`
}

type BigqueryJobsListRequest struct {
	PathParams  BigqueryJobsListPathParams
	QueryParams BigqueryJobsListQueryParams
	Security    BigqueryJobsListSecurity
}

type BigqueryJobsListResponse struct {
	ContentType string
	JobList     *shared.JobList
	StatusCode  int64
}

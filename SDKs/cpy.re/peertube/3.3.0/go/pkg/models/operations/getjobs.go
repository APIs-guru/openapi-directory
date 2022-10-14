package operations

import (
	"openapi/pkg/models/shared"
)

type GetJobsStateEnum string

const (
	GetJobsStateEnumUnknown   GetJobsStateEnum = ""
	GetJobsStateEnumActive    GetJobsStateEnum = "active"
	GetJobsStateEnumCompleted GetJobsStateEnum = "completed"
	GetJobsStateEnumFailed    GetJobsStateEnum = "failed"
	GetJobsStateEnumWaiting   GetJobsStateEnum = "waiting"
	GetJobsStateEnumDelayed   GetJobsStateEnum = "delayed"
)

type GetJobsPathParams struct {
	State GetJobsStateEnum `pathParam:"style=simple,explode=false,name=state"`
}

type GetJobsQueryParams struct {
	Count   *int64              `queryParam:"style=form,explode=true,name=count"`
	JobType *shared.JobTypeEnum `queryParam:"style=form,explode=true,name=jobType"`
	Sort    *string             `queryParam:"style=form,explode=true,name=sort"`
	Start   *int64              `queryParam:"style=form,explode=true,name=start"`
}

type GetJobsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetJobsRequest struct {
	PathParams  GetJobsPathParams
	QueryParams GetJobsQueryParams
	Security    GetJobsSecurity
}

type GetJobs200ApplicationJSON struct {
	Data  []interface{} `json:"data,omitempty"`
	Total *int64        `json:"total,omitempty"`
}

type GetJobsResponse struct {
	ContentType                     string
	StatusCode                      int64
	GetJobs200ApplicationJSONObject *GetJobs200ApplicationJSON
}

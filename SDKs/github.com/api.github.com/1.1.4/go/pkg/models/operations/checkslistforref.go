package operations

import (
	"openapi/pkg/models/shared"
)

type ChecksListForRefPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Ref   string `pathParam:"style=simple,explode=false,name=ref"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ChecksListForRefFilterEnum string

const (
	ChecksListForRefFilterEnumLatest ChecksListForRefFilterEnum = "latest"
	ChecksListForRefFilterEnumAll    ChecksListForRefFilterEnum = "all"
)

type ChecksListForRefQueryParams struct {
	AppID     *int64                      `queryParam:"style=form,explode=true,name=app_id"`
	CheckName *string                     `queryParam:"style=form,explode=true,name=check_name"`
	Filter    *ChecksListForRefFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Page      *int64                      `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                      `queryParam:"style=form,explode=true,name=per_page"`
	Status    *shared.StatusEnum          `queryParam:"style=form,explode=true,name=status"`
}

type ChecksListForRefRequest struct {
	PathParams  ChecksListForRefPathParams
	QueryParams ChecksListForRefQueryParams
}

type ChecksListForRef200ApplicationJSON struct {
	CheckRuns  []shared.CheckRun `json:"check_runs"`
	TotalCount int64             `json:"total_count"`
}

type ChecksListForRefResponse struct {
	ContentType                              string
	Headers                                  map[string][]string
	StatusCode                               int64
	ChecksListForRef200ApplicationJSONObject *ChecksListForRef200ApplicationJSON
}

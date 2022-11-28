package operations

import (
	"openapi/pkg/models/shared"
)

type ChecksListForSuitePathParams struct {
	CheckSuiteID int64  `pathParam:"style=simple,explode=false,name=check_suite_id"`
	Owner        string `pathParam:"style=simple,explode=false,name=owner"`
	Repo         string `pathParam:"style=simple,explode=false,name=repo"`
}

type ChecksListForSuiteFilterEnum string

const (
	ChecksListForSuiteFilterEnumLatest ChecksListForSuiteFilterEnum = "latest"
	ChecksListForSuiteFilterEnumAll    ChecksListForSuiteFilterEnum = "all"
)

type ChecksListForSuiteQueryParams struct {
	CheckName *string                       `queryParam:"style=form,explode=true,name=check_name"`
	Filter    *ChecksListForSuiteFilterEnum `queryParam:"style=form,explode=true,name=filter"`
	Page      *int64                        `queryParam:"style=form,explode=true,name=page"`
	PerPage   *int64                        `queryParam:"style=form,explode=true,name=per_page"`
	Status    *shared.StatusEnum            `queryParam:"style=form,explode=true,name=status"`
}

type ChecksListForSuite200ApplicationJSON struct {
	CheckRuns  []shared.CheckRun `json:"check_runs"`
	TotalCount int64             `json:"total_count"`
}

type ChecksListForSuiteRequest struct {
	PathParams  ChecksListForSuitePathParams
	QueryParams ChecksListForSuiteQueryParams
}

type ChecksListForSuiteResponse struct {
	ContentType                                string
	Headers                                    map[string][]string
	StatusCode                                 int64
	ChecksListForSuite200ApplicationJSONObject *ChecksListForSuite200ApplicationJSON
}

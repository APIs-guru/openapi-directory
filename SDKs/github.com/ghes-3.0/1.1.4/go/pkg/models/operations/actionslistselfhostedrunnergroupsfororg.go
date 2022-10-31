package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListSelfHostedRunnerGroupsForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ActionsListSelfHostedRunnerGroupsForOrgQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActionsListSelfHostedRunnerGroupsForOrgRequest struct {
	PathParams  ActionsListSelfHostedRunnerGroupsForOrgPathParams
	QueryParams ActionsListSelfHostedRunnerGroupsForOrgQueryParams
}

type ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON struct {
	RunnerGroups []shared.RunnerGroupsOrg `json:"runner_groups"`
	TotalCount   float64                  `json:"total_count"`
}

type ActionsListSelfHostedRunnerGroupsForOrgResponse struct {
	ContentType                                                     string
	StatusCode                                                      int64
	ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSONObject *ActionsListSelfHostedRunnerGroupsForOrg200ApplicationJSON
}

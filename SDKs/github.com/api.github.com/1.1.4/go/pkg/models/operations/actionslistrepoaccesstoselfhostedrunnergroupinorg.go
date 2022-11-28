package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams struct {
	Org           string `pathParam:"style=simple,explode=false,name=org"`
	RunnerGroupID int64  `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON struct {
	Repositories []shared.Repository `json:"repositories"`
	TotalCount   float64             `json:"total_count"`
}

type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgRequest struct {
	PathParams  ActionsListRepoAccessToSelfHostedRunnerGroupInOrgPathParams
	QueryParams ActionsListRepoAccessToSelfHostedRunnerGroupInOrgQueryParams
}

type ActionsListRepoAccessToSelfHostedRunnerGroupInOrgResponse struct {
	ContentType                                                               string
	StatusCode                                                                int64
	ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSONObject *ActionsListRepoAccessToSelfHostedRunnerGroupInOrg200ApplicationJSON
}

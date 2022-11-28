package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListSelfHostedRunnersInGroupForOrgPathParams struct {
	Org           string `pathParam:"style=simple,explode=false,name=org"`
	RunnerGroupID int64  `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type ActionsListSelfHostedRunnersInGroupForOrgQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSON struct {
	Runners    []shared.RunnerNoLabels `json:"runners"`
	TotalCount float64                 `json:"total_count"`
}

type ActionsListSelfHostedRunnersInGroupForOrgRequest struct {
	PathParams  ActionsListSelfHostedRunnersInGroupForOrgPathParams
	QueryParams ActionsListSelfHostedRunnersInGroupForOrgQueryParams
}

type ActionsListSelfHostedRunnersInGroupForOrgResponse struct {
	ContentType                                                       string
	Headers                                                           map[string][]string
	StatusCode                                                        int64
	ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSONObject *ActionsListSelfHostedRunnersInGroupForOrg200ApplicationJSON
}

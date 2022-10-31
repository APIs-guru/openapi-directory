package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListSelfHostedRunnersForOrgPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ActionsListSelfHostedRunnersForOrgQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActionsListSelfHostedRunnersForOrgRequest struct {
	PathParams  ActionsListSelfHostedRunnersForOrgPathParams
	QueryParams ActionsListSelfHostedRunnersForOrgQueryParams
}

type ActionsListSelfHostedRunnersForOrg200ApplicationJSON struct {
	Runners    []shared.RunnerNoLabels `json:"runners"`
	TotalCount float64                 `json:"total_count"`
}

type ActionsListSelfHostedRunnersForOrgResponse struct {
	ContentType                                                string
	Headers                                                    map[string][]string
	StatusCode                                                 int64
	ActionsListSelfHostedRunnersForOrg200ApplicationJSONObject *ActionsListSelfHostedRunnersForOrg200ApplicationJSON
}

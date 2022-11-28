package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON struct {
	RunnerGroups []shared.RunnerGroupsEnterprise `json:"runner_groups"`
	TotalCount   float64                         `json:"total_count"`
}

type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseRequest struct {
	PathParams  EnterpriseAdminListSelfHostedRunnerGroupsForEnterprisePathParams
	QueryParams EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseQueryParams
}

type EnterpriseAdminListSelfHostedRunnerGroupsForEnterpriseResponse struct {
	ContentType                                                                    string
	StatusCode                                                                     int64
	EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSONObject *EnterpriseAdminListSelfHostedRunnerGroupsForEnterprise200ApplicationJSON
}

package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams struct {
	Enterprise    string `pathParam:"style=simple,explode=false,name=enterprise"`
	RunnerGroupID int64  `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseRequest struct {
	PathParams  EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprisePathParams
	QueryParams EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseQueryParams
}

type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSON struct {
	Organizations []shared.OrganizationSimple `json:"organizations"`
	TotalCount    float64                     `json:"total_count"`
}

type EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterpriseResponse struct {
	ContentType                                                                             string
	StatusCode                                                                              int64
	EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSONObject *EnterpriseAdminListOrgAccessToSelfHostedRunnerGroupInEnterprise200ApplicationJSON
}

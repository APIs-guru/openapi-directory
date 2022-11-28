package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams struct {
	Enterprise    string `pathParam:"style=simple,explode=false,name=enterprise"`
	RunnerGroupID int64  `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON struct {
	Runners    []shared.Runner `json:"runners"`
	TotalCount float64         `json:"total_count"`
}

type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseRequest struct {
	PathParams  EnterpriseAdminListSelfHostedRunnersInGroupForEnterprisePathParams
	QueryParams EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseQueryParams
}

type EnterpriseAdminListSelfHostedRunnersInGroupForEnterpriseResponse struct {
	ContentType                                                                      string
	Headers                                                                          map[string][]string
	StatusCode                                                                       int64
	EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSONObject *EnterpriseAdminListSelfHostedRunnersInGroupForEnterprise200ApplicationJSON
}

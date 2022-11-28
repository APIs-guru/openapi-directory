package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON struct {
	Runners    []shared.RunnerNoLabels `json:"runners,omitempty"`
	TotalCount *float64                `json:"total_count,omitempty"`
}

type EnterpriseAdminListSelfHostedRunnersForEnterpriseRequest struct {
	PathParams  EnterpriseAdminListSelfHostedRunnersForEnterprisePathParams
	QueryParams EnterpriseAdminListSelfHostedRunnersForEnterpriseQueryParams
}

type EnterpriseAdminListSelfHostedRunnersForEnterpriseResponse struct {
	ContentType                                                               string
	Headers                                                                   map[string][]string
	StatusCode                                                                int64
	EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSONObject *EnterpriseAdminListSelfHostedRunnersForEnterprise200ApplicationJSON
}

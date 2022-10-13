package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
}

type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseRequest struct {
	PathParams  EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprisePathParams
	QueryParams EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseQueryParams
}

type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON struct {
	Organizations []shared.OrganizationSimple `json:"organizations"`
	TotalCount    float64                     `json:"total_count"`
}

type EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterpriseResponse struct {
	ContentType                                                                                    string
	StatusCode                                                                                     int64
	EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSONObject *EnterpriseAdminListSelectedOrganizationsEnabledGithubActionsEnterprise200ApplicationJSON
}

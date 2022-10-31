package operations

import (
	"openapi/pkg/models/shared"
)

type EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams struct {
	Enterprise    string `pathParam:"style=simple,explode=false,name=enterprise"`
	RunnerGroupID int64  `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseRequest struct {
	PathParams EnterpriseAdminGetSelfHostedRunnerGroupForEnterprisePathParams
}

type EnterpriseAdminGetSelfHostedRunnerGroupForEnterpriseResponse struct {
	ContentType            string
	StatusCode             int64
	RunnerGroupsEnterprise *shared.RunnerGroupsEnterprise
}

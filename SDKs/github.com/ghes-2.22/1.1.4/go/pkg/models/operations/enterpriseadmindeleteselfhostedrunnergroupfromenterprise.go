package operations

type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprisePathParams struct {
	Enterprise    string `pathParam:"style=simple,explode=false,name=enterprise"`
	RunnerGroupID int64  `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseRequest struct {
	PathParams EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterprisePathParams
}

type EnterpriseAdminDeleteSelfHostedRunnerGroupFromEnterpriseResponse struct {
	ContentType string
	StatusCode  int64
}

package operations

type EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams struct {
	Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
	RunnerID   int64  `pathParam:"style=simple,explode=false,name=runner_id"`
}

type EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseRequest struct {
	PathParams EnterpriseAdminDeleteSelfHostedRunnerFromEnterprisePathParams
}

type EnterpriseAdminDeleteSelfHostedRunnerFromEnterpriseResponse struct {
	ContentType string
	StatusCode  int64
}

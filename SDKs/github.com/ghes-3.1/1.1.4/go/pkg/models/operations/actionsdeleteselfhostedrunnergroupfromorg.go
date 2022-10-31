package operations

type ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams struct {
	Org           string `pathParam:"style=simple,explode=false,name=org"`
	RunnerGroupID int64  `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type ActionsDeleteSelfHostedRunnerGroupFromOrgRequest struct {
	PathParams ActionsDeleteSelfHostedRunnerGroupFromOrgPathParams
}

type ActionsDeleteSelfHostedRunnerGroupFromOrgResponse struct {
	ContentType string
	StatusCode  int64
}

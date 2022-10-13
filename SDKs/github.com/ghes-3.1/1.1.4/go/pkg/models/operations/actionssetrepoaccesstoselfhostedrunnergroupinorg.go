package operations

type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams struct {
	Org           string `pathParam:"style=simple,explode=false,name=org"`
	RunnerGroupID int64  `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody struct {
	SelectedRepositoryIds []int64 `json:"selected_repository_ids"`
}

type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequest struct {
	PathParams ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgPathParams
	Request    *ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgRequestBody `request:"mediaType=application/json"`
}

type ActionsSetRepoAccessToSelfHostedRunnerGroupInOrgResponse struct {
	ContentType string
	StatusCode  int64
}

package operations

type ActionsSetSelfHostedRunnersInGroupForOrgPathParams struct {
	Org           string `pathParam:"style=simple,explode=false,name=org"`
	RunnerGroupID int64  `pathParam:"style=simple,explode=false,name=runner_group_id"`
}

type ActionsSetSelfHostedRunnersInGroupForOrgRequestBody struct {
	Runners []int64 `json:"runners"`
}

type ActionsSetSelfHostedRunnersInGroupForOrgRequest struct {
	PathParams ActionsSetSelfHostedRunnersInGroupForOrgPathParams
	Request    *ActionsSetSelfHostedRunnersInGroupForOrgRequestBody `request:"mediaType=application/json"`
}

type ActionsSetSelfHostedRunnersInGroupForOrgResponse struct {
	ContentType string
	StatusCode  int64
}

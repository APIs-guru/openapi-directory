package operations

type ActionsDeleteWorkflowRunPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	RunID int64  `pathParam:"style=simple,explode=false,name=run_id"`
}

type ActionsDeleteWorkflowRunRequest struct {
	PathParams ActionsDeleteWorkflowRunPathParams
}

type ActionsDeleteWorkflowRunResponse struct {
	ContentType string
	StatusCode  int64
}

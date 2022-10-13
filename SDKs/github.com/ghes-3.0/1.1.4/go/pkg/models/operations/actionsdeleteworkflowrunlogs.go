package operations

type ActionsDeleteWorkflowRunLogsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	RunID int64  `pathParam:"style=simple,explode=false,name=run_id"`
}

type ActionsDeleteWorkflowRunLogsRequest struct {
	PathParams ActionsDeleteWorkflowRunLogsPathParams
}

type ActionsDeleteWorkflowRunLogsResponse struct {
	ContentType string
	StatusCode  int64
}

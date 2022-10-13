package operations

type ActionsDisableWorkflowPathParams struct {
	Owner      string      `pathParam:"style=simple,explode=false,name=owner"`
	Repo       string      `pathParam:"style=simple,explode=false,name=repo"`
	WorkflowID interface{} `pathParam:"style=simple,explode=false,name=workflow_id"`
}

type ActionsDisableWorkflowRequest struct {
	PathParams ActionsDisableWorkflowPathParams
}

type ActionsDisableWorkflowResponse struct {
	ContentType string
	StatusCode  int64
}

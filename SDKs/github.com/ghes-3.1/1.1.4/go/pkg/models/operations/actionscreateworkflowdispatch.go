package operations

type ActionsCreateWorkflowDispatchPathParams struct {
	Owner      string      `pathParam:"style=simple,explode=false,name=owner"`
	Repo       string      `pathParam:"style=simple,explode=false,name=repo"`
	WorkflowID interface{} `pathParam:"style=simple,explode=false,name=workflow_id"`
}

type ActionsCreateWorkflowDispatchRequestBody struct {
	Inputs map[string]string `json:"inputs,omitempty"`
	Ref    string            `json:"ref"`
}

type ActionsCreateWorkflowDispatchRequest struct {
	PathParams ActionsCreateWorkflowDispatchPathParams
	Request    *ActionsCreateWorkflowDispatchRequestBody `request:"mediaType=application/json"`
}

type ActionsCreateWorkflowDispatchResponse struct {
	ContentType string
	StatusCode  int64
}

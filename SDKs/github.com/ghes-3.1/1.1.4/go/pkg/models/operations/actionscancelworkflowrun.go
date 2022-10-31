package operations

type ActionsCancelWorkflowRunPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	RunID int64  `pathParam:"style=simple,explode=false,name=run_id"`
}

type ActionsCancelWorkflowRunRequest struct {
	PathParams ActionsCancelWorkflowRunPathParams
}

type ActionsCancelWorkflowRunResponse struct {
	ContentType                                      string
	StatusCode                                       int64
	ActionsCancelWorkflowRun202ApplicationJSONObject map[string]interface{}
}

package operations

type ActionsDownloadJobLogsForWorkflowRunPathParams struct {
	JobID int64  `pathParam:"style=simple,explode=false,name=job_id"`
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActionsDownloadJobLogsForWorkflowRunRequest struct {
	PathParams ActionsDownloadJobLogsForWorkflowRunPathParams
}

type ActionsDownloadJobLogsForWorkflowRunResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
}

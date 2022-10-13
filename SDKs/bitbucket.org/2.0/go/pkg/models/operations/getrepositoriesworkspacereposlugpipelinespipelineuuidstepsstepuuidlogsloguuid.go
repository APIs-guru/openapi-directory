package operations

type GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDPathParams struct {
	LogUUID      string `pathParam:"style=simple,explode=false,name=log_uuid"`
	PipelineUUID string `pathParam:"style=simple,explode=false,name=pipeline_uuid"`
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	StepUUID     string `pathParam:"style=simple,explode=false,name=step_uuid"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDPathParams
}

type GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDLogsLogUUIDResponse struct {
	ContentType string
	StatusCode  int64
}

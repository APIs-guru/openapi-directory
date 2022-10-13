package operations

type GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesPathParams struct {
	PipelineUUID string `pathParam:"style=simple,explode=false,name=pipeline_uuid"`
	RepoSlug     string `pathParam:"style=simple,explode=false,name=repo_slug"`
	StepUUID     string `pathParam:"style=simple,explode=false,name=step_uuid"`
	Workspace    string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesRequest struct {
	PathParams GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesPathParams
}

type GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesResponse struct {
	ContentType string
	StatusCode  int64
}

package operations



type GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsPathParams struct {
    PipelineUUID string `pathParam:"style=simple,explode=false,name=pipeline_uuid"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    StepUUID string `pathParam:"style=simple,explode=false,name=step_uuid"`
    TestCaseUUID string `pathParam:"style=simple,explode=false,name=test_case_uuid"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsPathParams 
    
}

type GetRepositoriesWorkspaceRepoSlugPipelinesPipelineUUIDStepsStepUUIDTestReportsTestCasesTestCaseUUIDTestCaseReasonsResponse struct {
    ContentType string 
    StatusCode int64 
    
}


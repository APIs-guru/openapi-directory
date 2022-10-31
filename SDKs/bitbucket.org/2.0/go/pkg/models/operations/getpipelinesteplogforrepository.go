package operations



type GetPipelineStepLogForRepositoryPathParams struct {
    PipelineUUID string `pathParam:"style=simple,explode=false,name=pipeline_uuid"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    StepUUID string `pathParam:"style=simple,explode=false,name=step_uuid"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetPipelineStepLogForRepositoryRequest struct {
    PathParams GetPipelineStepLogForRepositoryPathParams 
    
}

type GetPipelineStepLogForRepositoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}


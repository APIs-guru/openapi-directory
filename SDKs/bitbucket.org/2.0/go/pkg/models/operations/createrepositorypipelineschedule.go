package operations



type CreateRepositoryPipelineSchedulePathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type CreateRepositoryPipelineScheduleRequest struct {
    PathParams CreateRepositoryPipelineSchedulePathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    
}

type CreateRepositoryPipelineScheduleResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PipelineSchedule map[string]interface{} 
    
}


package operations



type DeleteRepositoryPipelineSchedulePathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    ScheduleUUID string `pathParam:"style=simple,explode=false,name=schedule_uuid"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteRepositoryPipelineScheduleRequest struct {
    PathParams DeleteRepositoryPipelineSchedulePathParams 
    
}

type DeleteRepositoryPipelineScheduleResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}


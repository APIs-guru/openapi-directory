package operations



type GetCommitHostedPropertyValuePathParams struct {
    AppKey string `pathParam:"style=simple,explode=false,name=app_key"`
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    PropertyName string `pathParam:"style=simple,explode=false,name=property_name"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetCommitHostedPropertyValueRequest struct {
    PathParams GetCommitHostedPropertyValuePathParams 
    
}

type GetCommitHostedPropertyValueResponse struct {
    ContentType string 
    StatusCode int64 
    
}


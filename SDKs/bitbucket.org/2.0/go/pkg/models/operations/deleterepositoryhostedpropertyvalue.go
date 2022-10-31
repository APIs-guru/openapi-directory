package operations



type DeleteRepositoryHostedPropertyValuePathParams struct {
    AppKey string `pathParam:"style=simple,explode=false,name=app_key"`
    PropertyName string `pathParam:"style=simple,explode=false,name=property_name"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeleteRepositoryHostedPropertyValueRequest struct {
    PathParams DeleteRepositoryHostedPropertyValuePathParams 
    
}

type DeleteRepositoryHostedPropertyValueResponse struct {
    ContentType string 
    StatusCode int64 
    
}


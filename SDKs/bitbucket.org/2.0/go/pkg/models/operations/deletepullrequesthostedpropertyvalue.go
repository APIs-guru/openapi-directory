package operations



type DeletePullRequestHostedPropertyValuePathParams struct {
    AppKey string `pathParam:"style=simple,explode=false,name=app_key"`
    PropertyName string `pathParam:"style=simple,explode=false,name=property_name"`
    PullrequestID string `pathParam:"style=simple,explode=false,name=pullrequest_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type DeletePullRequestHostedPropertyValueRequest struct {
    PathParams DeletePullRequestHostedPropertyValuePathParams 
    
}

type DeletePullRequestHostedPropertyValueResponse struct {
    ContentType string 
    StatusCode int64 
    
}


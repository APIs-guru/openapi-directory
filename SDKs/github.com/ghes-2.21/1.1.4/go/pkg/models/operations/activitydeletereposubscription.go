package operations



type ActivityDeleteRepoSubscriptionPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ActivityDeleteRepoSubscriptionRequest struct {
    PathParams ActivityDeleteRepoSubscriptionPathParams 
    
}

type ActivityDeleteRepoSubscriptionResponse struct {
    ContentType string 
    StatusCode int64 
    
}


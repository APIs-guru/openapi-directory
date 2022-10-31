package operations



type PullsCheckIfMergedPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    PullNumber int64 `pathParam:"style=simple,explode=false,name=pull_number"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type PullsCheckIfMergedRequest struct {
    PathParams PullsCheckIfMergedPathParams 
    
}

type PullsCheckIfMergedResponse struct {
    ContentType string 
    StatusCode int64 
    
}


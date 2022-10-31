package operations



type ReposListLanguagesPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposListLanguagesRequest struct {
    PathParams ReposListLanguagesPathParams 
    
}

type ReposListLanguagesResponse struct {
    ContentType string 
    StatusCode int64 
    Language map[string]int64 
    
}


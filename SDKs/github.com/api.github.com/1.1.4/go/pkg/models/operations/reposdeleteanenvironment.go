package operations



type ReposDeleteAnEnvironmentPathParams struct {
    EnvironmentName string `pathParam:"style=simple,explode=false,name=environment_name"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposDeleteAnEnvironmentRequest struct {
    PathParams ReposDeleteAnEnvironmentPathParams 
    
}

type ReposDeleteAnEnvironmentResponse struct {
    ContentType string 
    StatusCode int64 
    
}


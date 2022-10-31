package operations



type DeleteProjectsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteProjectsIDRequest struct {
    PathParams DeleteProjectsIDPathParams 
    
}

type DeleteProjectsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}


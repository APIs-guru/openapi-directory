package operations



type MovieSearchReadPathParams struct {
    MovieTitle string `pathParam:"style=simple,explode=false,name=movie_title"`
    
}

type MovieSearchReadRequest struct {
    PathParams MovieSearchReadPathParams 
    
}

type MovieSearchReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}


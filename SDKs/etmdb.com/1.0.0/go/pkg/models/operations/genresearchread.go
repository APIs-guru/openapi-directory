package operations



type GenreSearchReadPathParams struct {
    MovieTitle string `pathParam:"style=simple,explode=false,name=movie_title"`
    
}

type GenreSearchReadRequest struct {
    PathParams GenreSearchReadPathParams 
    
}

type GenreSearchReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}


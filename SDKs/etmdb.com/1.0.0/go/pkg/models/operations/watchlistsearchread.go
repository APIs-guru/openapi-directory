package operations



type WatchlistSearchReadPathParams struct {
    MovieTitle string `pathParam:"style=simple,explode=false,name=movie_title"`
    
}

type WatchlistSearchReadRequest struct {
    PathParams WatchlistSearchReadPathParams 
    
}

type WatchlistSearchReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}


package operations



type GenreSearchallReadPathParams struct {
    MovieGenreType string `pathParam:"style=simple,explode=false,name=movie_genre_type"`
    
}

type GenreSearchallReadRequest struct {
    PathParams GenreSearchallReadPathParams 
    
}

type GenreSearchallReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}


package operations



type FilmographySearchallReadPathParams struct {
    Param string `pathParam:"style=simple,explode=false,name=param"`
    
}

type FilmographySearchallReadRequest struct {
    PathParams FilmographySearchallReadPathParams 
    
}

type FilmographySearchallReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}


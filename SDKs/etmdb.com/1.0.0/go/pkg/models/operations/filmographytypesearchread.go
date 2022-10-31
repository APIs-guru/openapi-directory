package operations



type FilmographyTypeSearchReadPathParams struct {
    FilmographyDescription string `pathParam:"style=simple,explode=false,name=filmography_description"`
    
}

type FilmographyTypeSearchReadRequest struct {
    PathParams FilmographyTypeSearchReadPathParams 
    
}

type FilmographyTypeSearchReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}


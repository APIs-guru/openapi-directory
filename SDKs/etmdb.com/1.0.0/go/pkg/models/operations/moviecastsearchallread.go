package operations



type MovieCastSearchallReadPathParams struct {
    Param string `pathParam:"style=simple,explode=false,name=param"`
    
}

type MovieCastSearchallReadRequest struct {
    PathParams MovieCastSearchallReadPathParams 
    
}

type MovieCastSearchallReadResponse struct {
    ContentType string 
    StatusCode int64 
    
}


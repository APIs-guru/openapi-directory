package operations



type GetSessioncreatePathParams struct {
    Name string `pathParam:"style=simple,explode=false,name=name"`
    
}

type GetSessioncreateRequest struct {
    PathParams GetSessioncreatePathParams 
    
}

type GetSessioncreateResponse struct {
    ContentType string 
    StatusCode int64 
    
}


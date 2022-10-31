package operations



type GetLookupPathParams struct {
    Md5 string `pathParam:"style=simple,explode=false,name=md5"`
    
}

type GetLookupRequest struct {
    PathParams GetLookupPathParams 
    
}

type GetLookupResponse struct {
    ContentType string 
    StatusCode int64 
    
}


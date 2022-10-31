package operations



type GetRawFormatsPathParams struct {
    Pid string `pathParam:"style=simple,explode=false,name=pid"`
    
}

type GetRawFormatsRequest struct {
    PathParams GetRawFormatsPathParams 
    
}

type GetRawFormatsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Nitro *interface{} 
    
}


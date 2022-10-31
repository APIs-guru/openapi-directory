package operations



type GetVariablesPathParams struct {
    ID string `pathParam:"style=simple,explode=false,name=id"`
    
}

type GetVariablesRequest struct {
    PathParams GetVariablesPathParams 
    
}

type GetVariablesResponse struct {
    ContentType string 
    StatusCode int64 
    
}


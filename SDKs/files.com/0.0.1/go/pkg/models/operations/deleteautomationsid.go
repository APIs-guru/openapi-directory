package operations



type DeleteAutomationsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteAutomationsIDRequest struct {
    PathParams DeleteAutomationsIDPathParams 
    
}

type DeleteAutomationsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}


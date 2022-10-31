package operations



type DeleteFileCommentsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteFileCommentsIDRequest struct {
    PathParams DeleteFileCommentsIDPathParams 
    
}

type DeleteFileCommentsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}


package operations



type DeleteFileCommentReactionsIDPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type DeleteFileCommentReactionsIDRequest struct {
    PathParams DeleteFileCommentReactionsIDPathParams 
    
}

type DeleteFileCommentReactionsIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}


package operations



type GetVideosIDCommentThreadsThreadIDPathParams struct {
    ID interface{} `pathParam:"style=simple,explode=false,name=id"`
    ThreadID int64 `pathParam:"style=simple,explode=false,name=threadId"`
    
}

type GetVideosIDCommentThreadsThreadIDRequest struct {
    PathParams GetVideosIDCommentThreadsThreadIDPathParams 
    
}

type GetVideosIDCommentThreadsThreadIDResponse struct {
    ContentType string 
    StatusCode int64 
    VideoCommentThreadTree *interface{} 
    
}


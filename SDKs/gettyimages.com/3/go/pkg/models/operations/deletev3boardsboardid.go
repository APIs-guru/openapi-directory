package operations



type DeleteV3BoardsBoardIDPathParams struct {
    BoardID string `pathParam:"style=simple,explode=false,name=board_id"`
    
}

type DeleteV3BoardsBoardIDRequest struct {
    PathParams DeleteV3BoardsBoardIDPathParams 
    
}

type DeleteV3BoardsBoardIDResponse struct {
    ContentType string 
    StatusCode int64 
    
}


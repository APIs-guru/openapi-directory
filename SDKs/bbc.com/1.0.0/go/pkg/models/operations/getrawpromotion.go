package operations



type GetRawPromotionPathParams struct {
    Pid string `pathParam:"style=simple,explode=false,name=pid"`
    
}

type GetRawPromotionRequest struct {
    PathParams GetRawPromotionPathParams 
    
}

type GetRawPromotionResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    Nitro *interface{} 
    
}


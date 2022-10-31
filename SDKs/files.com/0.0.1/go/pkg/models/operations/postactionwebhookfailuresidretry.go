package operations



type PostActionWebhookFailuresIDRetryPathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PostActionWebhookFailuresIDRetryRequest struct {
    PathParams PostActionWebhookFailuresIDRetryPathParams 
    
}

type PostActionWebhookFailuresIDRetryResponse struct {
    ContentType string 
    StatusCode int64 
    
}


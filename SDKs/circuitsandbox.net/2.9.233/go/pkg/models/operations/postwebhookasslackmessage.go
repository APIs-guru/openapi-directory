package operations



type PostWebhookAsSlackMessagePathParams struct {
    WebhookID string `pathParam:"style=simple,explode=false,name=webhookId"`
    
}

type PostWebhookAsSlackMessageRequest struct {
    PathParams PostWebhookAsSlackMessagePathParams 
    Request interface{} `request:"mediaType=application/x-www-form-urlencoded"`
    
}

type PostWebhookAsSlackMessageResponse struct {
    ContentType string 
    StatusCode int64 
    
}


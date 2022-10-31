package operations

import (
"openapi/pkg/models/shared")

type RequestTenantWebhookPathParams struct {
    WebhookID int64 `pathParam:"style=simple,explode=false,name=webhook_id"`
    
}

type RequestTenantWebhookHeaders struct {
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    XSdsServiceToken *string `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
    
}

type RequestTenantWebhookRequest struct {
    PathParams RequestTenantWebhookPathParams 
    Headers RequestTenantWebhookHeaders 
    
}

type RequestTenantWebhookResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    Webhook *shared.Webhook 
    
}


package operations

import (
"openapi/pkg/models/shared")

type RemoveTenantWebhookPathParams struct {
    WebhookID int64 `pathParam:"style=simple,explode=false,name=webhook_id"`
    
}

type RemoveTenantWebhookHeaders struct {
    XSdsServiceToken *string `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
    
}

type RemoveTenantWebhookRequest struct {
    PathParams RemoveTenantWebhookPathParams 
    Headers RemoveTenantWebhookHeaders 
    
}

type RemoveTenantWebhookResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    
}


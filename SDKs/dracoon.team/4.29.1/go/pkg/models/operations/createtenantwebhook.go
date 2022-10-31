package operations

import (
"openapi/pkg/models/shared")

type CreateTenantWebhookHeaders struct {
    XSdsDateFormat *interface{} `header:"style=simple,explode=false,name=X-Sds-Date-Format"`
    XSdsServiceToken *string `header:"style=simple,explode=false,name=X-Sds-Service-Token"`
    
}

type CreateTenantWebhookRequest struct {
    Headers CreateTenantWebhookHeaders 
    Request shared.CreateWebhookRequest `request:"mediaType=application/json"`
    
}

type CreateTenantWebhookResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    Webhook *shared.Webhook 
    
}


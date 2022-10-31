package operations

import (
"openapi/pkg/models/shared")

type GetWebhookPathParams struct {
    WebhookGid string `pathParam:"style=simple,explode=false,name=webhook_gid"`
    
}

type GetWebhookQueryParams struct {
    OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
    OptPretty *bool `queryParam:"style=form,explode=true,name=opt_pretty"`
    
}

type GetWebhookRequest struct {
    PathParams GetWebhookPathParams 
    QueryParams GetWebhookQueryParams 
    
}

type GetWebhook200ApplicationJSON struct {
    Data *shared.WebhookResponse `json:"data,omitempty"`
    
}

type GetWebhookResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    StatusCode int64 
    GetWebhook200ApplicationJSONObject *GetWebhook200ApplicationJSON 
    
}


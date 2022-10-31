package operations

import (
"openapi/pkg/models/shared")

type GetIncomingWebhookByUserPathParams struct {
    UserID string `pathParam:"style=simple,explode=false,name=userId"`
    
}

type GetIncomingWebhookByUserQueryParams struct {
    Pagesize *float64 `queryParam:"style=form,explode=true,name=pagesize"`
    Searchpointer *string `queryParam:"style=form,explode=true,name=searchpointer"`
    
}

type GetIncomingWebhookByUserSecurity struct {
    Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
    
}

type GetIncomingWebhookByUserRequest struct {
    PathParams GetIncomingWebhookByUserPathParams 
    QueryParams GetIncomingWebhookByUserQueryParams 
    Security GetIncomingWebhookByUserSecurity 
    
}

type GetIncomingWebhookByUserResponse struct {
    Body []byte 
    ContentType string 
    IncomingWebhooks []interface{} 
    StatusCode int64 
    
}


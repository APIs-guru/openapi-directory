package operations

import (
"openapi/pkg/models/shared")

type ConnectionsTokenPathParams struct {
    ServiceID string `pathParam:"style=simple,explode=false,name=service_id"`
    UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
    
}

type ConnectionsTokenHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    
}

type ConnectionsTokenSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ConnectionsTokenRequest struct {
    PathParams ConnectionsTokenPathParams 
    Headers ConnectionsTokenHeaders 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security ConnectionsTokenSecurity 
    
}

type ConnectionsTokenResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetConnectionResponse *shared.GetConnectionResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}


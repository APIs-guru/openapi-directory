package operations

import (
"openapi/pkg/models/shared")

type ConnectionSettingsUpdatePathParams struct {
    Resource string `pathParam:"style=simple,explode=false,name=resource"`
    ServiceID string `pathParam:"style=simple,explode=false,name=service_id"`
    UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
    
}

type ConnectionSettingsUpdateHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    
}

type ConnectionSettingsUpdateSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ConnectionSettingsUpdateRequest struct {
    PathParams ConnectionSettingsUpdatePathParams 
    Headers ConnectionSettingsUpdateHeaders 
    Request shared.Connection `request:"mediaType=application/json"`
    Security ConnectionSettingsUpdateSecurity 
    
}

type ConnectionSettingsUpdateResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    UpdateConnectionResponse *shared.UpdateConnectionResponse 
    
}


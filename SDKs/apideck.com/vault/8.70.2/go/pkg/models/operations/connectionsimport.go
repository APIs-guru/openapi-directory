package operations

import (
"openapi/pkg/models/shared")

type ConnectionsImportPathParams struct {
    ServiceID string `pathParam:"style=simple,explode=false,name=service_id"`
    UnifiedAPI string `pathParam:"style=simple,explode=false,name=unified_api"`
    
}

type ConnectionsImportHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    XApideckConsumerID string `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
    
}

type ConnectionsImportSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ConnectionsImportRequest struct {
    PathParams ConnectionsImportPathParams 
    Headers ConnectionsImportHeaders 
    Request shared.ConnectionImportData `request:"mediaType=application/json"`
    Security ConnectionsImportSecurity 
    
}

type ConnectionsImportResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    CreateConnectionResponse *shared.CreateConnectionResponse 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}


package operations

import (
"openapi/pkg/models/shared")

type ConnectorsAllQueryParams struct {
    Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
    Filter *shared.ConnectorsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type ConnectorsAllHeaders struct {
    XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
    
}

type ConnectorsAllSecurity struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type ConnectorsAllRequest struct {
    QueryParams ConnectorsAllQueryParams 
    Headers ConnectorsAllHeaders 
    Security ConnectorsAllSecurity 
    
}

type ConnectorsAllResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    GetConnectorsResponse *shared.GetConnectorsResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    
}


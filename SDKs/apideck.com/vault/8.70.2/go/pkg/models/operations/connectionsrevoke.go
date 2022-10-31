package operations

import (
"openapi/pkg/models/shared")

type ConnectionsRevokePathParams struct {
    ApplicationID string `pathParam:"style=simple,explode=false,name=application_id"`
    ServiceID string `pathParam:"style=simple,explode=false,name=service_id"`
    
}

type ConnectionsRevokeQueryParams struct {
    RedirectURI string `queryParam:"style=form,explode=true,name=redirect_uri"`
    State string `queryParam:"style=form,explode=true,name=state"`
    
}

type ConnectionsRevokeRequest struct {
    PathParams ConnectionsRevokePathParams 
    QueryParams ConnectionsRevokeQueryParams 
    
}

type ConnectionsRevokeResponse struct {
    BadRequestResponse *shared.BadRequestResponse 
    ContentType string 
    NotFoundResponse *shared.NotFoundResponse 
    PaymentRequiredResponse *shared.PaymentRequiredResponse 
    StatusCode int64 
    UnauthorizedResponse *shared.UnauthorizedResponse 
    UnexpectedErrorResponse *shared.UnexpectedErrorResponse 
    UnprocessableResponse *shared.UnprocessableResponse 
    
}


package operations

import (
"openapi/pkg/models/shared")

type ActionsGetAllowedActionsOrganizationPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type ActionsGetAllowedActionsOrganizationRequest struct {
    PathParams ActionsGetAllowedActionsOrganizationPathParams 
    
}

type ActionsGetAllowedActionsOrganizationResponse struct {
    ContentType string 
    StatusCode int64 
    SelectedActions *shared.SelectedActions 
    
}


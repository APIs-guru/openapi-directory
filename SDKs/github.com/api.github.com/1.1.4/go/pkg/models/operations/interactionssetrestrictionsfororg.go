package operations

import (
"openapi/pkg/models/shared")

type InteractionsSetRestrictionsForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type InteractionsSetRestrictionsForOrgRequest struct {
    PathParams InteractionsSetRestrictionsForOrgPathParams 
    Request *shared.InteractionLimit `request:"mediaType=application/json"`
    
}

type InteractionsSetRestrictionsForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    InteractionLimitResponse *shared.InteractionLimitResponse 
    ValidationError *shared.ValidationError 
    
}


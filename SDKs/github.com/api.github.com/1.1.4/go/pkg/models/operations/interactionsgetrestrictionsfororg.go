package operations

import (
"openapi/pkg/models/shared")

type InteractionsGetRestrictionsForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type InteractionsGetRestrictionsForOrgRequest struct {
    PathParams InteractionsGetRestrictionsForOrgPathParams 
    
}

type InteractionsGetRestrictionsForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    InteractionLimitResponse *shared.InteractionLimitResponse 
    
}


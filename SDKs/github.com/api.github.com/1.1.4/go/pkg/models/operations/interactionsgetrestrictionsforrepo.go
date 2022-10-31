package operations

import (
"openapi/pkg/models/shared")

type InteractionsGetRestrictionsForRepoPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type InteractionsGetRestrictionsForRepoRequest struct {
    PathParams InteractionsGetRestrictionsForRepoPathParams 
    
}

type InteractionsGetRestrictionsForRepoResponse struct {
    ContentType string 
    StatusCode int64 
    InteractionLimitResponse *shared.InteractionLimitResponse 
    
}


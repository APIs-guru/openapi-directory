package operations

import (
"openapi/pkg/models/shared")

type InteractionsSetRestrictionsForAuthenticatedUserRequest struct {
    Request *shared.InteractionLimit `request:"mediaType=application/json"`
    
}

type InteractionsSetRestrictionsForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    InteractionLimitResponse *shared.InteractionLimitResponse 
    ValidationError *shared.ValidationError 
    
}


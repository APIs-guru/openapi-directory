package operations

import (
"openapi/pkg/models/shared")

type RequestSubscriptionScopesResponse struct {
    ContentType string 
    ErrorResponse *shared.ErrorResponse 
    NotificationScopeList *shared.NotificationScopeList 
    StatusCode int64 
    
}


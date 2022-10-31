package operations

import (
"openapi/pkg/models/shared")

type BillingGetSharedStorageBillingUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type BillingGetSharedStorageBillingUserRequest struct {
    PathParams BillingGetSharedStorageBillingUserPathParams 
    
}

type BillingGetSharedStorageBillingUserResponse struct {
    ContentType string 
    StatusCode int64 
    CombinedBillingUsage *shared.CombinedBillingUsage 
    
}


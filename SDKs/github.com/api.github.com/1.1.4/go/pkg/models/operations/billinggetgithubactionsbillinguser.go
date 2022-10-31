package operations

import (
"openapi/pkg/models/shared")

type BillingGetGithubActionsBillingUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type BillingGetGithubActionsBillingUserRequest struct {
    PathParams BillingGetGithubActionsBillingUserPathParams 
    
}

type BillingGetGithubActionsBillingUserResponse struct {
    ContentType string 
    StatusCode int64 
    ActionsBillingUsage *shared.ActionsBillingUsage 
    
}


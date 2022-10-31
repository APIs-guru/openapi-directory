package operations

import (
"openapi/pkg/models/shared")

type BillingGetGithubActionsBillingGhePathParams struct {
    Enterprise string `pathParam:"style=simple,explode=false,name=enterprise"`
    
}

type BillingGetGithubActionsBillingGheRequest struct {
    PathParams BillingGetGithubActionsBillingGhePathParams 
    
}

type BillingGetGithubActionsBillingGheResponse struct {
    ContentType string 
    StatusCode int64 
    ActionsBillingUsage *shared.ActionsBillingUsage 
    
}


package operations

import (
"openapi/pkg/models/shared")

type BillingGetGithubActionsBillingOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type BillingGetGithubActionsBillingOrgRequest struct {
    PathParams BillingGetGithubActionsBillingOrgPathParams 
    
}

type BillingGetGithubActionsBillingOrgResponse struct {
    ContentType string 
    StatusCode int64 
    ActionsBillingUsage *shared.ActionsBillingUsage 
    
}


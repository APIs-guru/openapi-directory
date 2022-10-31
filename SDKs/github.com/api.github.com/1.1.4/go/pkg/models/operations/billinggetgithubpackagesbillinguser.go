package operations

import (
"openapi/pkg/models/shared")

type BillingGetGithubPackagesBillingUserPathParams struct {
    Username string `pathParam:"style=simple,explode=false,name=username"`
    
}

type BillingGetGithubPackagesBillingUserRequest struct {
    PathParams BillingGetGithubPackagesBillingUserPathParams 
    
}

type BillingGetGithubPackagesBillingUserResponse struct {
    ContentType string 
    StatusCode int64 
    PackagesBillingUsage *shared.PackagesBillingUsage 
    
}


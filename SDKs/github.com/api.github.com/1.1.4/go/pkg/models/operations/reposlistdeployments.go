package operations

import (
"openapi/pkg/models/shared")

type ReposListDeploymentsPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposListDeploymentsQueryParams struct {
    Environment *string `queryParam:"style=form,explode=true,name=environment"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    Ref *string `queryParam:"style=form,explode=true,name=ref"`
    Sha *string `queryParam:"style=form,explode=true,name=sha"`
    Task *string `queryParam:"style=form,explode=true,name=task"`
    
}

type ReposListDeploymentsRequest struct {
    PathParams ReposListDeploymentsPathParams 
    QueryParams ReposListDeploymentsQueryParams 
    
}

type ReposListDeploymentsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Deployments []shared.Deployment 
    
}


package operations

import (
"openapi/pkg/models/shared")

type ReposListDeploymentStatusesPathParams struct {
    DeploymentID int64 `pathParam:"style=simple,explode=false,name=deployment_id"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposListDeploymentStatusesQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReposListDeploymentStatusesRequest struct {
    PathParams ReposListDeploymentStatusesPathParams 
    QueryParams ReposListDeploymentStatusesQueryParams 
    
}

type ReposListDeploymentStatusesResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    DeploymentStatuses []shared.DeploymentStatus 
    
}


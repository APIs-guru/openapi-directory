package operations

import (
"openapi/pkg/models/shared")

type ReposListDeployKeysPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposListDeployKeysQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReposListDeployKeysRequest struct {
    PathParams ReposListDeployKeysPathParams 
    QueryParams ReposListDeployKeysQueryParams 
    
}

type ReposListDeployKeysResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    DeployKeys []shared.DeployKey 
    
}


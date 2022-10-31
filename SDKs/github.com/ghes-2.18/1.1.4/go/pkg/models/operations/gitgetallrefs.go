package operations

import (
"openapi/pkg/models/shared")

type GitGetAllRefsPathParams struct {
    Namespace string `pathParam:"style=simple,explode=false,name=namespace"`
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type GitGetAllRefsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type GitGetAllRefsRequest struct {
    PathParams GitGetAllRefsPathParams 
    QueryParams GitGetAllRefsQueryParams 
    
}

type GitGetAllRefsResponse struct {
    ContentType string 
    StatusCode int64 
    GitRefs []shared.GitRef 
    
}


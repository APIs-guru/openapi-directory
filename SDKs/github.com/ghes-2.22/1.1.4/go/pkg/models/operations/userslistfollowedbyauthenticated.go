package operations

import (
"openapi/pkg/models/shared")

type UsersListFollowedByAuthenticatedQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type UsersListFollowedByAuthenticatedRequest struct {
    QueryParams UsersListFollowedByAuthenticatedQueryParams 
    
}

type UsersListFollowedByAuthenticatedResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    SimpleUsers []shared.SimpleUser 
    
}


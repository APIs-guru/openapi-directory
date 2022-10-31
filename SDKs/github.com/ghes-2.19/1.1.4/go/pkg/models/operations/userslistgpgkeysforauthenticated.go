package operations

import (
"openapi/pkg/models/shared")

type UsersListGpgKeysForAuthenticatedQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type UsersListGpgKeysForAuthenticatedRequest struct {
    QueryParams UsersListGpgKeysForAuthenticatedQueryParams 
    
}

type UsersListGpgKeysForAuthenticatedResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    GpgKeys []shared.GpgKey 
    
}


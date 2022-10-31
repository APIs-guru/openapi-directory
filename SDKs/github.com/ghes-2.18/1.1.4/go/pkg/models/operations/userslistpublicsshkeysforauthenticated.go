package operations

import (
"openapi/pkg/models/shared")

type UsersListPublicSSHKeysForAuthenticatedQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type UsersListPublicSSHKeysForAuthenticatedRequest struct {
    QueryParams UsersListPublicSSHKeysForAuthenticatedQueryParams 
    
}

type UsersListPublicSSHKeysForAuthenticatedResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Keys []shared.Key 
    
}


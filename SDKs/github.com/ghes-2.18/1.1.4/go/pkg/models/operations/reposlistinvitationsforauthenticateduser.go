package operations

import (
"openapi/pkg/models/shared")

type ReposListInvitationsForAuthenticatedUserQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReposListInvitationsForAuthenticatedUserRequest struct {
    QueryParams ReposListInvitationsForAuthenticatedUserQueryParams 
    
}

type ReposListInvitationsForAuthenticatedUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    RepositoryInvitations []shared.RepositoryInvitation 
    
}


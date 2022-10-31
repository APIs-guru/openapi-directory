package operations

import (
"openapi/pkg/models/shared")

type ReposListInvitationsPathParams struct {
    Owner string `pathParam:"style=simple,explode=false,name=owner"`
    Repo string `pathParam:"style=simple,explode=false,name=repo"`
    
}

type ReposListInvitationsQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type ReposListInvitationsRequest struct {
    PathParams ReposListInvitationsPathParams 
    QueryParams ReposListInvitationsQueryParams 
    
}

type ReposListInvitationsResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    RepositoryInvitations []shared.RepositoryInvitation 
    
}


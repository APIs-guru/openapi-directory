package operations

import (
"openapi/pkg/models/shared")

type UsersListPublicEmailsForAuthenticatedQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type UsersListPublicEmailsForAuthenticatedRequest struct {
    QueryParams UsersListPublicEmailsForAuthenticatedQueryParams 
    
}

type UsersListPublicEmailsForAuthenticatedResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Emails []shared.Email 
    
}


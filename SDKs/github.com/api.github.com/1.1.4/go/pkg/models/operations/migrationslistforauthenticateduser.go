package operations

import (
"openapi/pkg/models/shared")

type MigrationsListForAuthenticatedUserQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type MigrationsListForAuthenticatedUserRequest struct {
    QueryParams MigrationsListForAuthenticatedUserQueryParams 
    
}

type MigrationsListForAuthenticatedUserResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Migrations []shared.Migration 
    
}


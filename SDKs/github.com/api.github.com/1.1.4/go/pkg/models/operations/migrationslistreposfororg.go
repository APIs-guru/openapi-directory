package operations

import (
"openapi/pkg/models/shared")

type MigrationsListReposForOrgPathParams struct {
    MigrationID int64 `pathParam:"style=simple,explode=false,name=migration_id"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type MigrationsListReposForOrgQueryParams struct {
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type MigrationsListReposForOrgRequest struct {
    PathParams MigrationsListReposForOrgPathParams 
    QueryParams MigrationsListReposForOrgQueryParams 
    
}

type MigrationsListReposForOrgResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    BasicError *shared.BasicError 
    MinimalRepositories []shared.MinimalRepository 
    
}


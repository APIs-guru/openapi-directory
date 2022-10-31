package operations

import (
"openapi/pkg/models/shared")

type MigrationsGetStatusForOrgPathParams struct {
    MigrationID int64 `pathParam:"style=simple,explode=false,name=migration_id"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}


type MigrationsGetStatusForOrgExcludeEnum string

const (
    MigrationsGetStatusForOrgExcludeEnumRepositories MigrationsGetStatusForOrgExcludeEnum = "repositories"
)


type MigrationsGetStatusForOrgQueryParams struct {
    Exclude []MigrationsGetStatusForOrgExcludeEnum `queryParam:"style=form,explode=true,name=exclude"`
    
}

type MigrationsGetStatusForOrgRequest struct {
    PathParams MigrationsGetStatusForOrgPathParams 
    QueryParams MigrationsGetStatusForOrgQueryParams 
    
}

type MigrationsGetStatusForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    Migration *shared.Migration 
    
}


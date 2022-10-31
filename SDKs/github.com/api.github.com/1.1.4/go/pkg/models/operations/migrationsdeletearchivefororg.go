package operations

import (
"openapi/pkg/models/shared")

type MigrationsDeleteArchiveForOrgPathParams struct {
    MigrationID int64 `pathParam:"style=simple,explode=false,name=migration_id"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type MigrationsDeleteArchiveForOrgRequest struct {
    PathParams MigrationsDeleteArchiveForOrgPathParams 
    
}

type MigrationsDeleteArchiveForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}


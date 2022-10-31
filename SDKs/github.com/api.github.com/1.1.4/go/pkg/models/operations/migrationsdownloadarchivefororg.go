package operations

import (
"openapi/pkg/models/shared")

type MigrationsDownloadArchiveForOrgPathParams struct {
    MigrationID int64 `pathParam:"style=simple,explode=false,name=migration_id"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}

type MigrationsDownloadArchiveForOrgRequest struct {
    PathParams MigrationsDownloadArchiveForOrgPathParams 
    
}

type MigrationsDownloadArchiveForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}


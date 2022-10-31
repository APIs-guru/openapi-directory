package operations

import (
"openapi/pkg/models/shared")

type MigrationsDeleteArchiveForAuthenticatedUserPathParams struct {
    MigrationID int64 `pathParam:"style=simple,explode=false,name=migration_id"`
    
}

type MigrationsDeleteArchiveForAuthenticatedUserRequest struct {
    PathParams MigrationsDeleteArchiveForAuthenticatedUserPathParams 
    
}

type MigrationsDeleteArchiveForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}


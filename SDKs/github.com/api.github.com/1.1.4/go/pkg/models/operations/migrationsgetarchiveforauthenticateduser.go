package operations

import (
"openapi/pkg/models/shared")

type MigrationsGetArchiveForAuthenticatedUserPathParams struct {
    MigrationID int64 `pathParam:"style=simple,explode=false,name=migration_id"`
    
}

type MigrationsGetArchiveForAuthenticatedUserRequest struct {
    PathParams MigrationsGetArchiveForAuthenticatedUserPathParams 
    
}

type MigrationsGetArchiveForAuthenticatedUserResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}


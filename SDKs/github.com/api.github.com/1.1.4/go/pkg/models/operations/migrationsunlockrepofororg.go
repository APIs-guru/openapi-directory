package operations

import (
"openapi/pkg/models/shared")

type MigrationsUnlockRepoForOrgPathParams struct {
    MigrationID int64 `pathParam:"style=simple,explode=false,name=migration_id"`
    Org string `pathParam:"style=simple,explode=false,name=org"`
    RepoName string `pathParam:"style=simple,explode=false,name=repo_name"`
    
}

type MigrationsUnlockRepoForOrgRequest struct {
    PathParams MigrationsUnlockRepoForOrgPathParams 
    
}

type MigrationsUnlockRepoForOrgResponse struct {
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}


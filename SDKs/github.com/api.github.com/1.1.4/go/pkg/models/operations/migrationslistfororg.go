package operations

import (
"openapi/pkg/models/shared")

type MigrationsListForOrgPathParams struct {
    Org string `pathParam:"style=simple,explode=false,name=org"`
    
}


type MigrationsListForOrgExcludeEnum string

const (
    MigrationsListForOrgExcludeEnumRepositories MigrationsListForOrgExcludeEnum = "repositories"
)


type MigrationsListForOrgQueryParams struct {
    Exclude []MigrationsListForOrgExcludeEnum `queryParam:"style=form,explode=true,name=exclude"`
    Page *int64 `queryParam:"style=form,explode=true,name=page"`
    PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
    
}

type MigrationsListForOrgRequest struct {
    PathParams MigrationsListForOrgPathParams 
    QueryParams MigrationsListForOrgQueryParams 
    
}

type MigrationsListForOrgResponse struct {
    ContentType string 
    Headers map[string][]string 
    StatusCode int64 
    Migrations []shared.Migration 
    
}


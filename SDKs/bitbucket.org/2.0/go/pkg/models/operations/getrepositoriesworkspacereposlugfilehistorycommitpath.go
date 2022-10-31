package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams struct {
    Commit string `pathParam:"style=simple,explode=false,name=commit"`
    Path string `pathParam:"style=simple,explode=false,name=path"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams struct {
    Q *string `queryParam:"style=form,explode=true,name=q"`
    Renames *string `queryParam:"style=form,explode=true,name=renames"`
    Sort *string `queryParam:"style=form,explode=true,name=sort"`
    
}

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathPathParams 
    QueryParams GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathQueryParams 
    Security GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugFilehistoryCommitPathResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedFiles *shared.PaginatedFiles 
    
}


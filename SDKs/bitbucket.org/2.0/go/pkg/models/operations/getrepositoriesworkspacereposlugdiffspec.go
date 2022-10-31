package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Spec string `pathParam:"style=simple,explode=false,name=spec"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams struct {
    Binary *bool `queryParam:"style=form,explode=true,name=binary"`
    Context *int64 `queryParam:"style=form,explode=true,name=context"`
    IgnoreWhitespace *bool `queryParam:"style=form,explode=true,name=ignore_whitespace"`
    Merge *bool `queryParam:"style=form,explode=true,name=merge"`
    Path *string `queryParam:"style=form,explode=true,name=path"`
    Renames *bool `queryParam:"style=form,explode=true,name=renames"`
    
}

type GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugDiffSpecSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugDiffSpecRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams 
    QueryParams GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams 
    Security GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugDiffSpecResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}


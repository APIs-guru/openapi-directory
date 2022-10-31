package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugSrcPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}


type GetRepositoriesWorkspaceRepoSlugSrcFormatEnum string

const (
    GetRepositoriesWorkspaceRepoSlugSrcFormatEnumMeta GetRepositoriesWorkspaceRepoSlugSrcFormatEnum = "meta"
)


type GetRepositoriesWorkspaceRepoSlugSrcQueryParams struct {
    Format *GetRepositoriesWorkspaceRepoSlugSrcFormatEnum `queryParam:"style=form,explode=true,name=format"`
    
}

type GetRepositoriesWorkspaceRepoSlugSrcSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugSrcSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugSrcSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugSrcSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugSrcSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugSrcSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugSrcSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugSrcRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugSrcPathParams 
    QueryParams GetRepositoriesWorkspaceRepoSlugSrcQueryParams 
    Security GetRepositoriesWorkspaceRepoSlugSrcSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugSrcResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    PaginatedTreeentries *shared.PaginatedTreeentries 
    
}


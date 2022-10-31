package operations

import (
"openapi/pkg/models/shared")

type PostRepositoriesWorkspaceRepoSlugIssuesExportPathParams struct {
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesExportSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesExportSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesExportSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesExportSecurity struct {
    Option1 *PostRepositoriesWorkspaceRepoSlugIssuesExportSecurityOption1 `security:"option"`
    Option2 *PostRepositoriesWorkspaceRepoSlugIssuesExportSecurityOption2 `security:"option"`
    Option3 *PostRepositoriesWorkspaceRepoSlugIssuesExportSecurityOption3 `security:"option"`
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesExportRequest struct {
    PathParams PostRepositoriesWorkspaceRepoSlugIssuesExportPathParams 
    Request map[string]interface{} `request:"mediaType=application/json"`
    Security PostRepositoriesWorkspaceRepoSlugIssuesExportSecurity 
    
}

type PostRepositoriesWorkspaceRepoSlugIssuesExportResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    
}


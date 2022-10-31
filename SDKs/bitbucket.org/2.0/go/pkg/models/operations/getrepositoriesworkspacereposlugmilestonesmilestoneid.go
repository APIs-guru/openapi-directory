package operations

import (
"openapi/pkg/models/shared")

type GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDPathParams struct {
    MilestoneID int64 `pathParam:"style=simple,explode=false,name=milestone_id"`
    RepoSlug string `pathParam:"style=simple,explode=false,name=repo_slug"`
    Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
    
}

type GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDSecurityOption1 struct {
    Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
    
}

type GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDSecurityOption2 struct {
    Basic shared.SchemeBasic `security:"scheme,type=http,subtype=basic"`
    
}

type GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDSecurityOption3 struct {
    APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
    
}

type GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDSecurity struct {
    Option1 *GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDSecurityOption1 `security:"option"`
    Option2 *GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDSecurityOption2 `security:"option"`
    Option3 *GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDSecurityOption3 `security:"option"`
    
}

type GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDRequest struct {
    PathParams GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDPathParams 
    Security GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDSecurity 
    
}

type GetRepositoriesWorkspaceRepoSlugMilestonesMilestoneIDResponse struct {
    ContentType string 
    StatusCode int64 
    Error map[string]interface{} 
    Milestone map[string]interface{} 
    
}


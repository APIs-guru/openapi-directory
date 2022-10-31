package operations

import (
"time"
"openapi/pkg/models/shared")

type AppsCheckAuthorizationPathParams struct {
    AccessToken string `pathParam:"style=simple,explode=false,name=access_token"`
    ClientID string `pathParam:"style=simple,explode=false,name=client_id"`
    
}

type AppsCheckAuthorizationRequest struct {
    PathParams AppsCheckAuthorizationPathParams 
    
}

type AppsCheckAuthorizationAuthorizationApp struct {
    ClientID string `json:"client_id"`
    Name string `json:"name"`
    URL string `json:"url"`
    
}


type AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum string

const (
    AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnumAll AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum = "all"
AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnumSelected AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum = "selected"
)


type AppsCheckAuthorizationAuthorizationScopedInstallation struct {
    Account shared.SimpleUser `json:"account"`
    HasMultipleSingleFiles *bool `json:"has_multiple_single_files,omitempty"`
    Permissions shared.AppPermissions `json:"permissions"`
    RepositoriesURL string `json:"repositories_url"`
    RepositorySelection AppsCheckAuthorizationAuthorizationScopedInstallationRepositorySelectionEnum `json:"repository_selection"`
    SingleFileName string `json:"single_file_name"`
    SingleFilePaths []string `json:"single_file_paths,omitempty"`
    
}

type AppsCheckAuthorizationAuthorizationSimpleUser struct {
    AvatarURL string `json:"avatar_url"`
    EventsURL string `json:"events_url"`
    FollowersURL string `json:"followers_url"`
    FollowingURL string `json:"following_url"`
    GistsURL string `json:"gists_url"`
    GravatarID string `json:"gravatar_id"`
    HTMLURL string `json:"html_url"`
    ID int64 `json:"id"`
    Login string `json:"login"`
    NodeID string `json:"node_id"`
    OrganizationsURL string `json:"organizations_url"`
    ReceivedEventsURL string `json:"received_events_url"`
    ReposURL string `json:"repos_url"`
    SiteAdmin bool `json:"site_admin"`
    StarredAt *string `json:"starred_at,omitempty"`
    StarredURL string `json:"starred_url"`
    SubscriptionsURL string `json:"subscriptions_url"`
    Type string `json:"type"`
    URL string `json:"url"`
    
}

type AppsCheckAuthorizationAuthorization struct {
    App AppsCheckAuthorizationAuthorizationApp `json:"app"`
    CreatedAt time.Time `json:"created_at"`
    Fingerprint string `json:"fingerprint"`
    HashedToken string `json:"hashed_token"`
    ID int64 `json:"id"`
    Installation *AppsCheckAuthorizationAuthorizationScopedInstallation `json:"installation,omitempty"`
    Note string `json:"note"`
    NoteURL string `json:"note_url"`
    Scopes []string `json:"scopes"`
    Token string `json:"token"`
    TokenLastEight string `json:"token_last_eight"`
    UpdatedAt time.Time `json:"updated_at"`
    URL string `json:"url"`
    User *AppsCheckAuthorizationAuthorizationSimpleUser `json:"user,omitempty"`
    
}

type AppsCheckAuthorizationResponse struct {
    Authorization *AppsCheckAuthorizationAuthorization 
    ContentType string 
    StatusCode int64 
    BasicError *shared.BasicError 
    
}


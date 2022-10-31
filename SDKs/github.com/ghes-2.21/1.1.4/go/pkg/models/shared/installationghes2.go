package shared

import (
"time")

type InstallationGhes2Permissions struct {
    Checks *string `json:"checks,omitempty"`
    Contents *string `json:"contents,omitempty"`
    Deployments *string `json:"deployments,omitempty"`
    Issues *string `json:"issues,omitempty"`
    Metadata *string `json:"metadata,omitempty"`
    OrganizationAdministration *string `json:"organization_administration,omitempty"`
    PullRequests *string `json:"pull_requests,omitempty"`
    Statuses *string `json:"statuses,omitempty"`
    
}


type InstallationGhes2RepositorySelectionEnum string

const (
    InstallationGhes2RepositorySelectionEnumAll InstallationGhes2RepositorySelectionEnum = "all"
InstallationGhes2RepositorySelectionEnumSelected InstallationGhes2RepositorySelectionEnum = "selected"
)


type InstallationGhes2SimpleUser struct {
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

type InstallationGhes2 struct {
    AccessTokensURL string `json:"access_tokens_url"`
    Account interface{} `json:"account"`
    AppID int64 `json:"app_id"`
    AppSlug string `json:"app_slug"`
    ContactEmail *string `json:"contact_email,omitempty"`
    CreatedAt time.Time `json:"created_at"`
    Events []string `json:"events"`
    HTMLURL string `json:"html_url"`
    ID int64 `json:"id"`
    Permissions InstallationGhes2Permissions `json:"permissions"`
    RepositoriesURL string `json:"repositories_url"`
    RepositorySelection InstallationGhes2RepositorySelectionEnum `json:"repository_selection"`
    SingleFileName string `json:"single_file_name"`
    SuspendedAt *time.Time `json:"suspended_at,omitempty"`
    SuspendedBy *InstallationGhes2SimpleUser `json:"suspended_by,omitempty"`
    TargetID int64 `json:"target_id"`
    TargetType string `json:"target_type"`
    UpdatedAt time.Time `json:"updated_at"`
    
}


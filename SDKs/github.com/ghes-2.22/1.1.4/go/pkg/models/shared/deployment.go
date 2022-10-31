package shared

import (
"time")

type DeploymentSimpleUser struct {
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

type Deployment struct {
    CreatedAt time.Time `json:"created_at"`
    Creator DeploymentSimpleUser `json:"creator"`
    Description string `json:"description"`
    Environment string `json:"environment"`
    ID int64 `json:"id"`
    NodeID string `json:"node_id"`
    OriginalEnvironment *string `json:"original_environment,omitempty"`
    Payload interface{} `json:"payload"`
    PerformedViaGithubApp map[string]interface{} `json:"performed_via_github_app,omitempty"`
    ProductionEnvironment *bool `json:"production_environment,omitempty"`
    Ref string `json:"ref"`
    RepositoryURL string `json:"repository_url"`
    Sha string `json:"sha"`
    StatusesURL string `json:"statuses_url"`
    Task string `json:"task"`
    TransientEnvironment *bool `json:"transient_environment,omitempty"`
    UpdatedAt time.Time `json:"updated_at"`
    URL string `json:"url"`
    
}


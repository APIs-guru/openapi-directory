package shared

import (
"time")

type BaseGistFiles struct {
    Filename *string `json:"filename,omitempty"`
    Language *string `json:"language,omitempty"`
    RawURL *string `json:"raw_url,omitempty"`
    Size *int64 `json:"size,omitempty"`
    Type *string `json:"type,omitempty"`
    
}

type BaseGistSimpleUser struct {
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

type BaseGist struct {
    Comments int64 `json:"comments"`
    CommentsURL string `json:"comments_url"`
    CommitsURL string `json:"commits_url"`
    CreatedAt time.Time `json:"created_at"`
    Description string `json:"description"`
    Files map[string]BaseGistFiles `json:"files"`
    Forks []interface{} `json:"forks,omitempty"`
    ForksURL string `json:"forks_url"`
    GitPullURL string `json:"git_pull_url"`
    GitPushURL string `json:"git_push_url"`
    History []interface{} `json:"history,omitempty"`
    HTMLURL string `json:"html_url"`
    ID string `json:"id"`
    NodeID string `json:"node_id"`
    Owner *BaseGistSimpleUser `json:"owner,omitempty"`
    Public bool `json:"public"`
    Truncated *bool `json:"truncated,omitempty"`
    UpdatedAt time.Time `json:"updated_at"`
    URL string `json:"url"`
    User BaseGistSimpleUser `json:"user"`
    
}


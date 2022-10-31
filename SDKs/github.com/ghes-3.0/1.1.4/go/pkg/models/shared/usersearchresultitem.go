package shared

import (
"time")

type UserSearchResultItem struct {
    AvatarURL string `json:"avatar_url"`
    Bio *string `json:"bio,omitempty"`
    Blog *string `json:"blog,omitempty"`
    Company *string `json:"company,omitempty"`
    CreatedAt *time.Time `json:"created_at,omitempty"`
    Email *string `json:"email,omitempty"`
    EventsURL string `json:"events_url"`
    Followers *int64 `json:"followers,omitempty"`
    FollowersURL string `json:"followers_url"`
    Following *int64 `json:"following,omitempty"`
    FollowingURL string `json:"following_url"`
    GistsURL string `json:"gists_url"`
    GravatarID string `json:"gravatar_id"`
    Hireable *bool `json:"hireable,omitempty"`
    HTMLURL string `json:"html_url"`
    ID int64 `json:"id"`
    Location *string `json:"location,omitempty"`
    Login string `json:"login"`
    Name *string `json:"name,omitempty"`
    NodeID string `json:"node_id"`
    OrganizationsURL string `json:"organizations_url"`
    PublicGists *int64 `json:"public_gists,omitempty"`
    PublicRepos *int64 `json:"public_repos,omitempty"`
    ReceivedEventsURL string `json:"received_events_url"`
    ReposURL string `json:"repos_url"`
    Score float64 `json:"score"`
    SiteAdmin bool `json:"site_admin"`
    StarredURL string `json:"starred_url"`
    SubscriptionsURL string `json:"subscriptions_url"`
    SuspendedAt *time.Time `json:"suspended_at,omitempty"`
    TextMatches []SearchResultTextMatches `json:"text_matches,omitempty"`
    Type string `json:"type"`
    UpdatedAt *time.Time `json:"updated_at,omitempty"`
    URL string `json:"url"`
    
}


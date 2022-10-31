package shared

import (
"time")

type RepositoryInvitationSimpleUser struct {
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


type RepositoryInvitationPermissionsEnum string

const (
    RepositoryInvitationPermissionsEnumRead RepositoryInvitationPermissionsEnum = "read"
RepositoryInvitationPermissionsEnumWrite RepositoryInvitationPermissionsEnum = "write"
RepositoryInvitationPermissionsEnumAdmin RepositoryInvitationPermissionsEnum = "admin"
)


type RepositoryInvitation struct {
    CreatedAt time.Time `json:"created_at"`
    Expired *bool `json:"expired,omitempty"`
    HTMLURL string `json:"html_url"`
    ID int64 `json:"id"`
    Invitee RepositoryInvitationSimpleUser `json:"invitee"`
    Inviter RepositoryInvitationSimpleUser `json:"inviter"`
    NodeID string `json:"node_id"`
    Permissions RepositoryInvitationPermissionsEnum `json:"permissions"`
    Repository MinimalRepository `json:"repository"`
    URL string `json:"url"`
    
}


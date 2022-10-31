package shared

import (
"time")


type ReactionContentEnum string

const (
    ReactionContentEnumPlus1 ReactionContentEnum = "+1"
ReactionContentEnumMinus1 ReactionContentEnum = "-1"
ReactionContentEnumLaugh ReactionContentEnum = "laugh"
ReactionContentEnumConfused ReactionContentEnum = "confused"
ReactionContentEnumHeart ReactionContentEnum = "heart"
ReactionContentEnumHooray ReactionContentEnum = "hooray"
ReactionContentEnumRocket ReactionContentEnum = "rocket"
ReactionContentEnumEyes ReactionContentEnum = "eyes"
)


type ReactionSimpleUser struct {
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

type Reaction struct {
    Content ReactionContentEnum `json:"content"`
    CreatedAt time.Time `json:"created_at"`
    ID int64 `json:"id"`
    NodeID string `json:"node_id"`
    User ReactionSimpleUser `json:"user"`
    
}


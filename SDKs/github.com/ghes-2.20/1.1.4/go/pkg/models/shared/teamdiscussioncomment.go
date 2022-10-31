package shared

import (
"time")

type TeamDiscussionCommentSimpleUser struct {
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

type TeamDiscussionComment struct {
    Author TeamDiscussionCommentSimpleUser `json:"author"`
    Body string `json:"body"`
    BodyHTML string `json:"body_html"`
    BodyVersion string `json:"body_version"`
    CreatedAt time.Time `json:"created_at"`
    DiscussionURL string `json:"discussion_url"`
    HTMLURL string `json:"html_url"`
    LastEditedAt time.Time `json:"last_edited_at"`
    NodeID string `json:"node_id"`
    Number int64 `json:"number"`
    Reactions *ReactionRollup `json:"reactions,omitempty"`
    UpdatedAt time.Time `json:"updated_at"`
    URL string `json:"url"`
    
}


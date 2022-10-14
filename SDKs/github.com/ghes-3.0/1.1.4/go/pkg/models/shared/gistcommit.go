package shared

import (
	"time"
)

type GistCommitChangeStatus struct {
	Additions *int64 `json:"additions,omitempty"`
	Deletions *int64 `json:"deletions,omitempty"`
	Total     *int64 `json:"total,omitempty"`
}

type GistCommitUserSimpleUser struct {
	AvatarURL         string  `json:"avatar_url"`
	EventsURL         string  `json:"events_url"`
	FollowersURL      string  `json:"followers_url"`
	FollowingURL      string  `json:"following_url"`
	GistsURL          string  `json:"gists_url"`
	GravatarID        string  `json:"gravatar_id"`
	HTMLURL           string  `json:"html_url"`
	ID                int64   `json:"id"`
	Login             string  `json:"login"`
	NodeID            string  `json:"node_id"`
	OrganizationsURL  string  `json:"organizations_url"`
	ReceivedEventsURL string  `json:"received_events_url"`
	ReposURL          string  `json:"repos_url"`
	SiteAdmin         bool    `json:"site_admin"`
	StarredAt         *string `json:"starred_at,omitempty"`
	StarredURL        string  `json:"starred_url"`
	SubscriptionsURL  string  `json:"subscriptions_url"`
	Type              string  `json:"type"`
	URL               string  `json:"url"`
}

type GistCommit struct {
	ChangeStatus GistCommitChangeStatus   `json:"change_status"`
	CommittedAt  time.Time                `json:"committed_at"`
	URL          string                   `json:"url"`
	User         GistCommitUserSimpleUser `json:"user"`
	Version      string                   `json:"version"`
}

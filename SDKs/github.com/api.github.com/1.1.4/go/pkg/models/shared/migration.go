package shared

import (
	"time"
)

type MigrationOwnerSimpleUser struct {
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
	StarredAt         *string `json:"starred_at"`
	StarredURL        string  `json:"starred_url"`
	SubscriptionsURL  string  `json:"subscriptions_url"`
	Type              string  `json:"type"`
	URL               string  `json:"url"`
}

type Migration struct {
	ArchiveURL         *string                  `json:"archive_url"`
	CreatedAt          time.Time                `json:"created_at"`
	Exclude            []interface{}            `json:"exclude"`
	ExcludeAttachments bool                     `json:"exclude_attachments"`
	GUID               string                   `json:"guid"`
	ID                 int64                    `json:"id"`
	LockRepositories   bool                     `json:"lock_repositories"`
	NodeID             string                   `json:"node_id"`
	Owner              MigrationOwnerSimpleUser `json:"owner"`
	Repositories       []Repository             `json:"repositories"`
	State              string                   `json:"state"`
	UpdatedAt          time.Time                `json:"updated_at"`
	URL                string                   `json:"url"`
}

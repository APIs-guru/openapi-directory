package shared

import (
	"time"
)

type ReleaseAssetStateEnum string

const (
	ReleaseAssetStateEnumUploaded ReleaseAssetStateEnum = "uploaded"
	ReleaseAssetStateEnumOpen     ReleaseAssetStateEnum = "open"
)

type ReleaseAssetSimpleUser struct {
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

type ReleaseAsset struct {
	BrowserDownloadURL string                 `json:"browser_download_url"`
	ContentType        string                 `json:"content_type"`
	CreatedAt          time.Time              `json:"created_at"`
	DownloadCount      int64                  `json:"download_count"`
	ID                 int64                  `json:"id"`
	Label              string                 `json:"label"`
	Name               string                 `json:"name"`
	NodeID             string                 `json:"node_id"`
	Size               int64                  `json:"size"`
	State              ReleaseAssetStateEnum  `json:"state"`
	UpdatedAt          time.Time              `json:"updated_at"`
	Uploader           ReleaseAssetSimpleUser `json:"uploader"`
	URL                string                 `json:"url"`
}

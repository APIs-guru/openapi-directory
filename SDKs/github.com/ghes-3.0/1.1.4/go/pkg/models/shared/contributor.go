package shared

type Contributor struct {
	AvatarURL         *string `json:"avatar_url,omitempty"`
	Contributions     int64   `json:"contributions"`
	Email             *string `json:"email,omitempty"`
	EventsURL         *string `json:"events_url,omitempty"`
	FollowersURL      *string `json:"followers_url,omitempty"`
	FollowingURL      *string `json:"following_url,omitempty"`
	GistsURL          *string `json:"gists_url,omitempty"`
	GravatarID        *string `json:"gravatar_id,omitempty"`
	HTMLURL           *string `json:"html_url,omitempty"`
	ID                *int64  `json:"id,omitempty"`
	Login             *string `json:"login,omitempty"`
	Name              *string `json:"name,omitempty"`
	NodeID            *string `json:"node_id,omitempty"`
	OrganizationsURL  *string `json:"organizations_url,omitempty"`
	ReceivedEventsURL *string `json:"received_events_url,omitempty"`
	ReposURL          *string `json:"repos_url,omitempty"`
	SiteAdmin         *bool   `json:"site_admin,omitempty"`
	StarredURL        *string `json:"starred_url,omitempty"`
	SubscriptionsURL  *string `json:"subscriptions_url,omitempty"`
	Type              string  `json:"type"`
	URL               *string `json:"url,omitempty"`
}

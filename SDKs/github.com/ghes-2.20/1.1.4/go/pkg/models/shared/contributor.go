package shared

type Contributor struct {
	AvatarURL         *string `json:"avatar_url"`
	Contributions     int64   `json:"contributions"`
	Email             *string `json:"email"`
	EventsURL         *string `json:"events_url"`
	FollowersURL      *string `json:"followers_url"`
	FollowingURL      *string `json:"following_url"`
	GistsURL          *string `json:"gists_url"`
	GravatarID        *string `json:"gravatar_id"`
	HTMLURL           *string `json:"html_url"`
	ID                *int64  `json:"id"`
	Login             *string `json:"login"`
	Name              *string `json:"name"`
	NodeID            *string `json:"node_id"`
	OrganizationsURL  *string `json:"organizations_url"`
	ReceivedEventsURL *string `json:"received_events_url"`
	ReposURL          *string `json:"repos_url"`
	SiteAdmin         *bool   `json:"site_admin"`
	StarredURL        *string `json:"starred_url"`
	SubscriptionsURL  *string `json:"subscriptions_url"`
	Type              string  `json:"type"`
	URL               *string `json:"url"`
}

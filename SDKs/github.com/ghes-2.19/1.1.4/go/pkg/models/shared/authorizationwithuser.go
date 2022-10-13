package shared

type AuthorizationWithUserApp struct {
	ClientID *string `json:"client_id"`
	Name     *string `json:"name"`
	URL      *string `json:"url"`
}

type AuthorizationWithUserUser struct {
	AvatarURL         *string `json:"avatar_url"`
	EventsURL         *string `json:"events_url"`
	FollowersURL      *string `json:"followers_url"`
	FollowingURL      *string `json:"following_url"`
	GistsURL          *string `json:"gists_url"`
	GravatarID        *string `json:"gravatar_id"`
	HTMLURL           *string `json:"html_url"`
	ID                *int64  `json:"id"`
	Login             *string `json:"login"`
	NodeID            *string `json:"node_id"`
	OrganizationsURL  *string `json:"organizations_url"`
	ReceivedEventsURL *string `json:"received_events_url"`
	ReposURL          *string `json:"repos_url"`
	SiteAdmin         *bool   `json:"site_admin"`
	StarredURL        *string `json:"starred_url"`
	SubscriptionsURL  *string `json:"subscriptions_url"`
	Type              *string `json:"type"`
	URL               *string `json:"url"`
}

type AuthorizationWithUser struct {
	App            *AuthorizationWithUserApp  `json:"app"`
	CreatedAt      *string                    `json:"created_at"`
	Fingerprint    *string                    `json:"fingerprint"`
	HashedToken    *string                    `json:"hashed_token"`
	ID             *int64                     `json:"id"`
	Note           *string                    `json:"note"`
	NoteURL        *string                    `json:"note_url"`
	Scopes         []string                   `json:"scopes"`
	Token          *string                    `json:"token"`
	TokenLastEight *string                    `json:"token_last_eight"`
	UpdatedAt      *string                    `json:"updated_at"`
	URL            *string                    `json:"url"`
	User           *AuthorizationWithUserUser `json:"user"`
}

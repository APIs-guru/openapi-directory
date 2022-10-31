package shared

type AuthorizationWithUserApp struct {
	ClientID *string `json:"client_id,omitempty"`
	Name     *string `json:"name,omitempty"`
	URL      *string `json:"url,omitempty"`
}

type AuthorizationWithUserUser struct {
	AvatarURL         *string `json:"avatar_url,omitempty"`
	EventsURL         *string `json:"events_url,omitempty"`
	FollowersURL      *string `json:"followers_url,omitempty"`
	FollowingURL      *string `json:"following_url,omitempty"`
	GistsURL          *string `json:"gists_url,omitempty"`
	GravatarID        *string `json:"gravatar_id,omitempty"`
	HTMLURL           *string `json:"html_url,omitempty"`
	ID                *int64  `json:"id,omitempty"`
	Login             *string `json:"login,omitempty"`
	NodeID            *string `json:"node_id,omitempty"`
	OrganizationsURL  *string `json:"organizations_url,omitempty"`
	ReceivedEventsURL *string `json:"received_events_url,omitempty"`
	ReposURL          *string `json:"repos_url,omitempty"`
	SiteAdmin         *bool   `json:"site_admin,omitempty"`
	StarredURL        *string `json:"starred_url,omitempty"`
	SubscriptionsURL  *string `json:"subscriptions_url,omitempty"`
	Type              *string `json:"type,omitempty"`
	URL               *string `json:"url,omitempty"`
}

type AuthorizationWithUser struct {
	App            *AuthorizationWithUserApp  `json:"app,omitempty"`
	CreatedAt      *string                    `json:"created_at,omitempty"`
	Fingerprint    *string                    `json:"fingerprint,omitempty"`
	HashedToken    *string                    `json:"hashed_token,omitempty"`
	ID             *int64                     `json:"id,omitempty"`
	Note           *string                    `json:"note,omitempty"`
	NoteURL        *string                    `json:"note_url,omitempty"`
	Scopes         []string                   `json:"scopes,omitempty"`
	Token          *string                    `json:"token,omitempty"`
	TokenLastEight *string                    `json:"token_last_eight,omitempty"`
	UpdatedAt      *string                    `json:"updated_at,omitempty"`
	URL            *string                    `json:"url,omitempty"`
	User           *AuthorizationWithUserUser `json:"user,omitempty"`
}

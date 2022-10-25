package shared

import (
	"time"
)

type CommitCommentSimpleUser struct {
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

type CommitComment struct {
	AuthorAssociation AuthorAssociationEnum   `json:"author_association"`
	Body              string                  `json:"body"`
	CommitID          string                  `json:"commit_id"`
	CreatedAt         time.Time               `json:"created_at"`
	HTMLURL           string                  `json:"html_url"`
	ID                int64                   `json:"id"`
	Line              int64                   `json:"line"`
	NodeID            string                  `json:"node_id"`
	Path              string                  `json:"path"`
	Position          int64                   `json:"position"`
	Reactions         *ReactionRollup         `json:"reactions,omitempty"`
	UpdatedAt         time.Time               `json:"updated_at"`
	URL               string                  `json:"url"`
	User              CommitCommentSimpleUser `json:"user"`
}

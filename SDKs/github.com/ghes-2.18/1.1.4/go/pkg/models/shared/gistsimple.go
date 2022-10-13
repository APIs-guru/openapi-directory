package shared

import (
	"time"
)

type GistSimpleFiles struct {
	Content   *string `json:"content"`
	Filename  *string `json:"filename"`
	Language  *string `json:"language"`
	RawURL    *string `json:"raw_url"`
	Size      *int64  `json:"size"`
	Truncated *bool   `json:"truncated"`
	Type      *string `json:"type"`
}

type GistSimpleForkOfFiles struct {
	Filename *string `json:"filename"`
	Language *string `json:"language"`
	RawURL   *string `json:"raw_url"`
	Size     *int64  `json:"size"`
	Type     *string `json:"type"`
}

type GistSimpleForkOfOwnerSimpleUser struct {
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

type GistSimpleForkOfUserSimpleUser struct {
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

type GistSimpleForkOfGist struct {
	Comments    int64                            `json:"comments"`
	CommentsURL string                           `json:"comments_url"`
	CommitsURL  string                           `json:"commits_url"`
	CreatedAt   time.Time                        `json:"created_at"`
	Description string                           `json:"description"`
	Files       map[string]GistSimpleForkOfFiles `json:"files"`
	Forks       []interface{}                    `json:"forks"`
	ForksURL    string                           `json:"forks_url"`
	GitPullURL  string                           `json:"git_pull_url"`
	GitPushURL  string                           `json:"git_push_url"`
	History     []interface{}                    `json:"history"`
	HTMLURL     string                           `json:"html_url"`
	ID          string                           `json:"id"`
	NodeID      string                           `json:"node_id"`
	Owner       *GistSimpleForkOfOwnerSimpleUser `json:"owner"`
	Public      bool                             `json:"public"`
	Truncated   *bool                            `json:"truncated"`
	UpdatedAt   time.Time                        `json:"updated_at"`
	URL         string                           `json:"url"`
	User        GistSimpleForkOfUserSimpleUser   `json:"user"`
}

type GistSimple struct {
	Comments    *int64                     `json:"comments"`
	CommentsURL *string                    `json:"comments_url"`
	CommitsURL  *string                    `json:"commits_url"`
	CreatedAt   *string                    `json:"created_at"`
	Description *string                    `json:"description"`
	Files       map[string]GistSimpleFiles `json:"files"`
	ForkOf      *GistSimpleForkOfGist      `json:"fork_of"`
	Forks       []map[string]interface{}   `json:"forks"`
	ForksURL    *string                    `json:"forks_url"`
	GitPullURL  *string                    `json:"git_pull_url"`
	GitPushURL  *string                    `json:"git_push_url"`
	History     []map[string]interface{}   `json:"history"`
	HTMLURL     *string                    `json:"html_url"`
	ID          *string                    `json:"id"`
	NodeID      *string                    `json:"node_id"`
	Owner       *SimpleUser                `json:"owner"`
	Public      *bool                      `json:"public"`
	Truncated   *bool                      `json:"truncated"`
	UpdatedAt   *string                    `json:"updated_at"`
	URL         *string                    `json:"url"`
	User        *string                    `json:"user"`
}

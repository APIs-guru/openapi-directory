package shared

import (
	"time"
)

type GistSimpleFiles struct {
	Content   *string `json:"content,omitempty"`
	Filename  *string `json:"filename,omitempty"`
	Language  *string `json:"language,omitempty"`
	RawURL    *string `json:"raw_url,omitempty"`
	Size      *int64  `json:"size,omitempty"`
	Truncated *bool   `json:"truncated,omitempty"`
	Type      *string `json:"type,omitempty"`
}

type GistSimpleGistFiles struct {
	Filename *string `json:"filename,omitempty"`
	Language *string `json:"language,omitempty"`
	RawURL   *string `json:"raw_url,omitempty"`
	Size     *int64  `json:"size,omitempty"`
	Type     *string `json:"type,omitempty"`
}

type GistSimpleGistSimpleUser struct {
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

type GistSimpleGist struct {
	Comments    int64                          `json:"comments"`
	CommentsURL string                         `json:"comments_url"`
	CommitsURL  string                         `json:"commits_url"`
	CreatedAt   time.Time                      `json:"created_at"`
	Description string                         `json:"description"`
	Files       map[string]GistSimpleGistFiles `json:"files"`
	Forks       []interface{}                  `json:"forks,omitempty"`
	ForksURL    string                         `json:"forks_url"`
	GitPullURL  string                         `json:"git_pull_url"`
	GitPushURL  string                         `json:"git_push_url"`
	History     []interface{}                  `json:"history,omitempty"`
	HTMLURL     string                         `json:"html_url"`
	ID          string                         `json:"id"`
	NodeID      string                         `json:"node_id"`
	Owner       *GistSimpleGistSimpleUser      `json:"owner,omitempty"`
	Public      bool                           `json:"public"`
	Truncated   *bool                          `json:"truncated,omitempty"`
	UpdatedAt   time.Time                      `json:"updated_at"`
	URL         string                         `json:"url"`
	User        GistSimpleGistSimpleUser       `json:"user"`
}

type GistSimple struct {
	Comments    *int64                     `json:"comments,omitempty"`
	CommentsURL *string                    `json:"comments_url,omitempty"`
	CommitsURL  *string                    `json:"commits_url,omitempty"`
	CreatedAt   *string                    `json:"created_at,omitempty"`
	Description *string                    `json:"description,omitempty"`
	Files       map[string]GistSimpleFiles `json:"files,omitempty"`
	ForkOf      *GistSimpleGist            `json:"fork_of,omitempty"`
	Forks       []map[string]interface{}   `json:"forks,omitempty"`
	ForksURL    *string                    `json:"forks_url,omitempty"`
	GitPullURL  *string                    `json:"git_pull_url,omitempty"`
	GitPushURL  *string                    `json:"git_push_url,omitempty"`
	History     []map[string]interface{}   `json:"history,omitempty"`
	HTMLURL     *string                    `json:"html_url,omitempty"`
	ID          *string                    `json:"id,omitempty"`
	NodeID      *string                    `json:"node_id,omitempty"`
	Owner       *SimpleUser                `json:"owner,omitempty"`
	Public      *bool                      `json:"public,omitempty"`
	Truncated   *bool                      `json:"truncated,omitempty"`
	UpdatedAt   *string                    `json:"updated_at,omitempty"`
	URL         *string                    `json:"url,omitempty"`
	User        *string                    `json:"user,omitempty"`
}

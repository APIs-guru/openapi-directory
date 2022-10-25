package shared

import (
	"time"
)

type MilestoneSimpleUser struct {
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

type MilestoneStateEnum string

const (
	MilestoneStateEnumOpen   MilestoneStateEnum = "open"
	MilestoneStateEnumClosed MilestoneStateEnum = "closed"
)

type Milestone struct {
	ClosedAt     time.Time           `json:"closed_at"`
	ClosedIssues int64               `json:"closed_issues"`
	CreatedAt    time.Time           `json:"created_at"`
	Creator      MilestoneSimpleUser `json:"creator"`
	Description  string              `json:"description"`
	DueOn        time.Time           `json:"due_on"`
	HTMLURL      string              `json:"html_url"`
	ID           int64               `json:"id"`
	LabelsURL    string              `json:"labels_url"`
	NodeID       string              `json:"node_id"`
	Number       int64               `json:"number"`
	OpenIssues   int64               `json:"open_issues"`
	State        MilestoneStateEnum  `json:"state"`
	Title        string              `json:"title"`
	UpdatedAt    time.Time           `json:"updated_at"`
	URL          string              `json:"url"`
}

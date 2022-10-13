package shared

import (
	"time"
)

type IssueAssigneeSimpleUser struct {
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

type IssueClosedBySimpleUser struct {
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

type IssueLabels2 struct {
	Color       *string `json:"color"`
	Default     *bool   `json:"default"`
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Name        *string `json:"name"`
	NodeID      *string `json:"node_id"`
	URL         *string `json:"url"`
}

type IssueMilestoneCreatorSimpleUser struct {
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

type IssueMilestoneStateEnum string

const (
	IssueMilestoneStateEnumOpen   IssueMilestoneStateEnum = "open"
	IssueMilestoneStateEnumClosed IssueMilestoneStateEnum = "closed"
)

type IssueMilestoneMilestone struct {
	ClosedAt     time.Time                       `json:"closed_at"`
	ClosedIssues int64                           `json:"closed_issues"`
	CreatedAt    time.Time                       `json:"created_at"`
	Creator      IssueMilestoneCreatorSimpleUser `json:"creator"`
	Description  string                          `json:"description"`
	DueOn        time.Time                       `json:"due_on"`
	HTMLURL      string                          `json:"html_url"`
	ID           int64                           `json:"id"`
	LabelsURL    string                          `json:"labels_url"`
	NodeID       string                          `json:"node_id"`
	Number       int64                           `json:"number"`
	OpenIssues   int64                           `json:"open_issues"`
	State        IssueMilestoneStateEnum         `json:"state"`
	Title        string                          `json:"title"`
	UpdatedAt    time.Time                       `json:"updated_at"`
	URL          string                          `json:"url"`
}

type IssuePullRequest struct {
	DiffURL  string     `json:"diff_url"`
	HTMLURL  string     `json:"html_url"`
	MergedAt *time.Time `json:"merged_at"`
	PatchURL string     `json:"patch_url"`
	URL      string     `json:"url"`
}

type IssueUserSimpleUser struct {
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

type Issue struct {
	ActiveLockReason      *string                  `json:"active_lock_reason"`
	Assignee              IssueAssigneeSimpleUser  `json:"assignee"`
	Assignees             []SimpleUser             `json:"assignees"`
	AuthorAssociation     AuthorAssociationEnum    `json:"author_association"`
	Body                  *string                  `json:"body"`
	BodyHTML              *string                  `json:"body_html"`
	BodyText              *string                  `json:"body_text"`
	ClosedAt              time.Time                `json:"closed_at"`
	ClosedBy              *IssueClosedBySimpleUser `json:"closed_by"`
	Comments              int64                    `json:"comments"`
	CommentsURL           string                   `json:"comments_url"`
	CreatedAt             time.Time                `json:"created_at"`
	EventsURL             string                   `json:"events_url"`
	HTMLURL               string                   `json:"html_url"`
	ID                    int64                    `json:"id"`
	Labels                []interface{}            `json:"labels"`
	LabelsURL             string                   `json:"labels_url"`
	Locked                bool                     `json:"locked"`
	Milestone             IssueMilestoneMilestone  `json:"milestone"`
	NodeID                string                   `json:"node_id"`
	Number                int64                    `json:"number"`
	PerformedViaGithubApp map[string]interface{}   `json:"performed_via_github_app"`
	PullRequest           *IssuePullRequest        `json:"pull_request"`
	Reactions             *ReactionRollup          `json:"reactions"`
	Repository            *Repository              `json:"repository"`
	RepositoryURL         string                   `json:"repository_url"`
	State                 string                   `json:"state"`
	TimelineURL           *string                  `json:"timeline_url"`
	Title                 string                   `json:"title"`
	UpdatedAt             time.Time                `json:"updated_at"`
	URL                   string                   `json:"url"`
	User                  IssueUserSimpleUser      `json:"user"`
}

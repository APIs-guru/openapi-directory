package shared

import (
	"time"
)

type IssueSearchResultItemAssigneeSimpleUser struct {
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

type IssueSearchResultItemLabels struct {
	Color       *string `json:"color"`
	Default     *bool   `json:"default"`
	Description *string `json:"description"`
	ID          *int64  `json:"id"`
	Name        *string `json:"name"`
	NodeID      *string `json:"node_id"`
	URL         *string `json:"url"`
}

type IssueSearchResultItemMilestoneCreatorSimpleUser struct {
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

type IssueSearchResultItemMilestoneStateEnum string

const (
	IssueSearchResultItemMilestoneStateEnumOpen   IssueSearchResultItemMilestoneStateEnum = "open"
	IssueSearchResultItemMilestoneStateEnumClosed IssueSearchResultItemMilestoneStateEnum = "closed"
)

type IssueSearchResultItemMilestoneMilestone struct {
	ClosedAt     time.Time                                       `json:"closed_at"`
	ClosedIssues int64                                           `json:"closed_issues"`
	CreatedAt    time.Time                                       `json:"created_at"`
	Creator      IssueSearchResultItemMilestoneCreatorSimpleUser `json:"creator"`
	Description  string                                          `json:"description"`
	DueOn        time.Time                                       `json:"due_on"`
	HTMLURL      string                                          `json:"html_url"`
	ID           int64                                           `json:"id"`
	LabelsURL    string                                          `json:"labels_url"`
	NodeID       string                                          `json:"node_id"`
	Number       int64                                           `json:"number"`
	OpenIssues   int64                                           `json:"open_issues"`
	State        IssueSearchResultItemMilestoneStateEnum         `json:"state"`
	Title        string                                          `json:"title"`
	UpdatedAt    time.Time                                       `json:"updated_at"`
	URL          string                                          `json:"url"`
}

type IssueSearchResultItemPullRequest struct {
	DiffURL  string     `json:"diff_url"`
	HTMLURL  string     `json:"html_url"`
	MergedAt *time.Time `json:"merged_at"`
	PatchURL string     `json:"patch_url"`
	URL      string     `json:"url"`
}

type IssueSearchResultItemUserSimpleUser struct {
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

type IssueSearchResultItem struct {
	ActiveLockReason      *string                                 `json:"active_lock_reason"`
	Assignee              IssueSearchResultItemAssigneeSimpleUser `json:"assignee"`
	Assignees             []SimpleUser                            `json:"assignees"`
	AuthorAssociation     AuthorAssociationEnum                   `json:"author_association"`
	Body                  *string                                 `json:"body"`
	BodyHTML              *string                                 `json:"body_html"`
	BodyText              *string                                 `json:"body_text"`
	ClosedAt              time.Time                               `json:"closed_at"`
	Comments              int64                                   `json:"comments"`
	CommentsURL           string                                  `json:"comments_url"`
	CreatedAt             time.Time                               `json:"created_at"`
	Draft                 *bool                                   `json:"draft"`
	EventsURL             string                                  `json:"events_url"`
	HTMLURL               string                                  `json:"html_url"`
	ID                    int64                                   `json:"id"`
	Labels                []IssueSearchResultItemLabels           `json:"labels"`
	LabelsURL             string                                  `json:"labels_url"`
	Locked                bool                                    `json:"locked"`
	Milestone             IssueSearchResultItemMilestoneMilestone `json:"milestone"`
	NodeID                string                                  `json:"node_id"`
	Number                int64                                   `json:"number"`
	PerformedViaGithubApp map[string]interface{}                  `json:"performed_via_github_app"`
	PullRequest           *IssueSearchResultItemPullRequest       `json:"pull_request"`
	Repository            *Repository                             `json:"repository"`
	RepositoryURL         string                                  `json:"repository_url"`
	Score                 int64                                   `json:"score"`
	State                 string                                  `json:"state"`
	TextMatches           []SearchResultTextMatches               `json:"text_matches"`
	TimelineURL           *string                                 `json:"timeline_url"`
	Title                 string                                  `json:"title"`
	UpdatedAt             time.Time                               `json:"updated_at"`
	URL                   string                                  `json:"url"`
	User                  IssueSearchResultItemUserSimpleUser     `json:"user"`
}

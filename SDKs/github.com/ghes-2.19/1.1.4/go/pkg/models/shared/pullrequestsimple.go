package shared

import (
	"time"
)

type PullRequestSimpleLinks struct {
	Comments       Link `json:"comments"`
	Commits        Link `json:"commits"`
	HTML           Link `json:"html"`
	Issue          Link `json:"issue"`
	ReviewComment  Link `json:"review_comment"`
	ReviewComments Link `json:"review_comments"`
	Self           Link `json:"self"`
	Statuses       Link `json:"statuses"`
}

type PullRequestSimpleSimpleUser struct {
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

type PullRequestSimpleBaseSimpleUser struct {
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

type PullRequestSimpleBase struct {
	Label string                          `json:"label"`
	Ref   string                          `json:"ref"`
	Repo  Repository                      `json:"repo"`
	Sha   string                          `json:"sha"`
	User  PullRequestSimpleBaseSimpleUser `json:"user"`
}

type PullRequestSimpleHeadSimpleUser struct {
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

type PullRequestSimpleHead struct {
	Label string                          `json:"label"`
	Ref   string                          `json:"ref"`
	Repo  Repository                      `json:"repo"`
	Sha   string                          `json:"sha"`
	User  PullRequestSimpleHeadSimpleUser `json:"user"`
}

type PullRequestSimpleLabels struct {
	Color       *string `json:"color,omitempty"`
	Default     *bool   `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	NodeID      *string `json:"node_id,omitempty"`
	URL         *string `json:"url,omitempty"`
}

type PullRequestSimpleMilestoneSimpleUser struct {
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

type PullRequestSimpleMilestoneStateEnum string

const (
	PullRequestSimpleMilestoneStateEnumOpen   PullRequestSimpleMilestoneStateEnum = "open"
	PullRequestSimpleMilestoneStateEnumClosed PullRequestSimpleMilestoneStateEnum = "closed"
)

type PullRequestSimpleMilestone struct {
	ClosedAt     time.Time                            `json:"closed_at"`
	ClosedIssues int64                                `json:"closed_issues"`
	CreatedAt    time.Time                            `json:"created_at"`
	Creator      PullRequestSimpleMilestoneSimpleUser `json:"creator"`
	Description  string                               `json:"description"`
	DueOn        time.Time                            `json:"due_on"`
	HTMLURL      string                               `json:"html_url"`
	ID           int64                                `json:"id"`
	LabelsURL    string                               `json:"labels_url"`
	NodeID       string                               `json:"node_id"`
	Number       int64                                `json:"number"`
	OpenIssues   int64                                `json:"open_issues"`
	State        PullRequestSimpleMilestoneStateEnum  `json:"state"`
	Title        string                               `json:"title"`
	UpdatedAt    time.Time                            `json:"updated_at"`
	URL          string                               `json:"url"`
}

type PullRequestSimple struct {
	Links              PullRequestSimpleLinks      `json:"_links"`
	ActiveLockReason   *string                     `json:"active_lock_reason,omitempty"`
	Assignee           PullRequestSimpleSimpleUser `json:"assignee"`
	Assignees          []SimpleUser                `json:"assignees,omitempty"`
	AuthorAssociation  AuthorAssociationEnum       `json:"author_association"`
	Base               PullRequestSimpleBase       `json:"base"`
	Body               string                      `json:"body"`
	ClosedAt           time.Time                   `json:"closed_at"`
	CommentsURL        string                      `json:"comments_url"`
	CommitsURL         string                      `json:"commits_url"`
	CreatedAt          time.Time                   `json:"created_at"`
	DiffURL            string                      `json:"diff_url"`
	Draft              *bool                       `json:"draft,omitempty"`
	Head               PullRequestSimpleHead       `json:"head"`
	HTMLURL            string                      `json:"html_url"`
	ID                 int64                       `json:"id"`
	IssueURL           string                      `json:"issue_url"`
	Labels             []PullRequestSimpleLabels   `json:"labels"`
	Locked             bool                        `json:"locked"`
	MergeCommitSha     string                      `json:"merge_commit_sha"`
	MergedAt           time.Time                   `json:"merged_at"`
	Milestone          PullRequestSimpleMilestone  `json:"milestone"`
	NodeID             string                      `json:"node_id"`
	Number             int64                       `json:"number"`
	PatchURL           string                      `json:"patch_url"`
	RequestedReviewers []SimpleUser                `json:"requested_reviewers,omitempty"`
	RequestedTeams     []TeamSimple                `json:"requested_teams,omitempty"`
	ReviewCommentURL   string                      `json:"review_comment_url"`
	ReviewCommentsURL  string                      `json:"review_comments_url"`
	State              string                      `json:"state"`
	StatusesURL        string                      `json:"statuses_url"`
	Title              string                      `json:"title"`
	UpdatedAt          time.Time                   `json:"updated_at"`
	URL                string                      `json:"url"`
	User               PullRequestSimpleSimpleUser `json:"user"`
}

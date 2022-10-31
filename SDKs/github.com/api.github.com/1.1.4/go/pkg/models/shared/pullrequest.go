package shared

import (
	"time"
)

type PullRequestLinks struct {
	Comments       Link `json:"comments"`
	Commits        Link `json:"commits"`
	HTML           Link `json:"html"`
	Issue          Link `json:"issue"`
	ReviewComment  Link `json:"review_comment"`
	ReviewComments Link `json:"review_comments"`
	Self           Link `json:"self"`
	Statuses       Link `json:"statuses"`
}

type PullRequestSimpleUser struct {
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

type PullRequestBaseRepoLicenseSimple struct {
	HTMLURL *string `json:"html_url,omitempty"`
	Key     string  `json:"key"`
	Name    string  `json:"name"`
	NodeID  string  `json:"node_id"`
	SpdxID  string  `json:"spdx_id"`
	URL     string  `json:"url"`
}

type PullRequestBaseRepoOwner struct {
	AvatarURL         string `json:"avatar_url"`
	EventsURL         string `json:"events_url"`
	FollowersURL      string `json:"followers_url"`
	FollowingURL      string `json:"following_url"`
	GistsURL          string `json:"gists_url"`
	GravatarID        string `json:"gravatar_id"`
	HTMLURL           string `json:"html_url"`
	ID                int64  `json:"id"`
	Login             string `json:"login"`
	NodeID            string `json:"node_id"`
	OrganizationsURL  string `json:"organizations_url"`
	ReceivedEventsURL string `json:"received_events_url"`
	ReposURL          string `json:"repos_url"`
	SiteAdmin         bool   `json:"site_admin"`
	StarredURL        string `json:"starred_url"`
	SubscriptionsURL  string `json:"subscriptions_url"`
	Type              string `json:"type"`
	URL               string `json:"url"`
}

type PullRequestBaseRepoPermissions struct {
	Admin bool `json:"admin"`
	Pull  bool `json:"pull"`
	Push  bool `json:"push"`
}

type PullRequestBaseRepo struct {
	AllowMergeCommit *bool                            `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool                            `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool                            `json:"allow_squash_merge,omitempty"`
	ArchiveURL       string                           `json:"archive_url"`
	Archived         bool                             `json:"archived"`
	AssigneesURL     string                           `json:"assignees_url"`
	BlobsURL         string                           `json:"blobs_url"`
	BranchesURL      string                           `json:"branches_url"`
	CloneURL         string                           `json:"clone_url"`
	CollaboratorsURL string                           `json:"collaborators_url"`
	CommentsURL      string                           `json:"comments_url"`
	CommitsURL       string                           `json:"commits_url"`
	CompareURL       string                           `json:"compare_url"`
	ContentsURL      string                           `json:"contents_url"`
	ContributorsURL  string                           `json:"contributors_url"`
	CreatedAt        time.Time                        `json:"created_at"`
	DefaultBranch    string                           `json:"default_branch"`
	DeploymentsURL   string                           `json:"deployments_url"`
	Description      string                           `json:"description"`
	Disabled         bool                             `json:"disabled"`
	DownloadsURL     string                           `json:"downloads_url"`
	EventsURL        string                           `json:"events_url"`
	Fork             bool                             `json:"fork"`
	Forks            int64                            `json:"forks"`
	ForksCount       int64                            `json:"forks_count"`
	ForksURL         string                           `json:"forks_url"`
	FullName         string                           `json:"full_name"`
	GitCommitsURL    string                           `json:"git_commits_url"`
	GitRefsURL       string                           `json:"git_refs_url"`
	GitTagsURL       string                           `json:"git_tags_url"`
	GitURL           string                           `json:"git_url"`
	HasDownloads     bool                             `json:"has_downloads"`
	HasIssues        bool                             `json:"has_issues"`
	HasPages         bool                             `json:"has_pages"`
	HasProjects      bool                             `json:"has_projects"`
	HasWiki          bool                             `json:"has_wiki"`
	Homepage         string                           `json:"homepage"`
	HooksURL         string                           `json:"hooks_url"`
	HTMLURL          string                           `json:"html_url"`
	ID               int64                            `json:"id"`
	IssueCommentURL  string                           `json:"issue_comment_url"`
	IssueEventsURL   string                           `json:"issue_events_url"`
	IssuesURL        string                           `json:"issues_url"`
	KeysURL          string                           `json:"keys_url"`
	LabelsURL        string                           `json:"labels_url"`
	Language         string                           `json:"language"`
	LanguagesURL     string                           `json:"languages_url"`
	License          PullRequestBaseRepoLicenseSimple `json:"license"`
	MasterBranch     *string                          `json:"master_branch,omitempty"`
	MergesURL        string                           `json:"merges_url"`
	MilestonesURL    string                           `json:"milestones_url"`
	MirrorURL        string                           `json:"mirror_url"`
	Name             string                           `json:"name"`
	NodeID           string                           `json:"node_id"`
	NotificationsURL string                           `json:"notifications_url"`
	OpenIssues       int64                            `json:"open_issues"`
	OpenIssuesCount  int64                            `json:"open_issues_count"`
	Owner            PullRequestBaseRepoOwner         `json:"owner"`
	Permissions      *PullRequestBaseRepoPermissions  `json:"permissions,omitempty"`
	Private          bool                             `json:"private"`
	PullsURL         string                           `json:"pulls_url"`
	PushedAt         time.Time                        `json:"pushed_at"`
	ReleasesURL      string                           `json:"releases_url"`
	Size             int64                            `json:"size"`
	SSHURL           string                           `json:"ssh_url"`
	StargazersCount  int64                            `json:"stargazers_count"`
	StargazersURL    string                           `json:"stargazers_url"`
	StatusesURL      string                           `json:"statuses_url"`
	SubscribersURL   string                           `json:"subscribers_url"`
	SubscriptionURL  string                           `json:"subscription_url"`
	SvnURL           string                           `json:"svn_url"`
	TagsURL          string                           `json:"tags_url"`
	TeamsURL         string                           `json:"teams_url"`
	TempCloneToken   *string                          `json:"temp_clone_token,omitempty"`
	Topics           []string                         `json:"topics,omitempty"`
	TreesURL         string                           `json:"trees_url"`
	UpdatedAt        time.Time                        `json:"updated_at"`
	URL              string                           `json:"url"`
	Watchers         int64                            `json:"watchers"`
	WatchersCount    int64                            `json:"watchers_count"`
}

type PullRequestBaseUser struct {
	AvatarURL         string `json:"avatar_url"`
	EventsURL         string `json:"events_url"`
	FollowersURL      string `json:"followers_url"`
	FollowingURL      string `json:"following_url"`
	GistsURL          string `json:"gists_url"`
	GravatarID        string `json:"gravatar_id"`
	HTMLURL           string `json:"html_url"`
	ID                int64  `json:"id"`
	Login             string `json:"login"`
	NodeID            string `json:"node_id"`
	OrganizationsURL  string `json:"organizations_url"`
	ReceivedEventsURL string `json:"received_events_url"`
	ReposURL          string `json:"repos_url"`
	SiteAdmin         bool   `json:"site_admin"`
	StarredURL        string `json:"starred_url"`
	SubscriptionsURL  string `json:"subscriptions_url"`
	Type              string `json:"type"`
	URL               string `json:"url"`
}

type PullRequestBase struct {
	Label string              `json:"label"`
	Ref   string              `json:"ref"`
	Repo  PullRequestBaseRepo `json:"repo"`
	Sha   string              `json:"sha"`
	User  PullRequestBaseUser `json:"user"`
}

type PullRequestHeadRepoLicense struct {
	Key    string `json:"key"`
	Name   string `json:"name"`
	NodeID string `json:"node_id"`
	SpdxID string `json:"spdx_id"`
	URL    string `json:"url"`
}

type PullRequestHeadRepoOwner struct {
	AvatarURL         string `json:"avatar_url"`
	EventsURL         string `json:"events_url"`
	FollowersURL      string `json:"followers_url"`
	FollowingURL      string `json:"following_url"`
	GistsURL          string `json:"gists_url"`
	GravatarID        string `json:"gravatar_id"`
	HTMLURL           string `json:"html_url"`
	ID                int64  `json:"id"`
	Login             string `json:"login"`
	NodeID            string `json:"node_id"`
	OrganizationsURL  string `json:"organizations_url"`
	ReceivedEventsURL string `json:"received_events_url"`
	ReposURL          string `json:"repos_url"`
	SiteAdmin         bool   `json:"site_admin"`
	StarredURL        string `json:"starred_url"`
	SubscriptionsURL  string `json:"subscriptions_url"`
	Type              string `json:"type"`
	URL               string `json:"url"`
}

type PullRequestHeadRepoPermissions struct {
	Admin bool `json:"admin"`
	Pull  bool `json:"pull"`
	Push  bool `json:"push"`
}

type PullRequestHeadRepo struct {
	AllowMergeCommit *bool                           `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge *bool                           `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge *bool                           `json:"allow_squash_merge,omitempty"`
	ArchiveURL       string                          `json:"archive_url"`
	Archived         bool                            `json:"archived"`
	AssigneesURL     string                          `json:"assignees_url"`
	BlobsURL         string                          `json:"blobs_url"`
	BranchesURL      string                          `json:"branches_url"`
	CloneURL         string                          `json:"clone_url"`
	CollaboratorsURL string                          `json:"collaborators_url"`
	CommentsURL      string                          `json:"comments_url"`
	CommitsURL       string                          `json:"commits_url"`
	CompareURL       string                          `json:"compare_url"`
	ContentsURL      string                          `json:"contents_url"`
	ContributorsURL  string                          `json:"contributors_url"`
	CreatedAt        time.Time                       `json:"created_at"`
	DefaultBranch    string                          `json:"default_branch"`
	DeploymentsURL   string                          `json:"deployments_url"`
	Description      string                          `json:"description"`
	Disabled         bool                            `json:"disabled"`
	DownloadsURL     string                          `json:"downloads_url"`
	EventsURL        string                          `json:"events_url"`
	Fork             bool                            `json:"fork"`
	Forks            int64                           `json:"forks"`
	ForksCount       int64                           `json:"forks_count"`
	ForksURL         string                          `json:"forks_url"`
	FullName         string                          `json:"full_name"`
	GitCommitsURL    string                          `json:"git_commits_url"`
	GitRefsURL       string                          `json:"git_refs_url"`
	GitTagsURL       string                          `json:"git_tags_url"`
	GitURL           string                          `json:"git_url"`
	HasDownloads     bool                            `json:"has_downloads"`
	HasIssues        bool                            `json:"has_issues"`
	HasPages         bool                            `json:"has_pages"`
	HasProjects      bool                            `json:"has_projects"`
	HasWiki          bool                            `json:"has_wiki"`
	Homepage         string                          `json:"homepage"`
	HooksURL         string                          `json:"hooks_url"`
	HTMLURL          string                          `json:"html_url"`
	ID               int64                           `json:"id"`
	IssueCommentURL  string                          `json:"issue_comment_url"`
	IssueEventsURL   string                          `json:"issue_events_url"`
	IssuesURL        string                          `json:"issues_url"`
	KeysURL          string                          `json:"keys_url"`
	LabelsURL        string                          `json:"labels_url"`
	Language         string                          `json:"language"`
	LanguagesURL     string                          `json:"languages_url"`
	License          PullRequestHeadRepoLicense      `json:"license"`
	MasterBranch     *string                         `json:"master_branch,omitempty"`
	MergesURL        string                          `json:"merges_url"`
	MilestonesURL    string                          `json:"milestones_url"`
	MirrorURL        string                          `json:"mirror_url"`
	Name             string                          `json:"name"`
	NodeID           string                          `json:"node_id"`
	NotificationsURL string                          `json:"notifications_url"`
	OpenIssues       int64                           `json:"open_issues"`
	OpenIssuesCount  int64                           `json:"open_issues_count"`
	Owner            PullRequestHeadRepoOwner        `json:"owner"`
	Permissions      *PullRequestHeadRepoPermissions `json:"permissions,omitempty"`
	Private          bool                            `json:"private"`
	PullsURL         string                          `json:"pulls_url"`
	PushedAt         time.Time                       `json:"pushed_at"`
	ReleasesURL      string                          `json:"releases_url"`
	Size             int64                           `json:"size"`
	SSHURL           string                          `json:"ssh_url"`
	StargazersCount  int64                           `json:"stargazers_count"`
	StargazersURL    string                          `json:"stargazers_url"`
	StatusesURL      string                          `json:"statuses_url"`
	SubscribersURL   string                          `json:"subscribers_url"`
	SubscriptionURL  string                          `json:"subscription_url"`
	SvnURL           string                          `json:"svn_url"`
	TagsURL          string                          `json:"tags_url"`
	TeamsURL         string                          `json:"teams_url"`
	TempCloneToken   *string                         `json:"temp_clone_token,omitempty"`
	Topics           []string                        `json:"topics,omitempty"`
	TreesURL         string                          `json:"trees_url"`
	UpdatedAt        time.Time                       `json:"updated_at"`
	URL              string                          `json:"url"`
	Watchers         int64                           `json:"watchers"`
	WatchersCount    int64                           `json:"watchers_count"`
}

type PullRequestHeadUser struct {
	AvatarURL         string `json:"avatar_url"`
	EventsURL         string `json:"events_url"`
	FollowersURL      string `json:"followers_url"`
	FollowingURL      string `json:"following_url"`
	GistsURL          string `json:"gists_url"`
	GravatarID        string `json:"gravatar_id"`
	HTMLURL           string `json:"html_url"`
	ID                int64  `json:"id"`
	Login             string `json:"login"`
	NodeID            string `json:"node_id"`
	OrganizationsURL  string `json:"organizations_url"`
	ReceivedEventsURL string `json:"received_events_url"`
	ReposURL          string `json:"repos_url"`
	SiteAdmin         bool   `json:"site_admin"`
	StarredURL        string `json:"starred_url"`
	SubscriptionsURL  string `json:"subscriptions_url"`
	Type              string `json:"type"`
	URL               string `json:"url"`
}

type PullRequestHead struct {
	Label string              `json:"label"`
	Ref   string              `json:"ref"`
	Repo  PullRequestHeadRepo `json:"repo"`
	Sha   string              `json:"sha"`
	User  PullRequestHeadUser `json:"user"`
}

type PullRequestLabels struct {
	Color       *string `json:"color,omitempty"`
	Default     *bool   `json:"default,omitempty"`
	Description *string `json:"description,omitempty"`
	ID          *int64  `json:"id,omitempty"`
	Name        *string `json:"name,omitempty"`
	NodeID      *string `json:"node_id,omitempty"`
	URL         *string `json:"url,omitempty"`
}

type PullRequestMilestoneSimpleUser struct {
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

type PullRequestMilestoneStateEnum string

const (
	PullRequestMilestoneStateEnumOpen   PullRequestMilestoneStateEnum = "open"
	PullRequestMilestoneStateEnumClosed PullRequestMilestoneStateEnum = "closed"
)

type PullRequestMilestone struct {
	ClosedAt     time.Time                      `json:"closed_at"`
	ClosedIssues int64                          `json:"closed_issues"`
	CreatedAt    time.Time                      `json:"created_at"`
	Creator      PullRequestMilestoneSimpleUser `json:"creator"`
	Description  string                         `json:"description"`
	DueOn        time.Time                      `json:"due_on"`
	HTMLURL      string                         `json:"html_url"`
	ID           int64                          `json:"id"`
	LabelsURL    string                         `json:"labels_url"`
	NodeID       string                         `json:"node_id"`
	Number       int64                          `json:"number"`
	OpenIssues   int64                          `json:"open_issues"`
	State        PullRequestMilestoneStateEnum  `json:"state"`
	Title        string                         `json:"title"`
	UpdatedAt    time.Time                      `json:"updated_at"`
	URL          string                         `json:"url"`
}

type PullRequestStateEnum string

const (
	PullRequestStateEnumOpen   PullRequestStateEnum = "open"
	PullRequestStateEnumClosed PullRequestStateEnum = "closed"
)

type PullRequest struct {
	Links               PullRequestLinks      `json:"_links"`
	ActiveLockReason    *string               `json:"active_lock_reason,omitempty"`
	Additions           int64                 `json:"additions"`
	Assignee            PullRequestSimpleUser `json:"assignee"`
	Assignees           []SimpleUser          `json:"assignees,omitempty"`
	AuthorAssociation   AuthorAssociationEnum `json:"author_association"`
	AutoMerge           AutoMerge             `json:"auto_merge"`
	Base                PullRequestBase       `json:"base"`
	Body                string                `json:"body"`
	ChangedFiles        int64                 `json:"changed_files"`
	ClosedAt            time.Time             `json:"closed_at"`
	Comments            int64                 `json:"comments"`
	CommentsURL         string                `json:"comments_url"`
	Commits             int64                 `json:"commits"`
	CommitsURL          string                `json:"commits_url"`
	CreatedAt           time.Time             `json:"created_at"`
	Deletions           int64                 `json:"deletions"`
	DiffURL             string                `json:"diff_url"`
	Draft               *bool                 `json:"draft,omitempty"`
	Head                PullRequestHead       `json:"head"`
	HTMLURL             string                `json:"html_url"`
	ID                  int64                 `json:"id"`
	IssueURL            string                `json:"issue_url"`
	Labels              []PullRequestLabels   `json:"labels"`
	Locked              bool                  `json:"locked"`
	MaintainerCanModify bool                  `json:"maintainer_can_modify"`
	MergeCommitSha      string                `json:"merge_commit_sha"`
	Mergeable           bool                  `json:"mergeable"`
	MergeableState      string                `json:"mergeable_state"`
	Merged              bool                  `json:"merged"`
	MergedAt            time.Time             `json:"merged_at"`
	MergedBy            PullRequestSimpleUser `json:"merged_by"`
	Milestone           PullRequestMilestone  `json:"milestone"`
	NodeID              string                `json:"node_id"`
	Number              int64                 `json:"number"`
	PatchURL            string                `json:"patch_url"`
	Rebaseable          *bool                 `json:"rebaseable,omitempty"`
	RequestedReviewers  []SimpleUser          `json:"requested_reviewers,omitempty"`
	RequestedTeams      []TeamSimple          `json:"requested_teams,omitempty"`
	ReviewCommentURL    string                `json:"review_comment_url"`
	ReviewComments      int64                 `json:"review_comments"`
	ReviewCommentsURL   string                `json:"review_comments_url"`
	State               PullRequestStateEnum  `json:"state"`
	StatusesURL         string                `json:"statuses_url"`
	Title               string                `json:"title"`
	UpdatedAt           time.Time             `json:"updated_at"`
	URL                 string                `json:"url"`
	User                PullRequestSimpleUser `json:"user"`
}

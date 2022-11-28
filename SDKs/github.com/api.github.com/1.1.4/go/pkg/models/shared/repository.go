package shared

import (
	"time"
)

type RepositoryLicenseSimple struct {
	HTMLURL *string `json:"html_url,omitempty"`
	Key     string  `json:"key"`
	Name    string  `json:"name"`
	NodeID  string  `json:"node_id"`
	SpdxID  string  `json:"spdx_id"`
	URL     string  `json:"url"`
}

type RepositorySimpleUser struct {
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

type RepositoryPermissions struct {
	Admin    bool  `json:"admin"`
	Maintain *bool `json:"maintain,omitempty"`
	Pull     bool  `json:"pull"`
	Push     bool  `json:"push"`
	Triage   *bool `json:"triage,omitempty"`
}

type RepositoryTemplateRepositoryOwner struct {
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

type RepositoryTemplateRepositoryPermissions struct {
	Admin *bool `json:"admin,omitempty"`
	Pull  *bool `json:"pull,omitempty"`
	Push  *bool `json:"push,omitempty"`
}

type RepositoryTemplateRepository struct {
	AllowMergeCommit    *bool                                    `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge    *bool                                    `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge    *bool                                    `json:"allow_squash_merge,omitempty"`
	ArchiveURL          *string                                  `json:"archive_url,omitempty"`
	Archived            *bool                                    `json:"archived,omitempty"`
	AssigneesURL        *string                                  `json:"assignees_url,omitempty"`
	BlobsURL            *string                                  `json:"blobs_url,omitempty"`
	BranchesURL         *string                                  `json:"branches_url,omitempty"`
	CloneURL            *string                                  `json:"clone_url,omitempty"`
	CollaboratorsURL    *string                                  `json:"collaborators_url,omitempty"`
	CommentsURL         *string                                  `json:"comments_url,omitempty"`
	CommitsURL          *string                                  `json:"commits_url,omitempty"`
	CompareURL          *string                                  `json:"compare_url,omitempty"`
	ContentsURL         *string                                  `json:"contents_url,omitempty"`
	ContributorsURL     *string                                  `json:"contributors_url,omitempty"`
	CreatedAt           *string                                  `json:"created_at,omitempty"`
	DefaultBranch       *string                                  `json:"default_branch,omitempty"`
	DeleteBranchOnMerge *bool                                    `json:"delete_branch_on_merge,omitempty"`
	DeploymentsURL      *string                                  `json:"deployments_url,omitempty"`
	Description         *string                                  `json:"description,omitempty"`
	Disabled            *bool                                    `json:"disabled,omitempty"`
	DownloadsURL        *string                                  `json:"downloads_url,omitempty"`
	EventsURL           *string                                  `json:"events_url,omitempty"`
	Fork                *bool                                    `json:"fork,omitempty"`
	ForksCount          *int64                                   `json:"forks_count,omitempty"`
	ForksURL            *string                                  `json:"forks_url,omitempty"`
	FullName            *string                                  `json:"full_name,omitempty"`
	GitCommitsURL       *string                                  `json:"git_commits_url,omitempty"`
	GitRefsURL          *string                                  `json:"git_refs_url,omitempty"`
	GitTagsURL          *string                                  `json:"git_tags_url,omitempty"`
	GitURL              *string                                  `json:"git_url,omitempty"`
	HasDownloads        *bool                                    `json:"has_downloads,omitempty"`
	HasIssues           *bool                                    `json:"has_issues,omitempty"`
	HasPages            *bool                                    `json:"has_pages,omitempty"`
	HasProjects         *bool                                    `json:"has_projects,omitempty"`
	HasWiki             *bool                                    `json:"has_wiki,omitempty"`
	Homepage            *string                                  `json:"homepage,omitempty"`
	HooksURL            *string                                  `json:"hooks_url,omitempty"`
	HTMLURL             *string                                  `json:"html_url,omitempty"`
	ID                  *int64                                   `json:"id,omitempty"`
	IsTemplate          *bool                                    `json:"is_template,omitempty"`
	IssueCommentURL     *string                                  `json:"issue_comment_url,omitempty"`
	IssueEventsURL      *string                                  `json:"issue_events_url,omitempty"`
	IssuesURL           *string                                  `json:"issues_url,omitempty"`
	KeysURL             *string                                  `json:"keys_url,omitempty"`
	LabelsURL           *string                                  `json:"labels_url,omitempty"`
	Language            *string                                  `json:"language,omitempty"`
	LanguagesURL        *string                                  `json:"languages_url,omitempty"`
	MergesURL           *string                                  `json:"merges_url,omitempty"`
	MilestonesURL       *string                                  `json:"milestones_url,omitempty"`
	MirrorURL           *string                                  `json:"mirror_url,omitempty"`
	Name                *string                                  `json:"name,omitempty"`
	NetworkCount        *int64                                   `json:"network_count,omitempty"`
	NodeID              *string                                  `json:"node_id,omitempty"`
	NotificationsURL    *string                                  `json:"notifications_url,omitempty"`
	OpenIssuesCount     *int64                                   `json:"open_issues_count,omitempty"`
	Owner               *RepositoryTemplateRepositoryOwner       `json:"owner,omitempty"`
	Permissions         *RepositoryTemplateRepositoryPermissions `json:"permissions,omitempty"`
	Private             *bool                                    `json:"private,omitempty"`
	PullsURL            *string                                  `json:"pulls_url,omitempty"`
	PushedAt            *string                                  `json:"pushed_at,omitempty"`
	ReleasesURL         *string                                  `json:"releases_url,omitempty"`
	Size                *int64                                   `json:"size,omitempty"`
	SSHURL              *string                                  `json:"ssh_url,omitempty"`
	StargazersCount     *int64                                   `json:"stargazers_count,omitempty"`
	StargazersURL       *string                                  `json:"stargazers_url,omitempty"`
	StatusesURL         *string                                  `json:"statuses_url,omitempty"`
	SubscribersCount    *int64                                   `json:"subscribers_count,omitempty"`
	SubscribersURL      *string                                  `json:"subscribers_url,omitempty"`
	SubscriptionURL     *string                                  `json:"subscription_url,omitempty"`
	SvnURL              *string                                  `json:"svn_url,omitempty"`
	TagsURL             *string                                  `json:"tags_url,omitempty"`
	TeamsURL            *string                                  `json:"teams_url,omitempty"`
	TempCloneToken      *string                                  `json:"temp_clone_token,omitempty"`
	Topics              []string                                 `json:"topics,omitempty"`
	TreesURL            *string                                  `json:"trees_url,omitempty"`
	UpdatedAt           *string                                  `json:"updated_at,omitempty"`
	URL                 *string                                  `json:"url,omitempty"`
	Visibility          *string                                  `json:"visibility,omitempty"`
	WatchersCount       *int64                                   `json:"watchers_count,omitempty"`
}

// Repository
// A git repository
type Repository struct {
	AllowMergeCommit    *bool                         `json:"allow_merge_commit,omitempty"`
	AllowRebaseMerge    *bool                         `json:"allow_rebase_merge,omitempty"`
	AllowSquashMerge    *bool                         `json:"allow_squash_merge,omitempty"`
	ArchiveURL          string                        `json:"archive_url"`
	Archived            bool                          `json:"archived"`
	AssigneesURL        string                        `json:"assignees_url"`
	BlobsURL            string                        `json:"blobs_url"`
	BranchesURL         string                        `json:"branches_url"`
	CloneURL            string                        `json:"clone_url"`
	CollaboratorsURL    string                        `json:"collaborators_url"`
	CommentsURL         string                        `json:"comments_url"`
	CommitsURL          string                        `json:"commits_url"`
	CompareURL          string                        `json:"compare_url"`
	ContentsURL         string                        `json:"contents_url"`
	ContributorsURL     string                        `json:"contributors_url"`
	CreatedAt           time.Time                     `json:"created_at"`
	DefaultBranch       string                        `json:"default_branch"`
	DeleteBranchOnMerge *bool                         `json:"delete_branch_on_merge,omitempty"`
	DeploymentsURL      string                        `json:"deployments_url"`
	Description         string                        `json:"description"`
	Disabled            bool                          `json:"disabled"`
	DownloadsURL        string                        `json:"downloads_url"`
	EventsURL           string                        `json:"events_url"`
	Fork                bool                          `json:"fork"`
	Forks               int64                         `json:"forks"`
	ForksCount          int64                         `json:"forks_count"`
	ForksURL            string                        `json:"forks_url"`
	FullName            string                        `json:"full_name"`
	GitCommitsURL       string                        `json:"git_commits_url"`
	GitRefsURL          string                        `json:"git_refs_url"`
	GitTagsURL          string                        `json:"git_tags_url"`
	GitURL              string                        `json:"git_url"`
	HasDownloads        bool                          `json:"has_downloads"`
	HasIssues           bool                          `json:"has_issues"`
	HasPages            bool                          `json:"has_pages"`
	HasProjects         bool                          `json:"has_projects"`
	HasWiki             bool                          `json:"has_wiki"`
	Homepage            string                        `json:"homepage"`
	HooksURL            string                        `json:"hooks_url"`
	HTMLURL             string                        `json:"html_url"`
	ID                  int64                         `json:"id"`
	IsTemplate          *bool                         `json:"is_template,omitempty"`
	IssueCommentURL     string                        `json:"issue_comment_url"`
	IssueEventsURL      string                        `json:"issue_events_url"`
	IssuesURL           string                        `json:"issues_url"`
	KeysURL             string                        `json:"keys_url"`
	LabelsURL           string                        `json:"labels_url"`
	Language            string                        `json:"language"`
	LanguagesURL        string                        `json:"languages_url"`
	License             RepositoryLicenseSimple       `json:"license"`
	MasterBranch        *string                       `json:"master_branch,omitempty"`
	MergesURL           string                        `json:"merges_url"`
	MilestonesURL       string                        `json:"milestones_url"`
	MirrorURL           string                        `json:"mirror_url"`
	Name                string                        `json:"name"`
	NetworkCount        *int64                        `json:"network_count,omitempty"`
	NodeID              string                        `json:"node_id"`
	NotificationsURL    string                        `json:"notifications_url"`
	OpenIssues          int64                         `json:"open_issues"`
	OpenIssuesCount     int64                         `json:"open_issues_count"`
	Owner               RepositorySimpleUser          `json:"owner"`
	Permissions         *RepositoryPermissions        `json:"permissions,omitempty"`
	Private             bool                          `json:"private"`
	PullsURL            string                        `json:"pulls_url"`
	PushedAt            time.Time                     `json:"pushed_at"`
	ReleasesURL         string                        `json:"releases_url"`
	Size                int64                         `json:"size"`
	SSHURL              string                        `json:"ssh_url"`
	StargazersCount     int64                         `json:"stargazers_count"`
	StargazersURL       string                        `json:"stargazers_url"`
	StarredAt           *string                       `json:"starred_at,omitempty"`
	StatusesURL         string                        `json:"statuses_url"`
	SubscribersCount    *int64                        `json:"subscribers_count,omitempty"`
	SubscribersURL      string                        `json:"subscribers_url"`
	SubscriptionURL     string                        `json:"subscription_url"`
	SvnURL              string                        `json:"svn_url"`
	TagsURL             string                        `json:"tags_url"`
	TeamsURL            string                        `json:"teams_url"`
	TempCloneToken      *string                       `json:"temp_clone_token,omitempty"`
	TemplateRepository  *RepositoryTemplateRepository `json:"template_repository,omitempty"`
	Topics              []string                      `json:"topics,omitempty"`
	TreesURL            string                        `json:"trees_url"`
	UpdatedAt           time.Time                     `json:"updated_at"`
	URL                 string                        `json:"url"`
	Visibility          *string                       `json:"visibility,omitempty"`
	Watchers            int64                         `json:"watchers"`
	WatchersCount       int64                         `json:"watchers_count"`
}

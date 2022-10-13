package shared

type EnterpriseOverviewComments struct {
	TotalCommitComments      *int64 `json:"total_commit_comments"`
	TotalGistComments        *int64 `json:"total_gist_comments"`
	TotalIssueComments       *int64 `json:"total_issue_comments"`
	TotalPullRequestComments *int64 `json:"total_pull_request_comments"`
}

type EnterpriseOverviewGists struct {
	PrivateGists *int64 `json:"private_gists"`
	PublicGists  *int64 `json:"public_gists"`
	TotalGists   *int64 `json:"total_gists"`
}

type EnterpriseOverviewHooks struct {
	ActiveHooks   *int64 `json:"active_hooks"`
	InactiveHooks *int64 `json:"inactive_hooks"`
	TotalHooks    *int64 `json:"total_hooks"`
}

type EnterpriseOverviewIssues struct {
	ClosedIssues *int64 `json:"closed_issues"`
	OpenIssues   *int64 `json:"open_issues"`
	TotalIssues  *int64 `json:"total_issues"`
}

type EnterpriseOverviewMilestones struct {
	ClosedMilestones *int64 `json:"closed_milestones"`
	OpenMilestones   *int64 `json:"open_milestones"`
	TotalMilestones  *int64 `json:"total_milestones"`
}

type EnterpriseOverviewOrgs struct {
	DisabledOrgs     *int64 `json:"disabled_orgs"`
	TotalOrgs        *int64 `json:"total_orgs"`
	TotalTeamMembers *int64 `json:"total_team_members"`
	TotalTeams       *int64 `json:"total_teams"`
}

type EnterpriseOverviewPages struct {
	TotalPages *int64 `json:"total_pages"`
}

type EnterpriseOverviewPulls struct {
	MergeablePulls   *int64 `json:"mergeable_pulls"`
	MergedPulls      *int64 `json:"merged_pulls"`
	TotalPulls       *int64 `json:"total_pulls"`
	UnmergeablePulls *int64 `json:"unmergeable_pulls"`
}

type EnterpriseOverviewRepos struct {
	ForkRepos   *int64 `json:"fork_repos"`
	OrgRepos    *int64 `json:"org_repos"`
	RootRepos   *int64 `json:"root_repos"`
	TotalPushes *int64 `json:"total_pushes"`
	TotalRepos  *int64 `json:"total_repos"`
	TotalWikis  *int64 `json:"total_wikis"`
}

type EnterpriseOverviewUsers struct {
	AdminUsers     *int64 `json:"admin_users"`
	SuspendedUsers *int64 `json:"suspended_users"`
	TotalUsers     *int64 `json:"total_users"`
}

type EnterpriseOverview struct {
	Comments   *EnterpriseOverviewComments   `json:"comments"`
	Gists      *EnterpriseOverviewGists      `json:"gists"`
	Hooks      *EnterpriseOverviewHooks      `json:"hooks"`
	Issues     *EnterpriseOverviewIssues     `json:"issues"`
	Milestones *EnterpriseOverviewMilestones `json:"milestones"`
	Orgs       *EnterpriseOverviewOrgs       `json:"orgs"`
	Pages      *EnterpriseOverviewPages      `json:"pages"`
	Pulls      *EnterpriseOverviewPulls      `json:"pulls"`
	Repos      *EnterpriseOverviewRepos      `json:"repos"`
	Users      *EnterpriseOverviewUsers      `json:"users"`
}

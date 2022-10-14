package shared

type EnterpriseOverviewComments struct {
	TotalCommitComments      *int64 `json:"total_commit_comments,omitempty"`
	TotalGistComments        *int64 `json:"total_gist_comments,omitempty"`
	TotalIssueComments       *int64 `json:"total_issue_comments,omitempty"`
	TotalPullRequestComments *int64 `json:"total_pull_request_comments,omitempty"`
}

type EnterpriseOverviewGists struct {
	PrivateGists *int64 `json:"private_gists,omitempty"`
	PublicGists  *int64 `json:"public_gists,omitempty"`
	TotalGists   *int64 `json:"total_gists,omitempty"`
}

type EnterpriseOverviewHooks struct {
	ActiveHooks   *int64 `json:"active_hooks,omitempty"`
	InactiveHooks *int64 `json:"inactive_hooks,omitempty"`
	TotalHooks    *int64 `json:"total_hooks,omitempty"`
}

type EnterpriseOverviewIssues struct {
	ClosedIssues *int64 `json:"closed_issues,omitempty"`
	OpenIssues   *int64 `json:"open_issues,omitempty"`
	TotalIssues  *int64 `json:"total_issues,omitempty"`
}

type EnterpriseOverviewMilestones struct {
	ClosedMilestones *int64 `json:"closed_milestones,omitempty"`
	OpenMilestones   *int64 `json:"open_milestones,omitempty"`
	TotalMilestones  *int64 `json:"total_milestones,omitempty"`
}

type EnterpriseOverviewOrgs struct {
	DisabledOrgs     *int64 `json:"disabled_orgs,omitempty"`
	TotalOrgs        *int64 `json:"total_orgs,omitempty"`
	TotalTeamMembers *int64 `json:"total_team_members,omitempty"`
	TotalTeams       *int64 `json:"total_teams,omitempty"`
}

type EnterpriseOverviewPages struct {
	TotalPages *int64 `json:"total_pages,omitempty"`
}

type EnterpriseOverviewPulls struct {
	MergeablePulls   *int64 `json:"mergeable_pulls,omitempty"`
	MergedPulls      *int64 `json:"merged_pulls,omitempty"`
	TotalPulls       *int64 `json:"total_pulls,omitempty"`
	UnmergeablePulls *int64 `json:"unmergeable_pulls,omitempty"`
}

type EnterpriseOverviewRepos struct {
	ForkRepos   *int64 `json:"fork_repos,omitempty"`
	OrgRepos    *int64 `json:"org_repos,omitempty"`
	RootRepos   *int64 `json:"root_repos,omitempty"`
	TotalPushes *int64 `json:"total_pushes,omitempty"`
	TotalRepos  *int64 `json:"total_repos,omitempty"`
	TotalWikis  *int64 `json:"total_wikis,omitempty"`
}

type EnterpriseOverviewUsers struct {
	AdminUsers     *int64 `json:"admin_users,omitempty"`
	SuspendedUsers *int64 `json:"suspended_users,omitempty"`
	TotalUsers     *int64 `json:"total_users,omitempty"`
}

type EnterpriseOverview struct {
	Comments   *EnterpriseOverviewComments   `json:"comments,omitempty"`
	Gists      *EnterpriseOverviewGists      `json:"gists,omitempty"`
	Hooks      *EnterpriseOverviewHooks      `json:"hooks,omitempty"`
	Issues     *EnterpriseOverviewIssues     `json:"issues,omitempty"`
	Milestones *EnterpriseOverviewMilestones `json:"milestones,omitempty"`
	Orgs       *EnterpriseOverviewOrgs       `json:"orgs,omitempty"`
	Pages      *EnterpriseOverviewPages      `json:"pages,omitempty"`
	Pulls      *EnterpriseOverviewPulls      `json:"pulls,omitempty"`
	Repos      *EnterpriseOverviewRepos      `json:"repos,omitempty"`
	Users      *EnterpriseOverviewUsers      `json:"users,omitempty"`
}

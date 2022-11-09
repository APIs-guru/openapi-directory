import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class EnterpriseOverviewComments extends SpeakeasyBase {
  @Metadata({ data: "json, name=total_commit_comments" })
  totalCommitComments?: number;

  @Metadata({ data: "json, name=total_gist_comments" })
  totalGistComments?: number;

  @Metadata({ data: "json, name=total_issue_comments" })
  totalIssueComments?: number;

  @Metadata({ data: "json, name=total_pull_request_comments" })
  totalPullRequestComments?: number;
}


export class EnterpriseOverviewGists extends SpeakeasyBase {
  @Metadata({ data: "json, name=private_gists" })
  privateGists?: number;

  @Metadata({ data: "json, name=public_gists" })
  publicGists?: number;

  @Metadata({ data: "json, name=total_gists" })
  totalGists?: number;
}


export class EnterpriseOverviewHooks extends SpeakeasyBase {
  @Metadata({ data: "json, name=active_hooks" })
  activeHooks?: number;

  @Metadata({ data: "json, name=inactive_hooks" })
  inactiveHooks?: number;

  @Metadata({ data: "json, name=total_hooks" })
  totalHooks?: number;
}


export class EnterpriseOverviewIssues extends SpeakeasyBase {
  @Metadata({ data: "json, name=closed_issues" })
  closedIssues?: number;

  @Metadata({ data: "json, name=open_issues" })
  openIssues?: number;

  @Metadata({ data: "json, name=total_issues" })
  totalIssues?: number;
}


export class EnterpriseOverviewMilestones extends SpeakeasyBase {
  @Metadata({ data: "json, name=closed_milestones" })
  closedMilestones?: number;

  @Metadata({ data: "json, name=open_milestones" })
  openMilestones?: number;

  @Metadata({ data: "json, name=total_milestones" })
  totalMilestones?: number;
}


export class EnterpriseOverviewOrgs extends SpeakeasyBase {
  @Metadata({ data: "json, name=disabled_orgs" })
  disabledOrgs?: number;

  @Metadata({ data: "json, name=total_orgs" })
  totalOrgs?: number;

  @Metadata({ data: "json, name=total_team_members" })
  totalTeamMembers?: number;

  @Metadata({ data: "json, name=total_teams" })
  totalTeams?: number;
}


export class EnterpriseOverviewPages extends SpeakeasyBase {
  @Metadata({ data: "json, name=total_pages" })
  totalPages?: number;
}


export class EnterpriseOverviewPulls extends SpeakeasyBase {
  @Metadata({ data: "json, name=mergeable_pulls" })
  mergeablePulls?: number;

  @Metadata({ data: "json, name=merged_pulls" })
  mergedPulls?: number;

  @Metadata({ data: "json, name=total_pulls" })
  totalPulls?: number;

  @Metadata({ data: "json, name=unmergeable_pulls" })
  unmergeablePulls?: number;
}


export class EnterpriseOverviewRepos extends SpeakeasyBase {
  @Metadata({ data: "json, name=fork_repos" })
  forkRepos?: number;

  @Metadata({ data: "json, name=org_repos" })
  orgRepos?: number;

  @Metadata({ data: "json, name=root_repos" })
  rootRepos?: number;

  @Metadata({ data: "json, name=total_pushes" })
  totalPushes?: number;

  @Metadata({ data: "json, name=total_repos" })
  totalRepos?: number;

  @Metadata({ data: "json, name=total_wikis" })
  totalWikis?: number;
}


export class EnterpriseOverviewUsers extends SpeakeasyBase {
  @Metadata({ data: "json, name=admin_users" })
  adminUsers?: number;

  @Metadata({ data: "json, name=suspended_users" })
  suspendedUsers?: number;

  @Metadata({ data: "json, name=total_users" })
  totalUsers?: number;
}


export class EnterpriseOverview extends SpeakeasyBase {
  @Metadata({ data: "json, name=comments" })
  comments?: EnterpriseOverviewComments;

  @Metadata({ data: "json, name=gists" })
  gists?: EnterpriseOverviewGists;

  @Metadata({ data: "json, name=hooks" })
  hooks?: EnterpriseOverviewHooks;

  @Metadata({ data: "json, name=issues" })
  issues?: EnterpriseOverviewIssues;

  @Metadata({ data: "json, name=milestones" })
  milestones?: EnterpriseOverviewMilestones;

  @Metadata({ data: "json, name=orgs" })
  orgs?: EnterpriseOverviewOrgs;

  @Metadata({ data: "json, name=pages" })
  pages?: EnterpriseOverviewPages;

  @Metadata({ data: "json, name=pulls" })
  pulls?: EnterpriseOverviewPulls;

  @Metadata({ data: "json, name=repos" })
  repos?: EnterpriseOverviewRepos;

  @Metadata({ data: "json, name=users" })
  users?: EnterpriseOverviewUsers;
}

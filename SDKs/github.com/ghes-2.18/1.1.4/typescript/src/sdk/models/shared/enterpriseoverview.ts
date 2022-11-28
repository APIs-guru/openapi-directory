import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class EnterpriseOverviewComments extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total_commit_comments" })
  totalCommitComments?: number;

  @SpeakeasyMetadata({ data: "json, name=total_gist_comments" })
  totalGistComments?: number;

  @SpeakeasyMetadata({ data: "json, name=total_issue_comments" })
  totalIssueComments?: number;

  @SpeakeasyMetadata({ data: "json, name=total_pull_request_comments" })
  totalPullRequestComments?: number;
}


export class EnterpriseOverviewGists extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=private_gists" })
  privateGists?: number;

  @SpeakeasyMetadata({ data: "json, name=public_gists" })
  publicGists?: number;

  @SpeakeasyMetadata({ data: "json, name=total_gists" })
  totalGists?: number;
}


export class EnterpriseOverviewHooks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=active_hooks" })
  activeHooks?: number;

  @SpeakeasyMetadata({ data: "json, name=inactive_hooks" })
  inactiveHooks?: number;

  @SpeakeasyMetadata({ data: "json, name=total_hooks" })
  totalHooks?: number;
}


export class EnterpriseOverviewIssues extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closed_issues" })
  closedIssues?: number;

  @SpeakeasyMetadata({ data: "json, name=open_issues" })
  openIssues?: number;

  @SpeakeasyMetadata({ data: "json, name=total_issues" })
  totalIssues?: number;
}


export class EnterpriseOverviewMilestones extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=closed_milestones" })
  closedMilestones?: number;

  @SpeakeasyMetadata({ data: "json, name=open_milestones" })
  openMilestones?: number;

  @SpeakeasyMetadata({ data: "json, name=total_milestones" })
  totalMilestones?: number;
}


export class EnterpriseOverviewOrgs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled_orgs" })
  disabledOrgs?: number;

  @SpeakeasyMetadata({ data: "json, name=total_orgs" })
  totalOrgs?: number;

  @SpeakeasyMetadata({ data: "json, name=total_team_members" })
  totalTeamMembers?: number;

  @SpeakeasyMetadata({ data: "json, name=total_teams" })
  totalTeams?: number;
}


export class EnterpriseOverviewPages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=total_pages" })
  totalPages?: number;
}


export class EnterpriseOverviewPulls extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mergeable_pulls" })
  mergeablePulls?: number;

  @SpeakeasyMetadata({ data: "json, name=merged_pulls" })
  mergedPulls?: number;

  @SpeakeasyMetadata({ data: "json, name=total_pulls" })
  totalPulls?: number;

  @SpeakeasyMetadata({ data: "json, name=unmergeable_pulls" })
  unmergeablePulls?: number;
}


export class EnterpriseOverviewRepos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fork_repos" })
  forkRepos?: number;

  @SpeakeasyMetadata({ data: "json, name=org_repos" })
  orgRepos?: number;

  @SpeakeasyMetadata({ data: "json, name=root_repos" })
  rootRepos?: number;

  @SpeakeasyMetadata({ data: "json, name=total_pushes" })
  totalPushes?: number;

  @SpeakeasyMetadata({ data: "json, name=total_repos" })
  totalRepos?: number;

  @SpeakeasyMetadata({ data: "json, name=total_wikis" })
  totalWikis?: number;
}


export class EnterpriseOverviewUsers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=admin_users" })
  adminUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=suspended_users" })
  suspendedUsers?: number;

  @SpeakeasyMetadata({ data: "json, name=total_users" })
  totalUsers?: number;
}


export class EnterpriseOverview extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=comments" })
  comments?: EnterpriseOverviewComments;

  @SpeakeasyMetadata({ data: "json, name=gists" })
  gists?: EnterpriseOverviewGists;

  @SpeakeasyMetadata({ data: "json, name=hooks" })
  hooks?: EnterpriseOverviewHooks;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: EnterpriseOverviewIssues;

  @SpeakeasyMetadata({ data: "json, name=milestones" })
  milestones?: EnterpriseOverviewMilestones;

  @SpeakeasyMetadata({ data: "json, name=orgs" })
  orgs?: EnterpriseOverviewOrgs;

  @SpeakeasyMetadata({ data: "json, name=pages" })
  pages?: EnterpriseOverviewPages;

  @SpeakeasyMetadata({ data: "json, name=pulls" })
  pulls?: EnterpriseOverviewPulls;

  @SpeakeasyMetadata({ data: "json, name=repos" })
  repos?: EnterpriseOverviewRepos;

  @SpeakeasyMetadata({ data: "json, name=users" })
  users?: EnterpriseOverviewUsers;
}

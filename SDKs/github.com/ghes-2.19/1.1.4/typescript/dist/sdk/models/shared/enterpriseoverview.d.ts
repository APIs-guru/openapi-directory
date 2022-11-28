import { SpeakeasyBase } from "../../../internal/utils";
export declare class EnterpriseOverviewComments extends SpeakeasyBase {
    totalCommitComments?: number;
    totalGistComments?: number;
    totalIssueComments?: number;
    totalPullRequestComments?: number;
}
export declare class EnterpriseOverviewGists extends SpeakeasyBase {
    privateGists?: number;
    publicGists?: number;
    totalGists?: number;
}
export declare class EnterpriseOverviewHooks extends SpeakeasyBase {
    activeHooks?: number;
    inactiveHooks?: number;
    totalHooks?: number;
}
export declare class EnterpriseOverviewIssues extends SpeakeasyBase {
    closedIssues?: number;
    openIssues?: number;
    totalIssues?: number;
}
export declare class EnterpriseOverviewMilestones extends SpeakeasyBase {
    closedMilestones?: number;
    openMilestones?: number;
    totalMilestones?: number;
}
export declare class EnterpriseOverviewOrgs extends SpeakeasyBase {
    disabledOrgs?: number;
    totalOrgs?: number;
    totalTeamMembers?: number;
    totalTeams?: number;
}
export declare class EnterpriseOverviewPages extends SpeakeasyBase {
    totalPages?: number;
}
export declare class EnterpriseOverviewPulls extends SpeakeasyBase {
    mergeablePulls?: number;
    mergedPulls?: number;
    totalPulls?: number;
    unmergeablePulls?: number;
}
export declare class EnterpriseOverviewRepos extends SpeakeasyBase {
    forkRepos?: number;
    orgRepos?: number;
    rootRepos?: number;
    totalPushes?: number;
    totalRepos?: number;
    totalWikis?: number;
}
export declare class EnterpriseOverviewUsers extends SpeakeasyBase {
    adminUsers?: number;
    suspendedUsers?: number;
    totalUsers?: number;
}
export declare class EnterpriseOverview extends SpeakeasyBase {
    comments?: EnterpriseOverviewComments;
    gists?: EnterpriseOverviewGists;
    hooks?: EnterpriseOverviewHooks;
    issues?: EnterpriseOverviewIssues;
    milestones?: EnterpriseOverviewMilestones;
    orgs?: EnterpriseOverviewOrgs;
    pages?: EnterpriseOverviewPages;
    pulls?: EnterpriseOverviewPulls;
    repos?: EnterpriseOverviewRepos;
    users?: EnterpriseOverviewUsers;
}

import { SpeakeasyBase } from "../../../internal/utils";
export declare class PackageSimpleUser extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredAt?: string;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
export declare enum PackagePackageTypeEnum {
    Npm = "npm",
    Maven = "maven",
    Rubygems = "rubygems",
    Docker = "docker",
    Nuget = "nuget",
    Container = "container"
}
export declare class PackageMinimalRepositoryLicense extends SpeakeasyBase {
    key?: string;
    name?: string;
    nodeId?: string;
    spdxId?: string;
    url?: string;
}
export declare class PackageMinimalRepositorySimpleUser extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredAt?: string;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
export declare class PackageMinimalRepositoryPermissions extends SpeakeasyBase {
    admin?: boolean;
    pull?: boolean;
    push?: boolean;
}
export declare class PackageMinimalRepositoryRepositoryLicenseSimple extends SpeakeasyBase {
    htmlUrl?: string;
    key: string;
    name: string;
    nodeId: string;
    spdxId: string;
    url: string;
}
export declare class PackageMinimalRepositoryRepositorySimpleUser extends SpeakeasyBase {
    avatarUrl: string;
    eventsUrl: string;
    followersUrl: string;
    followingUrl: string;
    gistsUrl: string;
    gravatarId: string;
    htmlUrl: string;
    id: number;
    login: string;
    nodeId: string;
    organizationsUrl: string;
    receivedEventsUrl: string;
    reposUrl: string;
    siteAdmin: boolean;
    starredAt?: string;
    starredUrl: string;
    subscriptionsUrl: string;
    type: string;
    url: string;
}
export declare class PackageMinimalRepositoryRepositoryPermissions extends SpeakeasyBase {
    admin: boolean;
    maintain?: boolean;
    pull: boolean;
    push: boolean;
    triage?: boolean;
}
export declare class PackageMinimalRepositoryRepositoryTemplateRepositoryOwner extends SpeakeasyBase {
    avatarUrl?: string;
    eventsUrl?: string;
    followersUrl?: string;
    followingUrl?: string;
    gistsUrl?: string;
    gravatarId?: string;
    htmlUrl?: string;
    id?: number;
    login?: string;
    nodeId?: string;
    organizationsUrl?: string;
    receivedEventsUrl?: string;
    reposUrl?: string;
    siteAdmin?: boolean;
    starredUrl?: string;
    subscriptionsUrl?: string;
    type?: string;
    url?: string;
}
export declare class PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions extends SpeakeasyBase {
    admin?: boolean;
    pull?: boolean;
    push?: boolean;
}
export declare class PackageMinimalRepositoryRepositoryTemplateRepository extends SpeakeasyBase {
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowSquashMerge?: boolean;
    archiveUrl?: string;
    archived?: boolean;
    assigneesUrl?: string;
    blobsUrl?: string;
    branchesUrl?: string;
    cloneUrl?: string;
    collaboratorsUrl?: string;
    commentsUrl?: string;
    commitsUrl?: string;
    compareUrl?: string;
    contentsUrl?: string;
    contributorsUrl?: string;
    createdAt?: string;
    defaultBranch?: string;
    deleteBranchOnMerge?: boolean;
    deploymentsUrl?: string;
    description?: string;
    disabled?: boolean;
    downloadsUrl?: string;
    eventsUrl?: string;
    fork?: boolean;
    forksCount?: number;
    forksUrl?: string;
    fullName?: string;
    gitCommitsUrl?: string;
    gitRefsUrl?: string;
    gitTagsUrl?: string;
    gitUrl?: string;
    hasDownloads?: boolean;
    hasIssues?: boolean;
    hasPages?: boolean;
    hasProjects?: boolean;
    hasWiki?: boolean;
    homepage?: string;
    hooksUrl?: string;
    htmlUrl?: string;
    id?: number;
    isTemplate?: boolean;
    issueCommentUrl?: string;
    issueEventsUrl?: string;
    issuesUrl?: string;
    keysUrl?: string;
    labelsUrl?: string;
    language?: string;
    languagesUrl?: string;
    mergesUrl?: string;
    milestonesUrl?: string;
    mirrorUrl?: string;
    name?: string;
    networkCount?: number;
    nodeId?: string;
    notificationsUrl?: string;
    openIssuesCount?: number;
    owner?: PackageMinimalRepositoryRepositoryTemplateRepositoryOwner;
    permissions?: PackageMinimalRepositoryRepositoryTemplateRepositoryPermissions;
    private?: boolean;
    pullsUrl?: string;
    pushedAt?: string;
    releasesUrl?: string;
    size?: number;
    sshUrl?: string;
    stargazersCount?: number;
    stargazersUrl?: string;
    statusesUrl?: string;
    subscribersCount?: number;
    subscribersUrl?: string;
    subscriptionUrl?: string;
    svnUrl?: string;
    tagsUrl?: string;
    teamsUrl?: string;
    tempCloneToken?: string;
    topics?: string[];
    treesUrl?: string;
    updatedAt?: string;
    url?: string;
    visibility?: string;
    watchersCount?: number;
}
export declare class PackageMinimalRepositoryRepository extends SpeakeasyBase {
    allowMergeCommit?: boolean;
    allowRebaseMerge?: boolean;
    allowSquashMerge?: boolean;
    archiveUrl: string;
    archived: boolean;
    assigneesUrl: string;
    blobsUrl: string;
    branchesUrl: string;
    cloneUrl: string;
    collaboratorsUrl: string;
    commentsUrl: string;
    commitsUrl: string;
    compareUrl: string;
    contentsUrl: string;
    contributorsUrl: string;
    createdAt: Date;
    defaultBranch: string;
    deleteBranchOnMerge?: boolean;
    deploymentsUrl: string;
    description: string;
    disabled: boolean;
    downloadsUrl: string;
    eventsUrl: string;
    fork: boolean;
    forks: number;
    forksCount: number;
    forksUrl: string;
    fullName: string;
    gitCommitsUrl: string;
    gitRefsUrl: string;
    gitTagsUrl: string;
    gitUrl: string;
    hasDownloads: boolean;
    hasIssues: boolean;
    hasPages: boolean;
    hasProjects: boolean;
    hasWiki: boolean;
    homepage: string;
    hooksUrl: string;
    htmlUrl: string;
    id: number;
    isTemplate?: boolean;
    issueCommentUrl: string;
    issueEventsUrl: string;
    issuesUrl: string;
    keysUrl: string;
    labelsUrl: string;
    language: string;
    languagesUrl: string;
    license: PackageMinimalRepositoryRepositoryLicenseSimple;
    masterBranch?: string;
    mergesUrl: string;
    milestonesUrl: string;
    mirrorUrl: string;
    name: string;
    networkCount?: number;
    nodeId: string;
    notificationsUrl: string;
    openIssues: number;
    openIssuesCount: number;
    owner: PackageMinimalRepositoryRepositorySimpleUser;
    permissions?: PackageMinimalRepositoryRepositoryPermissions;
    private: boolean;
    pullsUrl: string;
    pushedAt: Date;
    releasesUrl: string;
    size: number;
    sshUrl: string;
    stargazersCount: number;
    stargazersUrl: string;
    starredAt?: string;
    statusesUrl: string;
    subscribersCount?: number;
    subscribersUrl: string;
    subscriptionUrl: string;
    svnUrl: string;
    tagsUrl: string;
    teamsUrl: string;
    tempCloneToken?: string;
    templateRepository?: PackageMinimalRepositoryRepositoryTemplateRepository;
    topics?: string[];
    treesUrl: string;
    updatedAt: Date;
    url: string;
    visibility?: string;
    watchers: number;
    watchersCount: number;
}
export declare class PackageMinimalRepository extends SpeakeasyBase {
    archiveUrl: string;
    archived?: boolean;
    assigneesUrl: string;
    blobsUrl: string;
    branchesUrl: string;
    cloneUrl?: string;
    collaboratorsUrl: string;
    commentsUrl: string;
    commitsUrl: string;
    compareUrl: string;
    contentsUrl: string;
    contributorsUrl: string;
    createdAt?: Date;
    defaultBranch?: string;
    deleteBranchOnMerge?: boolean;
    deploymentsUrl: string;
    description: string;
    disabled?: boolean;
    downloadsUrl: string;
    eventsUrl: string;
    fork: boolean;
    forks?: number;
    forksCount?: number;
    forksUrl: string;
    fullName: string;
    gitCommitsUrl: string;
    gitRefsUrl: string;
    gitTagsUrl: string;
    gitUrl?: string;
    hasDownloads?: boolean;
    hasIssues?: boolean;
    hasPages?: boolean;
    hasProjects?: boolean;
    hasWiki?: boolean;
    homepage?: string;
    hooksUrl: string;
    htmlUrl: string;
    id: number;
    isTemplate?: boolean;
    issueCommentUrl: string;
    issueEventsUrl: string;
    issuesUrl: string;
    keysUrl: string;
    labelsUrl: string;
    language?: string;
    languagesUrl: string;
    license?: PackageMinimalRepositoryLicense;
    mergesUrl: string;
    milestonesUrl: string;
    mirrorUrl?: string;
    name: string;
    networkCount?: number;
    nodeId: string;
    notificationsUrl: string;
    openIssues?: number;
    openIssuesCount?: number;
    owner: PackageMinimalRepositorySimpleUser;
    permissions?: PackageMinimalRepositoryPermissions;
    private: boolean;
    pullsUrl: string;
    pushedAt?: Date;
    releasesUrl: string;
    size?: number;
    sshUrl?: string;
    stargazersCount?: number;
    stargazersUrl: string;
    statusesUrl: string;
    subscribersCount?: number;
    subscribersUrl: string;
    subscriptionUrl: string;
    svnUrl?: string;
    tagsUrl: string;
    teamsUrl: string;
    tempCloneToken?: string;
    templateRepository?: PackageMinimalRepositoryRepository;
    topics?: string[];
    treesUrl: string;
    updatedAt?: Date;
    url: string;
    visibility?: string;
    watchers?: number;
    watchersCount?: number;
}
export declare enum PackageVisibilityEnum {
    Private = "private",
    Public = "public"
}
/**
 * A software package
**/
export declare class Package extends SpeakeasyBase {
    createdAt: Date;
    htmlUrl: string;
    id: number;
    name: string;
    owner?: PackageSimpleUser;
    packageType: PackagePackageTypeEnum;
    repository?: PackageMinimalRepository;
    updatedAt: Date;
    url: string;
    versionCount: number;
    visibility: PackageVisibilityEnum;
}

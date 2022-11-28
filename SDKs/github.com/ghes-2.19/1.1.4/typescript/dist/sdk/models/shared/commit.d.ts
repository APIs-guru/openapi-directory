import { SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";
export declare class CommitSimpleUser extends SpeakeasyBase {
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
export declare class CommitCommitGitUser extends SpeakeasyBase {
    date?: string;
    email?: string;
    name?: string;
}
export declare class CommitCommitTree extends SpeakeasyBase {
    sha: string;
    url: string;
}
export declare class CommitCommit extends SpeakeasyBase {
    author: CommitCommitGitUser;
    commentCount: number;
    committer: CommitCommitGitUser;
    message: string;
    tree: CommitCommitTree;
    url: string;
    verification?: Verification;
}
export declare class CommitFiles extends SpeakeasyBase {
    additions?: number;
    blobUrl?: string;
    changes?: number;
    contentsUrl?: string;
    deletions?: number;
    filename?: string;
    patch?: string;
    previousFilename?: string;
    rawUrl?: string;
    sha?: string;
    status?: string;
}
export declare class CommitParents extends SpeakeasyBase {
    htmlUrl?: string;
    sha: string;
    url: string;
}
export declare class CommitStats extends SpeakeasyBase {
    additions?: number;
    deletions?: number;
    total?: number;
}
/**
 * Commit
**/
export declare class Commit extends SpeakeasyBase {
    author: CommitSimpleUser;
    commentsUrl: string;
    commit: CommitCommit;
    committer: CommitSimpleUser;
    files?: CommitFiles[];
    htmlUrl: string;
    nodeId: string;
    parents: CommitParents[];
    sha: string;
    stats?: CommitStats;
    url: string;
}

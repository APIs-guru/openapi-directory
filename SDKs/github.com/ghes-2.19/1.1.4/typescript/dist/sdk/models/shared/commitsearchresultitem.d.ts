import { SpeakeasyBase } from "../../../internal/utils";
import { Verification } from "./verification";
import { MinimalRepository } from "./minimalrepository";
import { SearchResultTextMatches } from "./searchresulttextmatches";
export declare class CommitSearchResultItemSimpleUser extends SpeakeasyBase {
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
export declare class CommitSearchResultItemCommitAuthor extends SpeakeasyBase {
    date: Date;
    email: string;
    name: string;
}
export declare class CommitSearchResultItemCommitGitUser extends SpeakeasyBase {
    date?: string;
    email?: string;
    name?: string;
}
export declare class CommitSearchResultItemCommitTree extends SpeakeasyBase {
    sha: string;
    url: string;
}
export declare class CommitSearchResultItemCommit extends SpeakeasyBase {
    author: CommitSearchResultItemCommitAuthor;
    commentCount: number;
    committer: CommitSearchResultItemCommitGitUser;
    message: string;
    tree: CommitSearchResultItemCommitTree;
    url: string;
    verification?: Verification;
}
export declare class CommitSearchResultItemGitUser extends SpeakeasyBase {
    date?: string;
    email?: string;
    name?: string;
}
export declare class CommitSearchResultItemParents extends SpeakeasyBase {
    htmlUrl?: string;
    sha?: string;
    url?: string;
}
/**
 * Commit Search Result Item
**/
export declare class CommitSearchResultItem extends SpeakeasyBase {
    author: CommitSearchResultItemSimpleUser;
    commentsUrl: string;
    commit: CommitSearchResultItemCommit;
    committer: CommitSearchResultItemGitUser;
    htmlUrl: string;
    nodeId: string;
    parents: CommitSearchResultItemParents[];
    repository: MinimalRepository;
    score: number;
    sha: string;
    textMatches?: SearchResultTextMatches[];
    url: string;
}

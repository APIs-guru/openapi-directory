import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Identifying information for the git-user
**/
export declare class GitCommitAuthor extends SpeakeasyBase {
    date: Date;
    email: string;
    name: string;
}
/**
 * Identifying information for the git-user
**/
export declare class GitCommitCommitter extends SpeakeasyBase {
    date: Date;
    email: string;
    name: string;
}
export declare class GitCommitParents extends SpeakeasyBase {
    htmlUrl: string;
    sha: string;
    url: string;
}
export declare class GitCommitTree extends SpeakeasyBase {
    sha: string;
    url: string;
}
export declare class GitCommitVerification extends SpeakeasyBase {
    payload: string;
    reason: string;
    signature: string;
    verified: boolean;
}
/**
 * Low-level Git commit operations within a repository
**/
export declare class GitCommit extends SpeakeasyBase {
    author: GitCommitAuthor;
    committer: GitCommitCommitter;
    htmlUrl: string;
    message: string;
    nodeId: string;
    parents: GitCommitParents[];
    sha: string;
    tree: GitCommitTree;
    url: string;
    verification: GitCommitVerification;
}

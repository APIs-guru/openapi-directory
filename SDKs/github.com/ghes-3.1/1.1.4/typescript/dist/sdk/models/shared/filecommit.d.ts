import { SpeakeasyBase } from "../../../internal/utils";
export declare class FileCommitCommitAuthor extends SpeakeasyBase {
    date?: string;
    email?: string;
    name?: string;
}
export declare class FileCommitCommitCommitter extends SpeakeasyBase {
    date?: string;
    email?: string;
    name?: string;
}
export declare class FileCommitCommitParents extends SpeakeasyBase {
    htmlUrl?: string;
    sha?: string;
    url?: string;
}
export declare class FileCommitCommitTree extends SpeakeasyBase {
    sha?: string;
    url?: string;
}
export declare class FileCommitCommitVerification extends SpeakeasyBase {
    payload?: string;
    reason?: string;
    signature?: string;
    verified?: boolean;
}
export declare class FileCommitCommit extends SpeakeasyBase {
    author?: FileCommitCommitAuthor;
    committer?: FileCommitCommitCommitter;
    htmlUrl?: string;
    message?: string;
    nodeId?: string;
    parents?: FileCommitCommitParents[];
    sha?: string;
    tree?: FileCommitCommitTree;
    url?: string;
    verification?: FileCommitCommitVerification;
}
export declare class FileCommitContentLinks extends SpeakeasyBase {
    git?: string;
    html?: string;
    self?: string;
}
export declare class FileCommitContent extends SpeakeasyBase {
    links?: FileCommitContentLinks;
    downloadUrl?: string;
    gitUrl?: string;
    htmlUrl?: string;
    name?: string;
    path?: string;
    sha?: string;
    size?: number;
    type?: string;
    url?: string;
}
/**
 * File Commit
**/
export declare class FileCommit extends SpeakeasyBase {
    commit: FileCommitCommit;
    content: FileCommitContent;
}

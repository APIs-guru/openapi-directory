import { SpeakeasyBase } from "../../../internal/utils";
import { Commit } from "./commit";
import { DiffEntry } from "./diffentry";
export declare enum CommitComparisonStatusEnum {
    Diverged = "diverged",
    Ahead = "ahead",
    Behind = "behind",
    Identical = "identical"
}
/**
 * Commit Comparison
**/
export declare class CommitComparison extends SpeakeasyBase {
    aheadBy: number;
    baseCommit: Commit;
    behindBy: number;
    commits: Commit[];
    diffUrl: string;
    files: DiffEntry[];
    htmlUrl: string;
    mergeBaseCommit: Commit;
    patchUrl: string;
    permalinkUrl: string;
    status: CommitComparisonStatusEnum;
    totalCommits: number;
    url: string;
}

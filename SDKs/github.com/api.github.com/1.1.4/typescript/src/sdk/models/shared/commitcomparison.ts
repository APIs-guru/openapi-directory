import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Commit } from "./commit";
import { DiffEntry } from "./diffentry";


export enum CommitComparisonStatusEnum {
    Diverged = "diverged",
    Ahead = "ahead",
    Behind = "behind",
    Identical = "identical"
}


// CommitComparison
/** 
 * Commit Comparison
**/
export class CommitComparison extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ahead_by" })
  aheadBy: number;

  @SpeakeasyMetadata({ data: "json, name=base_commit" })
  baseCommit: Commit;

  @SpeakeasyMetadata({ data: "json, name=behind_by" })
  behindBy: number;

  @SpeakeasyMetadata({ data: "json, name=commits", elemType: Commit })
  commits: Commit[];

  @SpeakeasyMetadata({ data: "json, name=diff_url" })
  diffUrl: string;

  @SpeakeasyMetadata({ data: "json, name=files", elemType: DiffEntry })
  files: DiffEntry[];

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=merge_base_commit" })
  mergeBaseCommit: Commit;

  @SpeakeasyMetadata({ data: "json, name=patch_url" })
  patchUrl: string;

  @SpeakeasyMetadata({ data: "json, name=permalink_url" })
  permalinkUrl: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: CommitComparisonStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=total_commits" })
  totalCommits: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

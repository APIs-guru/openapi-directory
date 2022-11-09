import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Commit } from "./commit";
import { Commit } from "./commit";
import { DiffEntry } from "./diffentry";
import { Commit } from "./commit";

export enum CommitComparisonStatusEnum {
    Diverged = "diverged"
,    Ahead = "ahead"
,    Behind = "behind"
,    Identical = "identical"
}


// CommitComparison
/** 
 * Commit Comparison
**/
export class CommitComparison extends SpeakeasyBase {
  @Metadata({ data: "json, name=ahead_by" })
  aheadBy: number;

  @Metadata({ data: "json, name=base_commit" })
  baseCommit: Commit;

  @Metadata({ data: "json, name=behind_by" })
  behindBy: number;

  @Metadata({ data: "json, name=commits", elemType: shared.Commit })
  commits: Commit[];

  @Metadata({ data: "json, name=diff_url" })
  diffUrl: string;

  @Metadata({ data: "json, name=files", elemType: shared.DiffEntry })
  files: DiffEntry[];

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=merge_base_commit" })
  mergeBaseCommit: Commit;

  @Metadata({ data: "json, name=patch_url" })
  patchUrl: string;

  @Metadata({ data: "json, name=permalink_url" })
  permalinkUrl: string;

  @Metadata({ data: "json, name=status" })
  status: CommitComparisonStatusEnum;

  @Metadata({ data: "json, name=total_commits" })
  totalCommits: number;

  @Metadata({ data: "json, name=url" })
  url: string;
}

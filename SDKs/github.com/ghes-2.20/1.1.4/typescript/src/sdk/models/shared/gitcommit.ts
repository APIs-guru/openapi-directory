import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


// GitCommitAuthor
/** 
 * Identifying information for the git-user
**/
export class GitCommitAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date: Date;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// GitCommitCommitter
/** 
 * Identifying information for the git-user
**/
export class GitCommitCommitter extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date: Date;

  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class GitCommitParents extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class GitCommitTree extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


export class GitCommitVerification extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload: string;

  @Metadata({ data: "json, name=reason" })
  reason: string;

  @Metadata({ data: "json, name=signature" })
  signature: string;

  @Metadata({ data: "json, name=verified" })
  verified: boolean;
}


// GitCommit
/** 
 * Low-level Git commit operations within a repository
**/
export class GitCommit extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author: GitCommitAuthor;

  @Metadata({ data: "json, name=committer" })
  committer: GitCommitCommitter;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=parents", elemType: shared.GitCommitParents })
  parents: GitCommitParents[];

  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=tree" })
  tree: GitCommitTree;

  @Metadata({ data: "json, name=url" })
  url: string;

  @Metadata({ data: "json, name=verification" })
  verification: GitCommitVerification;
}

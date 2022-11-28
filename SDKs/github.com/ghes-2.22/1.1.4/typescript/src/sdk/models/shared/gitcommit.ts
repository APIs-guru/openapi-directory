import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GitCommitAuthor
/** 
 * Identifying information for the git-user
**/
export class GitCommitAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// GitCommitCommitter
/** 
 * Identifying information for the git-user
**/
export class GitCommitCommitter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date: Date;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class GitCommitParents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class GitCommitTree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


export class GitCommitVerification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified: boolean;
}


// GitCommit
/** 
 * Low-level Git commit operations within a repository
**/
export class GitCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author: GitCommitAuthor;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer: GitCommitCommitter;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=parents", elemType: GitCommitParents })
  parents: GitCommitParents[];

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=tree" })
  tree: GitCommitTree;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;

  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification: GitCommitVerification;
}

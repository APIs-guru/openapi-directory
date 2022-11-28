import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FileCommitCommitAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class FileCommitCommitCommitter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class FileCommitCommitParents extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class FileCommitCommitTree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class FileCommitCommitVerification extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payload" })
  payload?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=signature" })
  signature?: string;

  @SpeakeasyMetadata({ data: "json, name=verified" })
  verified?: boolean;
}


export class FileCommitCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author?: FileCommitCommitAuthor;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer?: FileCommitCommitCommitter;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId?: string;

  @SpeakeasyMetadata({ data: "json, name=parents", elemType: FileCommitCommitParents })
  parents?: FileCommitCommitParents[];

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha?: string;

  @SpeakeasyMetadata({ data: "json, name=tree" })
  tree?: FileCommitCommitTree;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=verification" })
  verification?: FileCommitCommitVerification;
}


export class FileCommitContentLinks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=git" })
  git?: string;

  @SpeakeasyMetadata({ data: "json, name=html" })
  html?: string;

  @SpeakeasyMetadata({ data: "json, name=self" })
  self?: string;
}


export class FileCommitContent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=_links" })
  links?: FileCommitContentLinks;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=git_url" })
  gitUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha?: string;

  @SpeakeasyMetadata({ data: "json, name=size" })
  size?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


// FileCommit
/** 
 * File Commit
**/
export class FileCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit: FileCommitCommit;

  @SpeakeasyMetadata({ data: "json, name=content" })
  content: FileCommitContent;
}

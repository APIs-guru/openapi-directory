import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class FileCommitCommitAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class FileCommitCommitCommitter extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}


export class FileCommitCommitParents extends SpeakeasyBase {
  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=sha" })
  sha?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class FileCommitCommitTree extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha" })
  sha?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class FileCommitCommitVerification extends SpeakeasyBase {
  @Metadata({ data: "json, name=payload" })
  payload?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=signature" })
  signature?: string;

  @Metadata({ data: "json, name=verified" })
  verified?: boolean;
}


export class FileCommitCommit extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author?: FileCommitCommitAuthor;

  @Metadata({ data: "json, name=committer" })
  committer?: FileCommitCommitCommitter;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId?: string;

  @Metadata({ data: "json, name=parents", elemType: shared.FileCommitCommitParents })
  parents?: FileCommitCommitParents[];

  @Metadata({ data: "json, name=sha" })
  sha?: string;

  @Metadata({ data: "json, name=tree" })
  tree?: FileCommitCommitTree;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=verification" })
  verification?: FileCommitCommitVerification;
}


export class FileCommitContentLinks extends SpeakeasyBase {
  @Metadata({ data: "json, name=git" })
  git?: string;

  @Metadata({ data: "json, name=html" })
  html?: string;

  @Metadata({ data: "json, name=self" })
  self?: string;
}


export class FileCommitContent extends SpeakeasyBase {
  @Metadata({ data: "json, name=_links" })
  links?: FileCommitContentLinks;

  @Metadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @Metadata({ data: "json, name=git_url" })
  gitUrl?: string;

  @Metadata({ data: "json, name=html_url" })
  htmlUrl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=sha" })
  sha?: string;

  @Metadata({ data: "json, name=size" })
  size?: number;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


// FileCommit
/** 
 * File Commit
**/
export class FileCommit extends SpeakeasyBase {
  @Metadata({ data: "json, name=commit" })
  commit: FileCommitCommit;

  @Metadata({ data: "json, name=content" })
  content: FileCommitContent;
}

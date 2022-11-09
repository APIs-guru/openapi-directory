import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SimpleCommitAuthor extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


export class SimpleCommitCommitter extends SpeakeasyBase {
  @Metadata({ data: "json, name=email" })
  email: string;

  @Metadata({ data: "json, name=name" })
  name: string;
}


// SimpleCommit
/** 
 * Simple Commit
**/
export class SimpleCommit extends SpeakeasyBase {
  @Metadata({ data: "json, name=author" })
  author: SimpleCommitAuthor;

  @Metadata({ data: "json, name=committer" })
  committer: SimpleCommitCommitter;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=message" })
  message: string;

  @Metadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @Metadata({ data: "json, name=tree_id" })
  treeId: string;
}

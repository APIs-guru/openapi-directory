import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SimpleCommitAuthor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class SimpleCommitCommitter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=email" })
  email: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


// SimpleCommit
/** 
 * Simple Commit
**/
export class SimpleCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=author" })
  author: SimpleCommitAuthor;

  @SpeakeasyMetadata({ data: "json, name=committer" })
  committer: SimpleCommitCommitter;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "json, name=timestamp" })
  timestamp: Date;

  @SpeakeasyMetadata({ data: "json, name=tree_id" })
  treeId: string;
}

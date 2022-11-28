import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GitRefObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


// GitRef
/** 
 * Git references within a repository
**/
export class GitRef extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=object" })
  object: GitRefObject;

  @SpeakeasyMetadata({ data: "json, name=ref" })
  ref: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

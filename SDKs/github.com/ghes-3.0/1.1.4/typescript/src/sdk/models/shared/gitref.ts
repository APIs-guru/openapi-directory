import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GitRefObject extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=type" })
  type: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// GitRef
/** 
 * Git references within a repository
**/
export class GitRef extends SpeakeasyBase {
  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=object" })
  object: GitRefObject;

  @Metadata({ data: "json, name=ref" })
  ref: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TagCommit extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=url" })
  url: string;
}


// Tag
/** 
 * Tag
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=commit" })
  commit: TagCommit;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=node_id" })
  nodeId: string;

  @Metadata({ data: "json, name=tarball_url" })
  tarballUrl: string;

  @Metadata({ data: "json, name=zipball_url" })
  zipballUrl: string;
}

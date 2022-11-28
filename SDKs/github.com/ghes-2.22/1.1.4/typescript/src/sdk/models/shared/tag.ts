import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TagCommit extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}


// Tag
/** 
 * Tag
**/
export class Tag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=commit" })
  commit: TagCommit;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=node_id" })
  nodeId: string;

  @SpeakeasyMetadata({ data: "json, name=tarball_url" })
  tarballUrl: string;

  @SpeakeasyMetadata({ data: "json, name=zipball_url" })
  zipballUrl: string;
}

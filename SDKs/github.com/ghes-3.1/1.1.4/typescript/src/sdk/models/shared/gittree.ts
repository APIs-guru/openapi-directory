import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GitTreeTree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

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


// GitTree
/** 
 * The hierarchy between files in a Git repository.
**/
export class GitTree extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sha" })
  sha: string;

  @SpeakeasyMetadata({ data: "json, name=tree", elemType: GitTreeTree })
  tree: GitTreeTree[];

  @SpeakeasyMetadata({ data: "json, name=truncated" })
  truncated: boolean;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url: string;
}

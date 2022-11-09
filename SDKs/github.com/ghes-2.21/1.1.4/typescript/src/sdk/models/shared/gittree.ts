import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GitTreeTree extends SpeakeasyBase {
  @Metadata({ data: "json, name=mode" })
  mode?: string;

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


// GitTree
/** 
 * The hierarchy between files in a Git repository.
**/
export class GitTree extends SpeakeasyBase {
  @Metadata({ data: "json, name=sha" })
  sha: string;

  @Metadata({ data: "json, name=tree", elemType: shared.GitTreeTree })
  tree: GitTreeTree[];

  @Metadata({ data: "json, name=truncated" })
  truncated: boolean;

  @Metadata({ data: "json, name=url" })
  url: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Artifact extends SpeakeasyBase {
  @Metadata({ data: "json, name=node_index" })
  nodeIndex?: number;

  @Metadata({ data: "json, name=path" })
  path?: string;

  @Metadata({ data: "json, name=pretty_path" })
  prettyPath?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Artifact extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=node_index" })
  nodeIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=pretty_path" })
  prettyPath?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}

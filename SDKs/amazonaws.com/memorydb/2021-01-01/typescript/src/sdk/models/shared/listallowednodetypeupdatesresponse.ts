import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ListAllowedNodeTypeUpdatesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ScaleDownNodeTypes" })
  scaleDownNodeTypes?: string[];

  @SpeakeasyMetadata({ data: "json, name=ScaleUpNodeTypes" })
  scaleUpNodeTypes?: string[];
}

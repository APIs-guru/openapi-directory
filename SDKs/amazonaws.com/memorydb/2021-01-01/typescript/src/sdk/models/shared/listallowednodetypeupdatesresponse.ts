import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ListAllowedNodeTypeUpdatesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=ScaleDownNodeTypes" })
  scaleDownNodeTypes?: string[];

  @Metadata({ data: "json, name=ScaleUpNodeTypes" })
  scaleUpNodeTypes?: string[];
}

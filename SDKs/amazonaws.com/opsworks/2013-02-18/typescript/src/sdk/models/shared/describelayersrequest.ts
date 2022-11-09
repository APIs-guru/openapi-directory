import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeLayersRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LayerIds" })
  layerIds?: string[];

  @Metadata({ data: "json, name=StackId" })
  stackId?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLayersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LayerIds" })
  layerIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}

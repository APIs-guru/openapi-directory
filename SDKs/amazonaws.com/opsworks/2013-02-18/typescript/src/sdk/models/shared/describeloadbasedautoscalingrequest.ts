import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeLoadBasedAutoScalingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LayerIds" })
  layerIds: string[];
}

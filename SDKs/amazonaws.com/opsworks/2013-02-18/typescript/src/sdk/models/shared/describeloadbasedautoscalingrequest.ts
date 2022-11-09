import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DescribeLoadBasedAutoScalingRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=LayerIds" })
  layerIds: string[];
}

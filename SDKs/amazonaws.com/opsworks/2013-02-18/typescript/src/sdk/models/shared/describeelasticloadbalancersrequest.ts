import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DescribeElasticLoadBalancersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LayerIds" })
  layerIds?: string[];

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId?: string;
}

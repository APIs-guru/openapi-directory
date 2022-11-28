import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DetachElasticLoadBalancerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElasticLoadBalancerName" })
  elasticLoadBalancerName: string;

  @SpeakeasyMetadata({ data: "json, name=LayerId" })
  layerId: string;
}

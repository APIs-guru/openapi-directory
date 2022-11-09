import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DetachElasticLoadBalancerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElasticLoadBalancerName" })
  elasticLoadBalancerName: string;

  @Metadata({ data: "json, name=LayerId" })
  layerId: string;
}

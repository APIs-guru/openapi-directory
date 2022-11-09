import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AttachElasticLoadBalancerRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElasticLoadBalancerName" })
  elasticLoadBalancerName: string;

  @Metadata({ data: "json, name=LayerId" })
  layerId: string;
}

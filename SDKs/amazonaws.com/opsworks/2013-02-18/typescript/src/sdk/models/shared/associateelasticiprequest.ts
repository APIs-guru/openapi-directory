import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class AssociateElasticIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElasticIp" })
  elasticIp: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}

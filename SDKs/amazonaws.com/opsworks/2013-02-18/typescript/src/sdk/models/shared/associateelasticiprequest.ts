import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class AssociateElasticIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElasticIp" })
  elasticIp: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;
}

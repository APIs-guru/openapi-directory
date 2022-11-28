import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DeregisterElasticIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElasticIp" })
  elasticIp: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeregisterElasticIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElasticIp" })
  elasticIp: string;
}

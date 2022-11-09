import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateElasticIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElasticIp" })
  elasticIp: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}

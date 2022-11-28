import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateElasticIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElasticIp" })
  elasticIp: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}

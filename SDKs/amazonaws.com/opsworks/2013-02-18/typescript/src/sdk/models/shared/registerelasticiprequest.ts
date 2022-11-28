import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class RegisterElasticIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElasticIp" })
  elasticIp: string;

  @SpeakeasyMetadata({ data: "json, name=StackId" })
  stackId: string;
}

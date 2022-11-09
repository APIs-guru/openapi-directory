import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RegisterElasticIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElasticIp" })
  elasticIp: string;

  @Metadata({ data: "json, name=StackId" })
  stackId: string;
}

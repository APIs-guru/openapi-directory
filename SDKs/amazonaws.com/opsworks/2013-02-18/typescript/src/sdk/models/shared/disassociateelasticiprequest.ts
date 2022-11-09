import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DisassociateElasticIpRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=ElasticIp" })
  elasticIp: string;
}

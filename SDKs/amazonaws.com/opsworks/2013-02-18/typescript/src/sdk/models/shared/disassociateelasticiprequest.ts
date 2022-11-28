import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class DisassociateElasticIpRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ElasticIp" })
  elasticIp: string;
}

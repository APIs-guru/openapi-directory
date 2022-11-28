import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElasticIpStatus
/** 
 * Describes the status of the elastic IP (EIP) address.
**/
export class ElasticIpStatus extends SpeakeasyBase {
  @SpeakeasyMetadata()
  elasticIp?: string;

  @SpeakeasyMetadata()
  status?: string;
}

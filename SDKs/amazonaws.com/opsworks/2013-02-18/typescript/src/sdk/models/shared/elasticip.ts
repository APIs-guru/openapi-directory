import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ElasticIp
/** 
 * Describes an Elastic IP address.
**/
export class ElasticIp extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @SpeakeasyMetadata({ data: "json, name=Ip" })
  ip?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Region" })
  region?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ElasticIp
/** 
 * Describes an Elastic IP address.
**/
export class ElasticIp extends SpeakeasyBase {
  @Metadata({ data: "json, name=Domain" })
  domain?: string;

  @Metadata({ data: "json, name=InstanceId" })
  instanceId?: string;

  @Metadata({ data: "json, name=Ip" })
  ip?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Region" })
  region?: string;
}

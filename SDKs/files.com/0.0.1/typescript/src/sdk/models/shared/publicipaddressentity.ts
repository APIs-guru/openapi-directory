import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PublicIpAddressEntity
/** 
 * List all possible public IP addresses
**/
export class PublicIpAddressEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @Metadata({ data: "json, name=server_name" })
  serverName?: string;
}

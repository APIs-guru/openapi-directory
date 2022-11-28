import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PublicIpAddressEntity
/** 
 * List all possible public IP addresses
**/
export class PublicIpAddressEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=server_name" })
  serverName?: string;
}

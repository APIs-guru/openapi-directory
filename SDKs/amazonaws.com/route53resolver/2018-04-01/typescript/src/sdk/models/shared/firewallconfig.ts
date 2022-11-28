import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirewallFailOpenStatusEnum } from "./firewallfailopenstatusenum";



// FirewallConfig
/** 
 * Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 
**/
export class FirewallConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=FirewallFailOpen" })
  firewallFailOpen?: FirewallFailOpenStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=Id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallFailOpenStatusEnum } from "./firewallfailopenstatusenum";


// FirewallConfig
/** 
 * Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC). 
**/
export class FirewallConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=FirewallFailOpen" })
  firewallFailOpen?: FirewallFailOpenStatusEnum;

  @Metadata({ data: "json, name=Id" })
  id?: string;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=ResourceId" })
  resourceId?: string;
}

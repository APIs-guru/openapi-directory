import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FirewallFailOpenStatusEnum } from "./firewallfailopenstatusenum";
/**
 * Configuration of the firewall behavior provided by DNS Firewall for a single VPC from Amazon Virtual Private Cloud (Amazon VPC).
**/
export declare class FirewallConfig extends SpeakeasyBase {
    firewallFailOpen?: FirewallFailOpenStatusEnum;
    id?: string;
    ownerId?: string;
    resourceId?: string;
}

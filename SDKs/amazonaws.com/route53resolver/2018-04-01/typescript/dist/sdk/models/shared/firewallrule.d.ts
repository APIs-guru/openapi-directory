import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
import { BlockOverrideDnsTypeEnum } from "./blockoverridednstypeenum";
import { BlockResponseEnum } from "./blockresponseenum";
/**
 * A single firewall rule in a rule group.
**/
export declare class FirewallRule extends SpeakeasyBase {
    action?: ActionEnum;
    blockOverrideDnsType?: BlockOverrideDnsTypeEnum;
    blockOverrideDomain?: string;
    blockOverrideTtl?: number;
    blockResponse?: BlockResponseEnum;
    creationTime?: string;
    creatorRequestId?: string;
    firewallDomainListId?: string;
    firewallRuleGroupId?: string;
    modificationTime?: string;
    name?: string;
    priority?: number;
}

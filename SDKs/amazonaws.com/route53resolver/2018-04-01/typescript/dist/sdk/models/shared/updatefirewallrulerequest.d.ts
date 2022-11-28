import { SpeakeasyBase } from "../../../internal/utils";
import { ActionEnum } from "./actionenum";
import { BlockOverrideDnsTypeEnum } from "./blockoverridednstypeenum";
import { BlockResponseEnum } from "./blockresponseenum";
export declare class UpdateFirewallRuleRequest extends SpeakeasyBase {
    action?: ActionEnum;
    blockOverrideDnsType?: BlockOverrideDnsTypeEnum;
    blockOverrideDomain?: string;
    blockOverrideTtl?: number;
    blockResponse?: BlockResponseEnum;
    firewallDomainListId: string;
    firewallRuleGroupId: string;
    name?: string;
    priority?: number;
}

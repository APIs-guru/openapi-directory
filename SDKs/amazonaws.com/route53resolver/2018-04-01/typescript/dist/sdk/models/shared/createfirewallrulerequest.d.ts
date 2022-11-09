import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ActionEnum } from "./actionenum";
import { BlockOverrideDnsTypeEnum } from "./blockoverridednstypeenum";
import { BlockResponseEnum } from "./blockresponseenum";
export declare class CreateFirewallRuleRequest extends SpeakeasyBase {
    action: ActionEnum;
    blockOverrideDnsType?: BlockOverrideDnsTypeEnum;
    blockOverrideDomain?: string;
    blockOverrideTtl?: number;
    blockResponse?: BlockResponseEnum;
    creatorRequestId: string;
    firewallDomainListId: string;
    firewallRuleGroupId: string;
    name: string;
    priority: number;
}

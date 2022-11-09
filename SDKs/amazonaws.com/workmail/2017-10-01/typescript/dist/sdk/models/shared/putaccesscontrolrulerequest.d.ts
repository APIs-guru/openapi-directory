import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessControlRuleEffectEnum } from "./accesscontrolruleeffectenum";
export declare class PutAccessControlRuleRequest extends SpeakeasyBase {
    actions?: string[];
    description: string;
    effect: AccessControlRuleEffectEnum;
    ipRanges?: string[];
    name: string;
    notActions?: string[];
    notIpRanges?: string[];
    notUserIds?: string[];
    organizationId: string;
    userIds?: string[];
}

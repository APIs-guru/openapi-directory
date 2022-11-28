import { SpeakeasyBase } from "../../../internal/utils";
import { AccessControlRuleEffectEnum } from "./accesscontrolruleeffectenum";
/**
 * A rule that controls access to an Amazon WorkMail organization.
**/
export declare class AccessControlRule extends SpeakeasyBase {
    actions?: string[];
    dateCreated?: Date;
    dateModified?: Date;
    description?: string;
    effect?: AccessControlRuleEffectEnum;
    ipRanges?: string[];
    name?: string;
    notActions?: string[];
    notIpRanges?: string[];
    notUserIds?: string[];
    userIds?: string[];
}

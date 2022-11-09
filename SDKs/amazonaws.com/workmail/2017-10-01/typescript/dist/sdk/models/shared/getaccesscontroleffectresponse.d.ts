import { SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessControlRuleEffectEnum } from "./accesscontrolruleeffectenum";
export declare class GetAccessControlEffectResponse extends SpeakeasyBase {
    effect?: AccessControlRuleEffectEnum;
    matchedRules?: string[];
}

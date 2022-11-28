import { SpeakeasyBase } from "../../../internal/utils";
import { RuleGroupUpdate } from "./rulegroupupdate";
export declare class UpdateRuleGroupRequest extends SpeakeasyBase {
    changeToken: string;
    ruleGroupId: string;
    updates: RuleGroupUpdate[];
}

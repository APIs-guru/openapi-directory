import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleUpdate } from "./ruleupdate";
export declare class UpdateRuleRequest extends SpeakeasyBase {
    changeToken: string;
    ruleId: string;
    updates: RuleUpdate[];
}

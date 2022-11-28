import { SpeakeasyBase } from "../../../internal/utils";
import { RuleUpdate } from "./ruleupdate";
export declare class UpdateRuleRequest extends SpeakeasyBase {
    changeToken: string;
    ruleId: string;
    updates: RuleUpdate[];
}

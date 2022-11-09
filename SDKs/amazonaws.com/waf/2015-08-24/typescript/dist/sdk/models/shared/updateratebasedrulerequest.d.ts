import { SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleUpdate } from "./ruleupdate";
export declare class UpdateRateBasedRuleRequest extends SpeakeasyBase {
    changeToken: string;
    rateLimit: number;
    ruleId: string;
    updates: RuleUpdate[];
}

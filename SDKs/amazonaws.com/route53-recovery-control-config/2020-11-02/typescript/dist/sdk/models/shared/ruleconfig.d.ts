import { SpeakeasyBase } from "../../../internal/utils";
import { RuleTypeEnum } from "./ruletypeenum";
/**
 * The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many controls must be enabled after a transaction completes.
**/
export declare class RuleConfig extends SpeakeasyBase {
    inverted: boolean;
    threshold: number;
    type: RuleTypeEnum;
}

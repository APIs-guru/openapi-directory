import { SpeakeasyBase } from "../../../internal/utils";
import { RuleConfig } from "./ruleconfig";
import { StatusEnum } from "./statusenum";
/**
 * An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
**/
export declare class AssertionRule extends SpeakeasyBase {
    assertedControls: string[];
    controlPanelArn: string;
    name: string;
    ruleConfig: RuleConfig;
    safetyRuleArn: string;
    status: StatusEnum;
    waitPeriodMs: number;
}

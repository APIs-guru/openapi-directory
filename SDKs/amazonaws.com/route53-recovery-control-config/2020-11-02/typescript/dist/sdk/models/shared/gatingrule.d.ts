import { SpeakeasyBase } from "../../../internal/utils";
import { RuleConfig } from "./ruleconfig";
import { StatusEnum } from "./statusenum";
/**
 * A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
**/
export declare class GatingRule extends SpeakeasyBase {
    controlPanelArn: string;
    gatingControls: string[];
    name: string;
    ruleConfig: RuleConfig;
    safetyRuleArn: string;
    status: StatusEnum;
    targetControls: string[];
    waitPeriodMs: number;
}

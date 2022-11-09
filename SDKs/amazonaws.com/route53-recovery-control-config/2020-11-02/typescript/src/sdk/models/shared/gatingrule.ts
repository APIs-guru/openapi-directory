import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleConfig } from "./ruleconfig";
import { StatusEnum } from "./statusenum";


// GatingRule
/** 
 * A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
**/
export class GatingRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=ControlPanelArn" })
  controlPanelArn: string;

  @Metadata({ data: "json, name=GatingControls" })
  gatingControls: string[];

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RuleConfig" })
  ruleConfig: RuleConfig;

  @Metadata({ data: "json, name=SafetyRuleArn" })
  safetyRuleArn: string;

  @Metadata({ data: "json, name=Status" })
  status: StatusEnum;

  @Metadata({ data: "json, name=TargetControls" })
  targetControls: string[];

  @Metadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs: number;
}

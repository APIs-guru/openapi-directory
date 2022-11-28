import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleConfig } from "./ruleconfig";
import { StatusEnum } from "./statusenum";



// GatingRule
/** 
 * A gating rule verifies that a set of gating controls evaluates as true, based on a rule configuration that you specify. If the gating rule evaluates to true, Amazon Route 53 Application Recovery Controller allows a set of routing control state changes to run and complete against the set of target controls.
**/
export class GatingRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ControlPanelArn" })
  controlPanelArn: string;

  @SpeakeasyMetadata({ data: "json, name=GatingControls" })
  gatingControls: string[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RuleConfig" })
  ruleConfig: RuleConfig;

  @SpeakeasyMetadata({ data: "json, name=SafetyRuleArn" })
  safetyRuleArn: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetControls" })
  targetControls: string[];

  @SpeakeasyMetadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs: number;
}

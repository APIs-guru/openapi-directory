import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleConfig } from "./ruleconfig";
import { StatusEnum } from "./statusenum";



// AssertionRule
/** 
 * An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
**/
export class AssertionRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssertedControls" })
  assertedControls: string[];

  @SpeakeasyMetadata({ data: "json, name=ControlPanelArn" })
  controlPanelArn: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=RuleConfig" })
  ruleConfig: RuleConfig;

  @SpeakeasyMetadata({ data: "json, name=SafetyRuleArn" })
  safetyRuleArn: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs: number;
}

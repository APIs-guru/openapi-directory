import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleConfig } from "./ruleconfig";
import { StatusEnum } from "./statusenum";


// AssertionRule
/** 
 * An assertion rule enforces that, when a routing control state is changed, the criteria set by the rule configuration is met. Otherwise, the change to the routing control is not accepted.
**/
export class AssertionRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssertedControls" })
  assertedControls: string[];

  @Metadata({ data: "json, name=ControlPanelArn" })
  controlPanelArn: string;

  @Metadata({ data: "json, name=Name" })
  name: string;

  @Metadata({ data: "json, name=RuleConfig" })
  ruleConfig: RuleConfig;

  @Metadata({ data: "json, name=SafetyRuleArn" })
  safetyRuleArn: string;

  @Metadata({ data: "json, name=Status" })
  status: StatusEnum;

  @Metadata({ data: "json, name=WaitPeriodMs" })
  waitPeriodMs: number;
}

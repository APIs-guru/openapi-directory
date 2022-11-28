import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleEvaluationStatusEnum } from "./ruleevaluationstatusenum";



// DebugRuleEvaluationStatus
/** 
 * Information about the status of the rule evaluation.
**/
export class DebugRuleEvaluationStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=RuleConfigurationName" })
  ruleConfigurationName?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleEvaluationJobArn" })
  ruleEvaluationJobArn?: string;

  @SpeakeasyMetadata({ data: "json, name=RuleEvaluationStatus" })
  ruleEvaluationStatus?: RuleEvaluationStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;
}

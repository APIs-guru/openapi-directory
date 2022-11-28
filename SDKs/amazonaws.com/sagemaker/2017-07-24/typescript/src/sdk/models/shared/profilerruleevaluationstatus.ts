import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RuleEvaluationStatusEnum } from "./ruleevaluationstatusenum";



// ProfilerRuleEvaluationStatus
/** 
 * Information about the status of the rule evaluation.
**/
export class ProfilerRuleEvaluationStatus extends SpeakeasyBase {
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

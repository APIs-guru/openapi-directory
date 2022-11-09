import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RuleEvaluationStatusEnum } from "./ruleevaluationstatusenum";


// ProfilerRuleEvaluationStatus
/** 
 * Information about the status of the rule evaluation.
**/
export class ProfilerRuleEvaluationStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=LastModifiedTime" })
  lastModifiedTime?: Date;

  @Metadata({ data: "json, name=RuleConfigurationName" })
  ruleConfigurationName?: string;

  @Metadata({ data: "json, name=RuleEvaluationJobArn" })
  ruleEvaluationJobArn?: string;

  @Metadata({ data: "json, name=RuleEvaluationStatus" })
  ruleEvaluationStatus?: RuleEvaluationStatusEnum;

  @Metadata({ data: "json, name=StatusDetails" })
  statusDetails?: string;
}

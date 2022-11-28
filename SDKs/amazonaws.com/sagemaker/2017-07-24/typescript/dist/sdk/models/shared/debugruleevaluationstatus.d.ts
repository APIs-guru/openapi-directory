import { SpeakeasyBase } from "../../../internal/utils";
import { RuleEvaluationStatusEnum } from "./ruleevaluationstatusenum";
/**
 * Information about the status of the rule evaluation.
**/
export declare class DebugRuleEvaluationStatus extends SpeakeasyBase {
    lastModifiedTime?: Date;
    ruleConfigurationName?: string;
    ruleEvaluationJobArn?: string;
    ruleEvaluationStatus?: RuleEvaluationStatusEnum;
    statusDetails?: string;
}

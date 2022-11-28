import { SpeakeasyBase } from "../../../internal/utils";
import { FailureDetails } from "./failuredetails";
import { AutomationExecutionStatusEnum } from "./automationexecutionstatusenum";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";
/**
 * Detailed information about an the execution state of an Automation step.
**/
export declare class StepExecution extends SpeakeasyBase {
    action?: string;
    executionEndTime?: Date;
    executionStartTime?: Date;
    failureDetails?: FailureDetails;
    failureMessage?: string;
    inputs?: Map<string, string>;
    isCritical?: boolean;
    isEnd?: boolean;
    maxAttempts?: number;
    nextStep?: string;
    onFailure?: string;
    outputs?: Map<string, string[]>;
    overriddenParameters?: Map<string, string[]>;
    response?: string;
    responseCode?: string;
    stepExecutionId?: string;
    stepName?: string;
    stepStatus?: AutomationExecutionStatusEnum;
    targetLocation?: TargetLocation;
    targets?: Target[];
    timeoutSeconds?: number;
    validNextSteps?: string[];
}

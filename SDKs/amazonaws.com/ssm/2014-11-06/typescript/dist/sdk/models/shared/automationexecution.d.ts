import { SpeakeasyBase } from "../../../internal/utils";
import { AutomationExecutionStatusEnum } from "./automationexecutionstatusenum";
import { AutomationSubtypeEnum } from "./automationsubtypeenum";
import { ExecutionModeEnum } from "./executionmodeenum";
import { ProgressCounters } from "./progresscounters";
import { ResolvedTargets } from "./resolvedtargets";
import { Runbook } from "./runbook";
import { StepExecution } from "./stepexecution";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";
/**
 * Detailed information about the current state of an individual Automation execution.
**/
export declare class AutomationExecution extends SpeakeasyBase {
    associationId?: string;
    automationExecutionId?: string;
    automationExecutionStatus?: AutomationExecutionStatusEnum;
    automationSubtype?: AutomationSubtypeEnum;
    changeRequestName?: string;
    currentAction?: string;
    currentStepName?: string;
    documentName?: string;
    documentVersion?: string;
    executedBy?: string;
    executionEndTime?: Date;
    executionStartTime?: Date;
    failureMessage?: string;
    maxConcurrency?: string;
    maxErrors?: string;
    mode?: ExecutionModeEnum;
    opsItemId?: string;
    outputs?: Map<string, string[]>;
    parameters?: Map<string, string[]>;
    parentAutomationExecutionId?: string;
    progressCounters?: ProgressCounters;
    resolvedTargets?: ResolvedTargets;
    runbooks?: Runbook[];
    scheduledTime?: Date;
    stepExecutions?: StepExecution[];
    stepExecutionsTruncated?: boolean;
    target?: string;
    targetLocations?: TargetLocation[];
    targetMaps?: Map<string, string[]>[];
    targetParameterName?: string;
    targets?: Target[];
}

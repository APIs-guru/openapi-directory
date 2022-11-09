import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AutomationExecutionStatusEnum } from "./automationexecutionstatusenum";
import { AutomationSubtypeEnum } from "./automationsubtypeenum";
import { ExecutionModeEnum } from "./executionmodeenum";
import { ProgressCounters } from "./progresscounters";
import { ResolvedTargets } from "./resolvedtargets";
import { Runbook } from "./runbook";
import { StepExecution } from "./stepexecution";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";


// AutomationExecution
/** 
 * Detailed information about the current state of an individual Automation execution.
**/
export class AutomationExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=AutomationExecutionId" })
  automationExecutionId?: string;

  @Metadata({ data: "json, name=AutomationExecutionStatus" })
  automationExecutionStatus?: AutomationExecutionStatusEnum;

  @Metadata({ data: "json, name=AutomationSubtype" })
  automationSubtype?: AutomationSubtypeEnum;

  @Metadata({ data: "json, name=ChangeRequestName" })
  changeRequestName?: string;

  @Metadata({ data: "json, name=CurrentAction" })
  currentAction?: string;

  @Metadata({ data: "json, name=CurrentStepName" })
  currentStepName?: string;

  @Metadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @Metadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @Metadata({ data: "json, name=ExecutedBy" })
  executedBy?: string;

  @Metadata({ data: "json, name=ExecutionEndTime" })
  executionEndTime?: Date;

  @Metadata({ data: "json, name=ExecutionStartTime" })
  executionStartTime?: Date;

  @Metadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;

  @Metadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @Metadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @Metadata({ data: "json, name=Mode" })
  mode?: ExecutionModeEnum;

  @Metadata({ data: "json, name=OpsItemId" })
  opsItemId?: string;

  @Metadata({ data: "json, name=Outputs" })
  outputs?: Map<string, string[]>;

  @Metadata({ data: "json, name=Parameters" })
  parameters?: Map<string, string[]>;

  @Metadata({ data: "json, name=ParentAutomationExecutionId" })
  parentAutomationExecutionId?: string;

  @Metadata({ data: "json, name=ProgressCounters" })
  progressCounters?: ProgressCounters;

  @Metadata({ data: "json, name=ResolvedTargets" })
  resolvedTargets?: ResolvedTargets;

  @Metadata({ data: "json, name=Runbooks", elemType: shared.Runbook })
  runbooks?: Runbook[];

  @Metadata({ data: "json, name=ScheduledTime" })
  scheduledTime?: Date;

  @Metadata({ data: "json, name=StepExecutions", elemType: shared.StepExecution })
  stepExecutions?: StepExecution[];

  @Metadata({ data: "json, name=StepExecutionsTruncated" })
  stepExecutionsTruncated?: boolean;

  @Metadata({ data: "json, name=Target" })
  target?: string;

  @Metadata({ data: "json, name=TargetLocations", elemType: shared.TargetLocation })
  targetLocations?: TargetLocation[];

  @Metadata({ data: "json, name=TargetMaps" })
  targetMaps?: Map<string, string[]>[];

  @Metadata({ data: "json, name=TargetParameterName" })
  targetParameterName?: string;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];
}

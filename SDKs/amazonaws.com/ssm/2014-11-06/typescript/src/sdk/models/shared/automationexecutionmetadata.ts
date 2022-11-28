import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutomationExecutionStatusEnum } from "./automationexecutionstatusenum";
import { AutomationSubtypeEnum } from "./automationsubtypeenum";
import { AutomationTypeEnum } from "./automationtypeenum";
import { ExecutionModeEnum } from "./executionmodeenum";
import { ResolvedTargets } from "./resolvedtargets";
import { Runbook } from "./runbook";
import { Target } from "./target";



// AutomationExecutionMetadata
/** 
 * Details about a specific Automation execution.
**/
export class AutomationExecutionMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=AutomationExecutionId" })
  automationExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=AutomationExecutionStatus" })
  automationExecutionStatus?: AutomationExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=AutomationSubtype" })
  automationSubtype?: AutomationSubtypeEnum;

  @SpeakeasyMetadata({ data: "json, name=AutomationType" })
  automationType?: AutomationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ChangeRequestName" })
  changeRequestName?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentAction" })
  currentAction?: string;

  @SpeakeasyMetadata({ data: "json, name=CurrentStepName" })
  currentStepName?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentName" })
  documentName?: string;

  @SpeakeasyMetadata({ data: "json, name=DocumentVersion" })
  documentVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutedBy" })
  executedBy?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionEndTime" })
  executionEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExecutionStartTime" })
  executionStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=LogFile" })
  logFile?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxConcurrency" })
  maxConcurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=MaxErrors" })
  maxErrors?: string;

  @SpeakeasyMetadata({ data: "json, name=Mode" })
  mode?: ExecutionModeEnum;

  @SpeakeasyMetadata({ data: "json, name=OpsItemId" })
  opsItemId?: string;

  @SpeakeasyMetadata({ data: "json, name=Outputs" })
  outputs?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=ParentAutomationExecutionId" })
  parentAutomationExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=ResolvedTargets" })
  resolvedTargets?: ResolvedTargets;

  @SpeakeasyMetadata({ data: "json, name=Runbooks", elemType: Runbook })
  runbooks?: Runbook[];

  @SpeakeasyMetadata({ data: "json, name=ScheduledTime" })
  scheduledTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=Target" })
  target?: string;

  @SpeakeasyMetadata({ data: "json, name=TargetMaps" })
  targetMaps?: Map<string, string[]>[];

  @SpeakeasyMetadata({ data: "json, name=TargetParameterName" })
  targetParameterName?: string;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets?: Target[];
}

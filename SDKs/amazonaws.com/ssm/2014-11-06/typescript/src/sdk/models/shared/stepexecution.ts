import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FailureDetails } from "./failuredetails";
import { AutomationExecutionStatusEnum } from "./automationexecutionstatusenum";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";


// StepExecution
/** 
 * Detailed information about an the execution state of an Automation step.
**/
export class StepExecution extends SpeakeasyBase {
  @Metadata({ data: "json, name=Action" })
  action?: string;

  @Metadata({ data: "json, name=ExecutionEndTime" })
  executionEndTime?: Date;

  @Metadata({ data: "json, name=ExecutionStartTime" })
  executionStartTime?: Date;

  @Metadata({ data: "json, name=FailureDetails" })
  failureDetails?: FailureDetails;

  @Metadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;

  @Metadata({ data: "json, name=Inputs" })
  inputs?: Map<string, string>;

  @Metadata({ data: "json, name=IsCritical" })
  isCritical?: boolean;

  @Metadata({ data: "json, name=IsEnd" })
  isEnd?: boolean;

  @Metadata({ data: "json, name=MaxAttempts" })
  maxAttempts?: number;

  @Metadata({ data: "json, name=NextStep" })
  nextStep?: string;

  @Metadata({ data: "json, name=OnFailure" })
  onFailure?: string;

  @Metadata({ data: "json, name=Outputs" })
  outputs?: Map<string, string[]>;

  @Metadata({ data: "json, name=OverriddenParameters" })
  overriddenParameters?: Map<string, string[]>;

  @Metadata({ data: "json, name=Response" })
  response?: string;

  @Metadata({ data: "json, name=ResponseCode" })
  responseCode?: string;

  @Metadata({ data: "json, name=StepExecutionId" })
  stepExecutionId?: string;

  @Metadata({ data: "json, name=StepName" })
  stepName?: string;

  @Metadata({ data: "json, name=StepStatus" })
  stepStatus?: AutomationExecutionStatusEnum;

  @Metadata({ data: "json, name=TargetLocation" })
  targetLocation?: TargetLocation;

  @Metadata({ data: "json, name=Targets", elemType: shared.Target })
  targets?: Target[];

  @Metadata({ data: "json, name=TimeoutSeconds" })
  timeoutSeconds?: number;

  @Metadata({ data: "json, name=ValidNextSteps" })
  validNextSteps?: string[];
}

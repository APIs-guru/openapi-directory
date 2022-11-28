import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FailureDetails } from "./failuredetails";
import { AutomationExecutionStatusEnum } from "./automationexecutionstatusenum";
import { TargetLocation } from "./targetlocation";
import { Target } from "./target";



// StepExecution
/** 
 * Detailed information about an the execution state of an Automation step.
**/
export class StepExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=ExecutionEndTime" })
  executionEndTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=ExecutionStartTime" })
  executionStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=FailureDetails" })
  failureDetails?: FailureDetails;

  @SpeakeasyMetadata({ data: "json, name=FailureMessage" })
  failureMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=Inputs" })
  inputs?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=IsCritical" })
  isCritical?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsEnd" })
  isEnd?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxAttempts" })
  maxAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=NextStep" })
  nextStep?: string;

  @SpeakeasyMetadata({ data: "json, name=OnFailure" })
  onFailure?: string;

  @SpeakeasyMetadata({ data: "json, name=Outputs" })
  outputs?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=OverriddenParameters" })
  overriddenParameters?: Map<string, string[]>;

  @SpeakeasyMetadata({ data: "json, name=Response" })
  response?: string;

  @SpeakeasyMetadata({ data: "json, name=ResponseCode" })
  responseCode?: string;

  @SpeakeasyMetadata({ data: "json, name=StepExecutionId" })
  stepExecutionId?: string;

  @SpeakeasyMetadata({ data: "json, name=StepName" })
  stepName?: string;

  @SpeakeasyMetadata({ data: "json, name=StepStatus" })
  stepStatus?: AutomationExecutionStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=TargetLocation" })
  targetLocation?: TargetLocation;

  @SpeakeasyMetadata({ data: "json, name=Targets", elemType: Target })
  targets?: Target[];

  @SpeakeasyMetadata({ data: "json, name=TimeoutSeconds" })
  timeoutSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=ValidNextSteps" })
  validNextSteps?: string[];
}

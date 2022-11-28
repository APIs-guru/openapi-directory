import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionError } from "./executionerror";
import { WorkflowStepTypeEnum } from "./workflowsteptypeenum";



// ExecutionStepResult
/** 
 * Specifies the following details for the step: error (if any), outputs (if any), and the step type.
**/
export class ExecutionStepResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Error" })
  error?: ExecutionError;

  @SpeakeasyMetadata({ data: "json, name=Outputs" })
  outputs?: string;

  @SpeakeasyMetadata({ data: "json, name=StepType" })
  stepType?: WorkflowStepTypeEnum;
}

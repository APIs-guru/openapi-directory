import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ExecutionError } from "./executionerror";
import { WorkflowStepTypeEnum } from "./workflowsteptypeenum";


// ExecutionStepResult
/** 
 * Specifies the following details for the step: error (if any), outputs (if any), and the step type.
**/
export class ExecutionStepResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=Error" })
  error?: ExecutionError;

  @Metadata({ data: "json, name=Outputs" })
  outputs?: string;

  @Metadata({ data: "json, name=StepType" })
  stepType?: WorkflowStepTypeEnum;
}

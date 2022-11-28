import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionError } from "./executionerror";
import { WorkflowStepTypeEnum } from "./workflowsteptypeenum";
/**
 * Specifies the following details for the step: error (if any), outputs (if any), and the step type.
**/
export declare class ExecutionStepResult extends SpeakeasyBase {
    error?: ExecutionError;
    outputs?: string;
    stepType?: WorkflowStepTypeEnum;
}

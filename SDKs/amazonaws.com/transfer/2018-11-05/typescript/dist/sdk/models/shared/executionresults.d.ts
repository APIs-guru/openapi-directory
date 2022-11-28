import { SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStepResult } from "./executionstepresult";
/**
 * Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.
**/
export declare class ExecutionResults extends SpeakeasyBase {
    onExceptionSteps?: ExecutionStepResult[];
    steps?: ExecutionStepResult[];
}

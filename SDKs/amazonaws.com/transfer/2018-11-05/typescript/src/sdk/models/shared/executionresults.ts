import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ExecutionStepResult } from "./executionstepresult";



// ExecutionResults
/** 
 * Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.
**/
export class ExecutionResults extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=OnExceptionSteps", elemType: ExecutionStepResult })
  onExceptionSteps?: ExecutionStepResult[];

  @SpeakeasyMetadata({ data: "json, name=Steps", elemType: ExecutionStepResult })
  steps?: ExecutionStepResult[];
}

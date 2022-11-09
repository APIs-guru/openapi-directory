import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ExecutionStepResult } from "./executionstepresult";
import { ExecutionStepResult } from "./executionstepresult";


// ExecutionResults
/** 
 * Specifies the steps in the workflow, as well as the steps to execute in case of any errors during workflow execution.
**/
export class ExecutionResults extends SpeakeasyBase {
  @Metadata({ data: "json, name=OnExceptionSteps", elemType: shared.ExecutionStepResult })
  onExceptionSteps?: ExecutionStepResult[];

  @Metadata({ data: "json, name=Steps", elemType: shared.ExecutionStepResult })
  steps?: ExecutionStepResult[];
}

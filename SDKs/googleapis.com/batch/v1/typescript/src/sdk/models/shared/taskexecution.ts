import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaskExecution
/** 
 * This Task Execution field includes detail information for task execution procedures, based on StatusEvent types.
**/
export class TaskExecution extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exitCode" })
  exitCode?: number;
}

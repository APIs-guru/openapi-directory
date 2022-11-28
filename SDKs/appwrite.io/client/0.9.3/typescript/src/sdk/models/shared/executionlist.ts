import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Execution } from "./execution";



// ExecutionList
/** 
 * Executions List
**/
export class ExecutionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=executions", elemType: Execution })
  executions: Execution[];

  @SpeakeasyMetadata({ data: "json, name=sum" })
  sum: number;
}

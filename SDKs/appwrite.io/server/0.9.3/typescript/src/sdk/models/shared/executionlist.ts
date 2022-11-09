import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Execution } from "./execution";


// ExecutionList
/** 
 * Executions List
**/
export class ExecutionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=executions", elemType: shared.Execution })
  executions: Execution[];

  @Metadata({ data: "json, name=sum" })
  sum: number;
}

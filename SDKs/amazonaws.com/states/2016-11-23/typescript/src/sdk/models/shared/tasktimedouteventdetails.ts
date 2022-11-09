import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaskTimedOutEventDetails
/** 
 * Contains details about a resource timeout that occurred during an execution.
**/
export class TaskTimedOutEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: string;
}

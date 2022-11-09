import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaskStartFailedEventDetails
/** 
 * Contains details about a task that failed to start during an execution.
**/
export class TaskStartFailedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: string;
}

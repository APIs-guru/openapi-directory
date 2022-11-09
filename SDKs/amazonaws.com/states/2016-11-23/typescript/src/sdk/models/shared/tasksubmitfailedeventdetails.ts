import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaskSubmitFailedEventDetails
/** 
 * Contains details about a task that failed to submit during an execution.
**/
export class TaskSubmitFailedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: string;
}

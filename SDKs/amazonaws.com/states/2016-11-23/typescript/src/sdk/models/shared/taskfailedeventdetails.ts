import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaskFailedEventDetails
/** 
 * Contains details about a task failure event.
**/
export class TaskFailedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=cause" })
  cause?: string;

  @Metadata({ data: "json, name=error" })
  error?: string;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaskStartedEventDetails
/** 
 * Contains details about the start of a task during an execution.
**/
export class TaskStartedEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TaskScheduledEventDetails
/** 
 * Contains details about a task scheduled during an execution.
**/
export class TaskScheduledEventDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=heartbeatInSeconds" })
  heartbeatInSeconds?: number;

  @Metadata({ data: "json, name=parameters" })
  parameters: string;

  @Metadata({ data: "json, name=region" })
  region: string;

  @Metadata({ data: "json, name=resource" })
  resource: string;

  @Metadata({ data: "json, name=resourceType" })
  resourceType: string;

  @Metadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TaskScheduledEventDetails
/** 
 * Contains details about a task scheduled during an execution.
**/
export class TaskScheduledEventDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=heartbeatInSeconds" })
  heartbeatInSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region: string;

  @SpeakeasyMetadata({ data: "json, name=resource" })
  resource: string;

  @SpeakeasyMetadata({ data: "json, name=resourceType" })
  resourceType: string;

  @SpeakeasyMetadata({ data: "json, name=timeoutInSeconds" })
  timeoutInSeconds?: number;
}

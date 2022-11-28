import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListDeadLetterSourceQueuesResult
/** 
 * A list of your dead letter source queues.
**/
export class ListDeadLetterSourceQueuesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata()
  queueUrls: string[];
}

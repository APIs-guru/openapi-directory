import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CreateQueueResult
/** 
 * Returns the <code>QueueUrl</code> attribute of the created queue.
**/
export class CreateQueueResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queueUrl?: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListQueuesResult
/** 
 * A list of your queues.
**/
export class ListQueuesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  nextToken?: string;

  @SpeakeasyMetadata()
  queueUrls?: string[];
}

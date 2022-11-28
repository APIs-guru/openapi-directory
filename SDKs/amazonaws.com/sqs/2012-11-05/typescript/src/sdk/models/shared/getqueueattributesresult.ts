import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GetQueueAttributesResult
/** 
 * A list of returned queue attributes.
**/
export class GetQueueAttributesResult extends SpeakeasyBase {
  @SpeakeasyMetadata()
  attributes?: Map<string, string>;
}

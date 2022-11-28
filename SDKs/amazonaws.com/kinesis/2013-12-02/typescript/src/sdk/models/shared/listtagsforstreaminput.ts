import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ListTagsForStreamInput
/** 
 * Represents the input for <code>ListTagsForStream</code>.
**/
export class ListTagsForStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ExclusiveStartTagKey" })
  exclusiveStartTagKey?: string;

  @SpeakeasyMetadata({ data: "json, name=Limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;
}

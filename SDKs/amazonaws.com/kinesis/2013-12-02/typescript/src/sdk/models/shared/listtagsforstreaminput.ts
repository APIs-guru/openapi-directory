import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ListTagsForStreamInput
/** 
 * Represents the input for <code>ListTagsForStream</code>.
**/
export class ListTagsForStreamInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=ExclusiveStartTagKey" })
  exclusiveStartTagKey?: string;

  @Metadata({ data: "json, name=Limit" })
  limit?: number;

  @Metadata({ data: "json, name=StreamName" })
  streamName: string;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AddTagsToStreamInput
/** 
 * Represents the input for <code>AddTagsToStream</code>.
**/
export class AddTagsToStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;

  @SpeakeasyMetadata({ data: "json, name=Tags" })
  tags: Map<string, string>;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RemoveTagsFromStreamInput
/** 
 * Represents the input for <code>RemoveTagsFromStream</code>.
**/
export class RemoveTagsFromStreamInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=StreamName" })
  streamName: string;

  @SpeakeasyMetadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}

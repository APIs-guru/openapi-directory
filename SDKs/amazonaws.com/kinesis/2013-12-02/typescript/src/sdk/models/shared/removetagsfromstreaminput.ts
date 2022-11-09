import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RemoveTagsFromStreamInput
/** 
 * Represents the input for <code>RemoveTagsFromStream</code>.
**/
export class RemoveTagsFromStreamInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamName" })
  streamName: string;

  @Metadata({ data: "json, name=TagKeys" })
  tagKeys: string[];
}

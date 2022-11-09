import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AddTagsToStreamInput
/** 
 * Represents the input for <code>AddTagsToStream</code>.
**/
export class AddTagsToStreamInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=StreamName" })
  streamName: string;

  @Metadata({ data: "json, name=Tags" })
  tags: Map<string, string>;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * A structure that contains information about a tag.
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}

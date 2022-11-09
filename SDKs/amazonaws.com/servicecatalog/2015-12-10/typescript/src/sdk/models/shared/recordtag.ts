import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RecordTag
/** 
 * Information about a tag, which is a key-value pair.
**/
export class RecordTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}

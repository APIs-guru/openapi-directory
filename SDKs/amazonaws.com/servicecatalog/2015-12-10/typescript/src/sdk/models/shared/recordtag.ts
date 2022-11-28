import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RecordTag
/** 
 * Information about a tag, which is a key-value pair.
**/
export class RecordTag extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}

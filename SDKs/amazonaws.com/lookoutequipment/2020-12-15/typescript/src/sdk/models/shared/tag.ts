import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * A tag is a key-value pair that can be added to a resource as metadata. 
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key: string;

  @Metadata({ data: "json, name=Value" })
  value: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Tag
/** 
 * Details about a tag for a license configuration.
**/
export class Tag extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagFilter
/** 
 * A list of tags (keys and values) that are used to specify the associated resources.
**/
export class TagFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=Key" })
  key?: string;

  @Metadata({ data: "json, name=Values" })
  values?: string[];
}

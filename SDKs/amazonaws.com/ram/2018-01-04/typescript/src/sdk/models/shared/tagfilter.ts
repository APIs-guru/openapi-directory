import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// TagFilter
/** 
 * Used to filter information based on tags.
**/
export class TagFilter extends SpeakeasyBase {
  @Metadata({ data: "json, name=tagKey" })
  tagKey?: string;

  @Metadata({ data: "json, name=tagValues" })
  tagValues?: string[];
}

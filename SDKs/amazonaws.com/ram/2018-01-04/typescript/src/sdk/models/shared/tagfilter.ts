import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagFilter
/** 
 * Used to filter information based on tags.
**/
export class TagFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=tagKey" })
  tagKey?: string;

  @SpeakeasyMetadata({ data: "json, name=tagValues" })
  tagValues?: string[];
}

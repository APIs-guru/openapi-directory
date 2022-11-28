import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// TagFilter
/** 
 * A list of tags (keys and values) that are used to specify the associated resources.
**/
export class TagFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=Values" })
  values?: string[];
}

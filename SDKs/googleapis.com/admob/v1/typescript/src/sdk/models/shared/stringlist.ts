import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StringList
/** 
 * List of string values.
**/
export class StringList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}

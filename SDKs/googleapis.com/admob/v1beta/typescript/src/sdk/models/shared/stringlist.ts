import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StringList
/** 
 * List of string values.
**/
export class StringList extends SpeakeasyBase {
  @Metadata({ data: "json, name=values" })
  values?: string[];
}

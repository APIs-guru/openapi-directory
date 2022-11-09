import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IntArray
/** 
 * An array of int.
**/
export class IntArray extends SpeakeasyBase {
  @Metadata({ data: "json, name=elements" })
  elements?: string[];
}

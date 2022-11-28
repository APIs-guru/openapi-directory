import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IntArray
/** 
 * An array of int.
**/
export class IntArray extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=elements" })
  elements?: string[];
}

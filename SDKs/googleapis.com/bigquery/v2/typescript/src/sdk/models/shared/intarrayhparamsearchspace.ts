import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { IntArray } from "./intarray";



// IntArrayHparamSearchSpace
/** 
 * Search space for int array.
**/
export class IntArrayHparamSearchSpace extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=candidates", elemType: IntArray })
  candidates?: IntArray[];
}

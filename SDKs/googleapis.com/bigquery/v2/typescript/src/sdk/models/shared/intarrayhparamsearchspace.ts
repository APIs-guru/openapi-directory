import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { IntArray } from "./intarray";


// IntArrayHparamSearchSpace
/** 
 * Search space for int array.
**/
export class IntArrayHparamSearchSpace extends SpeakeasyBase {
  @Metadata({ data: "json, name=candidates", elemType: shared.IntArray })
  candidates?: IntArray[];
}

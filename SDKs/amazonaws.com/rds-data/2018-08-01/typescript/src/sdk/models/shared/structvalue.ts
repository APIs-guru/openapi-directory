import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



// StructValue
/** 
 * A structure value returned by a call.
**/
export class StructValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attributes", elemType: Value })
  attributes?: Value[];
}

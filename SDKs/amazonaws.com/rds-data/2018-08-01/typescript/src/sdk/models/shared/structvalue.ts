import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";


// StructValue
/** 
 * A structure value returned by a call.
**/
export class StructValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=attributes", elemType: shared.Value })
  attributes?: Value[];
}

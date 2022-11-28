import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Value } from "./value";



// Record
/** 
 * A record returned by a call.
**/
export class Record extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=values", elemType: Value })
  values?: Value[];
}

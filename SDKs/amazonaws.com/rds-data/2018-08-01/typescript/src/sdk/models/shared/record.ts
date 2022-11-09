import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Value } from "./value";


// Record
/** 
 * A record returned by a call.
**/
export class Record extends SpeakeasyBase {
  @Metadata({ data: "json, name=values", elemType: shared.Value })
  values?: Value[];
}

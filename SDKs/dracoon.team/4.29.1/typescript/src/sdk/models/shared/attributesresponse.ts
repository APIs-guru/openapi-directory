import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValueEntry } from "./keyvalueentry";
import { Range } from "./range";


// AttributesResponse
/** 
 * Ranged list of attributes
**/
export class AttributesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.KeyValueEntry })
  items: KeyValueEntry[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}

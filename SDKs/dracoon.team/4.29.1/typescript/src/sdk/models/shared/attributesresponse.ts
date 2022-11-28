import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValueEntry } from "./keyvalueentry";
import { Range } from "./range";



// AttributesResponse
/** 
 * Ranged list of attributes
**/
export class AttributesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: KeyValueEntry })
  items: KeyValueEntry[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}

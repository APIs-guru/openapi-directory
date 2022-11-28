import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValueEntry } from "./keyvalueentry";
import { Range } from "./range";



// ProfileAttributes
/** 
 * User profile attributes
**/
export class ProfileAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: KeyValueEntry })
  items: KeyValueEntry[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}

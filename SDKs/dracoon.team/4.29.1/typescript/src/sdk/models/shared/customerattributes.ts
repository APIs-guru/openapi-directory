import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValueEntry } from "./keyvalueentry";



// CustomerAttributes
/** 
 * List of customer attributes
**/
export class CustomerAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: KeyValueEntry })
  items: KeyValueEntry[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValueEntry } from "./keyvalueentry";



// ConfigOptionList
/** 
 * List of key-value pairs
**/
export class ConfigOptionList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: KeyValueEntry })
  items: KeyValueEntry[];
}

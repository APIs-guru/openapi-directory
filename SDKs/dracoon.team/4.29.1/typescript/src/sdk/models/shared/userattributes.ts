import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { KeyValueEntry } from "./keyvalueentry";



// UserAttributes
/** 
 * User custom attributes (list of key-value pairs)
**/
export class UserAttributes extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: KeyValueEntry })
  items: KeyValueEntry[];
}

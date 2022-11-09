import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValueEntry } from "./keyvalueentry";


// UserAttributes
/** 
 * User custom attributes (list of key-value pairs)
**/
export class UserAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.KeyValueEntry })
  items: KeyValueEntry[];
}

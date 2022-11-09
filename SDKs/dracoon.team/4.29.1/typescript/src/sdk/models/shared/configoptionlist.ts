import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValueEntry } from "./keyvalueentry";


// ConfigOptionList
/** 
 * List of key-value pairs
**/
export class ConfigOptionList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.KeyValueEntry })
  items: KeyValueEntry[];
}

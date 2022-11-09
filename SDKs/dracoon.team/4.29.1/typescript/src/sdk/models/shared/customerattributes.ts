import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValueEntry } from "./keyvalueentry";


// CustomerAttributes
/** 
 * List of customer attributes
**/
export class CustomerAttributes extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.KeyValueEntry })
  items: KeyValueEntry[];
}

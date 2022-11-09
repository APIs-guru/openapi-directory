import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { KeyValueEntry } from "./keyvalueentry";


// ProfileAttributesRequest
/** 
 * Request model for setting user profile attributes
**/
export class ProfileAttributesRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.KeyValueEntry })
  items: KeyValueEntry[];
}

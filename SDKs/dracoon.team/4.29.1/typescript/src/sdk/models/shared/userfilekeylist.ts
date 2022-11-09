import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { UserFileKey } from "./userfilekey";


// UserFileKeyList
/** 
 * List of user file keys
**/
export class UserFileKeyList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.UserFileKey })
  items?: UserFileKey[];
}

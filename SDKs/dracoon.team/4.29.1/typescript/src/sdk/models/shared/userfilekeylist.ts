import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { UserFileKey } from "./userfilekey";



// UserFileKeyList
/** 
 * List of user file keys
**/
export class UserFileKeyList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: UserFileKey })
  items?: UserFileKey[];
}

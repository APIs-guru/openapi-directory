import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleUser } from "./roleuser";
import { Range } from "./range";



// RoleUserList
/** 
 * List of users with assigned role
**/
export class RoleUserList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RoleUser })
  items: RoleUser[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}

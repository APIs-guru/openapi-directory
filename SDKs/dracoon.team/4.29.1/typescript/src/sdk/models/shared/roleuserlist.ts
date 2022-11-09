import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoleUser } from "./roleuser";
import { Range } from "./range";


// RoleUserList
/** 
 * List of users with assigned role
**/
export class RoleUserList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RoleUser })
  items: RoleUser[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}

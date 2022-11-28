import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";



// RoleList
/** 
 * List of roles
**/
export class RoleList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Role })
  items: Role[];
}

import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Role } from "./role";


// RoleList
/** 
 * List of roles
**/
export class RoleList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Role })
  items: Role[];
}

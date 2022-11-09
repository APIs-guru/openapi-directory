import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoleGroup } from "./rolegroup";
import { Range } from "./range";


// RoleGroupList
/** 
 * List of groups with assigned role
**/
export class RoleGroupList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RoleGroup })
  items: RoleGroup[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoleGroup } from "./rolegroup";
import { Range } from "./range";



// RoleGroupList
/** 
 * List of groups with assigned role
**/
export class RoleGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RoleGroup })
  items: RoleGroup[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}

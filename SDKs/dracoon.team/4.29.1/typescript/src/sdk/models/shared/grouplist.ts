import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Group } from "./group";
import { Range } from "./range";



// GroupList
/** 
 * List of groups
**/
export class GroupList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: Group })
  items: Group[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}

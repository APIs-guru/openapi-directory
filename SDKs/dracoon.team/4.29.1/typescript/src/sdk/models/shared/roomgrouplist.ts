import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoomGroup } from "./roomgroup";
import { Range } from "./range";



// RoomGroupList
/** 
 * List of groups
**/
export class RoomGroupList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RoomGroup })
  items: RoomGroup[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}

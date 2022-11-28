import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoomData } from "./roomdata";
import { Range } from "./range";



// RoomTreeDataList
/** 
 * List of rooms
**/
export class RoomTreeDataList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RoomData })
  items: RoomData[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}

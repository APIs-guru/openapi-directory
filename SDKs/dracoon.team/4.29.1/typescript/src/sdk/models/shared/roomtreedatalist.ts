import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoomData } from "./roomdata";
import { Range } from "./range";


// RoomTreeDataList
/** 
 * List of rooms
**/
export class RoomTreeDataList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RoomData })
  items: RoomData[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}

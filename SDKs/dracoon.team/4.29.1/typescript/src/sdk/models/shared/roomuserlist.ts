import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RoomUserOutput } from "./roomuser";
import { Range } from "./range";



// RoomUserListOutput
/** 
 * List of users
**/
export class RoomUserListOutput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: RoomUserOutput })
  items: RoomUserOutput[];

  @SpeakeasyMetadata({ data: "json, name=range" })
  range: Range;
}

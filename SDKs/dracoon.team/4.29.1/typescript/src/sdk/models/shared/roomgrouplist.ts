import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { RoomGroup } from "./roomgroup";
import { Range } from "./range";


// RoomGroupList
/** 
 * List of groups
**/
export class RoomGroupList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.RoomGroup })
  items: RoomGroup[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}

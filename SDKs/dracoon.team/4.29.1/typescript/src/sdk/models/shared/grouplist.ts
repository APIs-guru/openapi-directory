import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Group } from "./group";
import { Range } from "./range";


// GroupList
/** 
 * List of groups
**/
export class GroupList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.Group })
  items: Group[];

  @Metadata({ data: "json, name=range" })
  range: Range;
}

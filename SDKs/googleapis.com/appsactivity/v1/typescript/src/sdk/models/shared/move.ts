import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Parent } from "./parent";
import { Parent } from "./parent";


// Move
/** 
 * Contains information about changes in an object's parents as a result of a move type event.
**/
export class Move extends SpeakeasyBase {
  @Metadata({ data: "json, name=addedParents", elemType: shared.Parent })
  addedParents?: Parent[];

  @Metadata({ data: "json, name=removedParents", elemType: shared.Parent })
  removedParents?: Parent[];
}

import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Parent } from "./parent";



// Move
/** 
 * Contains information about changes in an object's parents as a result of a move type event.
**/
export class Move extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=addedParents", elemType: Parent })
  addedParents?: Parent[];

  @SpeakeasyMetadata({ data: "json, name=removedParents", elemType: Parent })
  removedParents?: Parent[];
}

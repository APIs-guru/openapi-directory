import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DestinyQuestsDestinyObjectiveProgress } from "./destinyquestsdestinyobjectiveprogress";



// DestinyComponentsItemsDestinyItemPlugComponent
/** 
 * Plugs are non-instanced items that can provide Stat and Perk benefits when socketed into an instanced item. Items have Sockets, and Plugs are inserted into Sockets.
 * This component finds all items that are considered "Plugs" in your inventory, and return information about the plug aside from any specific Socket into which it could be inserted.
**/
export class DestinyComponentsItemsDestinyItemPlugComponent extends SpeakeasyBase {
  @SpeakeasyMetadata()
  canInsert?: boolean;

  @SpeakeasyMetadata()
  enableFailIndexes?: number[];

  @SpeakeasyMetadata()
  enabled?: boolean;

  @SpeakeasyMetadata()
  insertFailIndexes?: number[];

  @SpeakeasyMetadata()
  plugItemHash?: number;

  @SpeakeasyMetadata({ elemType: DestinyQuestsDestinyObjectiveProgress })
  plugObjectives?: DestinyQuestsDestinyObjectiveProgress[];
}

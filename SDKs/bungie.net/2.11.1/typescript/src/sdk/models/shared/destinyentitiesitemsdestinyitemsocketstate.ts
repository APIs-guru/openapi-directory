import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DestinyEntitiesItemsDestinyItemSocketState
/** 
 * The status of a given item's socket. (which plug is inserted, if any: whether it is enabled, what "reusable" plugs can be inserted, etc...)
 * If I had it to do over, this would probably have a DestinyItemPlug representing the inserted item instead of most of these properties. :shrug:
**/
export class DestinyEntitiesItemsDestinyItemSocketState extends SpeakeasyBase {
  @SpeakeasyMetadata()
  enableFailIndexes?: number[];

  @SpeakeasyMetadata()
  isEnabled?: boolean;

  @SpeakeasyMetadata()
  isVisible?: boolean;

  @SpeakeasyMetadata()
  plugHash?: number;
}

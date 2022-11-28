import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ContinueWatchingListDataExpansion } from "./continuewatchinglistdataexpansion";



// ContinueWatchingListData
/** 
 * List data for ContinueWatching List
**/
export class ContinueWatchingListData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=itemInclusions", elemType: ContinueWatchingListDataExpansion })
  itemInclusions?: Map<string, ContinueWatchingListDataExpansion>;
}

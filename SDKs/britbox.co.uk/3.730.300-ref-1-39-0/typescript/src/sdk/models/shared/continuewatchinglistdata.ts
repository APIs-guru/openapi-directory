import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ContinueWatchingListDataExpansion } from "./continuewatchinglistdataexpansion";


// ContinueWatchingListData
/** 
 * List data for ContinueWatching List
**/
export class ContinueWatchingListData extends SpeakeasyBase {
  @Metadata({ data: "json, name=itemInclusions", elemType: shared.ContinueWatchingListDataExpansion })
  itemInclusions?: Map<string, ContinueWatchingListDataExpansion>;
}

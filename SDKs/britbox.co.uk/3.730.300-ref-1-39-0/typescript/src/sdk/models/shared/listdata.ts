import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ContinueWatchingListData } from "./continuewatchinglistdata";


// ListData
/** 
 * Extra data to accompany ItemList content. The (single) key in the object is
 * the list name and the data changes depending on the list
 * 
**/
export class ListData extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContinueWatching" })
  continueWatching?: ContinueWatchingListData;
}
